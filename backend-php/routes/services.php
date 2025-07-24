<?php
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../config/auth.php';

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Extract service identifier from path
preg_match('#/services(?:/([^/]+))?#', $path, $matches);
$identifier = $matches[1] ?? null;

switch ($method) {
    case 'GET':
        if ($identifier) {
            // Get single service by service_type or ID
            try {
                if (is_numeric($identifier)) {
                    $service = $db->fetchOne(
                        'SELECT * FROM service_pages WHERE id = ? AND status = "published"',
                        [$identifier]
                    );
                } else {
                    $service = $db->fetchOne(
                        'SELECT * FROM service_pages WHERE service_type = ? AND status = "published"',
                        [$identifier]
                    );
                }
                
                if (!$service) {
                    http_response_code(404);
                    echo json_encode(['error' => 'Service not found']);
                    break;
                }
                
                echo json_encode($service);
                
            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Server error']);
            }
        } else {
            // Get all published services
            try {
                $services = $db->fetchAll(
                    'SELECT * FROM service_pages WHERE status = "published" ORDER BY created_at DESC'
                );
                
                echo json_encode(['services' => $services]);
                
            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Server error']);
            }
        }
        break;
        
    case 'POST':
        $user = Auth::requireAdmin();
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (empty($input['service_type']) || empty($input['title']) || empty($input['description'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Service type, title, and description required']);
            break;
        }
        
        try {
            $db->execute(
                'INSERT INTO service_pages (service_type, title, description, features, pricing, meta_title, meta_description, status, author_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    $input['service_type'],
                    $input['title'],
                    $input['description'],
                    $input['features'] ?? null,
                    $input['pricing'] ?? null,
                    $input['meta_title'] ?? $input['title'],
                    $input['meta_description'] ?? '',
                    $input['status'] ?? 'draft',
                    $user['id']
                ]
            );
            
            $serviceId = $db->lastInsertId();
            $service = $db->fetchOne('SELECT * FROM service_pages WHERE id = ?', [$serviceId]);
            
            echo json_encode($service);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    case 'PUT':
        $user = Auth::requireAdmin();
        if (!$identifier || !is_numeric($identifier)) {
            http_response_code(400);
            echo json_encode(['error' => 'Valid service ID required']);
            break;
        }
        
        $input = json_decode(file_get_contents('php://input'), true);
        
        try {
            $updateFields = [];
            $params = [];
            
            foreach (['service_type', 'title', 'description', 'features', 'pricing', 'meta_title', 'meta_description', 'status'] as $field) {
                if (isset($input[$field])) {
                    $updateFields[] = "$field = ?";
                    $params[] = $input[$field];
                }
            }
            
            if (!empty($updateFields)) {
                $params[] = $identifier;
                $db->execute(
                    'UPDATE service_pages SET ' . implode(', ', $updateFields) . ', updated_at = NOW() WHERE id = ?',
                    $params
                );
            }
            
            $service = $db->fetchOne('SELECT * FROM service_pages WHERE id = ?', [$identifier]);
            echo json_encode($service);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    case 'DELETE':
        $user = Auth::requireAdmin();
        if (!$identifier || !is_numeric($identifier)) {
            http_response_code(400);
            echo json_encode(['error' => 'Valid service ID required']);
            break;
        }
        
        try {
            $db->execute('DELETE FROM service_pages WHERE id = ?', [$identifier]);
            echo json_encode(['message' => 'Service deleted successfully']);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
?>