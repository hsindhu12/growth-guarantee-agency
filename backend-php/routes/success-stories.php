<?php
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../config/auth.php';

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Extract story ID from path
preg_match('#/success-stories(?:/(\d+))?#', $path, $matches);
$storyId = $matches[1] ?? null;

switch ($method) {
    case 'GET':
        if ($storyId) {
            // Get single success story
            try {
                $story = $db->fetchOne(
                    'SELECT * FROM success_stories WHERE id = ? AND status = "published"',
                    [$storyId]
                );
                
                if (!$story) {
                    http_response_code(404);
                    echo json_encode(['error' => 'Success story not found']);
                    break;
                }
                
                echo json_encode($story);
                
            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Server error']);
            }
        } else {
            // Get all published success stories
            try {
                $page = (int)($_GET['page'] ?? 1);
                $limit = (int)($_GET['limit'] ?? 10);
                $offset = ($page - 1) * $limit;
                
                $stories = $db->fetchAll(
                    'SELECT * FROM success_stories WHERE status = "published" ORDER BY created_at DESC LIMIT ? OFFSET ?',
                    [$limit, $offset]
                );
                
                $total = $db->fetchOne('SELECT COUNT(*) as count FROM success_stories WHERE status = "published"')['count'];
                
                echo json_encode([
                    'stories' => $stories,
                    'pagination' => [
                        'page' => $page,
                        'limit' => $limit,
                        'total' => (int)$total,
                        'pages' => ceil($total / $limit)
                    ]
                ]);
                
            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Server error']);
            }
        }
        break;
        
    case 'POST':
        $user = Auth::requireAdmin();
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (empty($input['client_name']) || empty($input['description'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Client name and description required']);
            break;
        }
        
        try {
            $db->execute(
                'INSERT INTO success_stories (client_name, client_industry, project_title, description, results, testimonial, featured_image, status, author_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    $input['client_name'],
                    $input['client_industry'] ?? null,
                    $input['project_title'] ?? '',
                    $input['description'],
                    $input['results'] ?? null,
                    $input['testimonial'] ?? null,
                    $input['featured_image'] ?? null,
                    $input['status'] ?? 'draft',
                    $user['id']
                ]
            );
            
            $storyId = $db->lastInsertId();
            $story = $db->fetchOne('SELECT * FROM success_stories WHERE id = ?', [$storyId]);
            
            echo json_encode($story);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    case 'PUT':
        $user = Auth::requireAdmin();
        if (!$storyId) {
            http_response_code(400);
            echo json_encode(['error' => 'Story ID required']);
            break;
        }
        
        $input = json_decode(file_get_contents('php://input'), true);
        
        try {
            $updateFields = [];
            $params = [];
            
            foreach (['client_name', 'client_industry', 'project_title', 'description', 'results', 'testimonial', 'featured_image', 'status'] as $field) {
                if (isset($input[$field])) {
                    $updateFields[] = "$field = ?";
                    $params[] = $input[$field];
                }
            }
            
            if (!empty($updateFields)) {
                $params[] = $storyId;
                $db->execute(
                    'UPDATE success_stories SET ' . implode(', ', $updateFields) . ', updated_at = NOW() WHERE id = ?',
                    $params
                );
            }
            
            $story = $db->fetchOne('SELECT * FROM success_stories WHERE id = ?', [$storyId]);
            echo json_encode($story);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    case 'DELETE':
        $user = Auth::requireAdmin();
        if (!$storyId) {
            http_response_code(400);
            echo json_encode(['error' => 'Story ID required']);
            break;
        }
        
        try {
            $db->execute('DELETE FROM success_stories WHERE id = ?', [$storyId]);
            echo json_encode(['message' => 'Success story deleted successfully']);
            
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