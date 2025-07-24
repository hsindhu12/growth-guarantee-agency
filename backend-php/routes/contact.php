<?php
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../config/auth.php';

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'POST':
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (empty($input['name']) || empty($input['email']) || empty($input['message'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Name, email, and message are required']);
            break;
        }
        
        // Validate email
        if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid email format']);
            break;
        }
        
        try {
            $db->execute(
                'INSERT INTO contacts (name, email, phone, company, message, service_interest, status) VALUES (?, ?, ?, ?, ?, ?, ?)',
                [
                    $input['name'],
                    $input['email'],
                    $input['phone'] ?? null,
                    $input['company'] ?? null,
                    $input['message'],
                    $input['service_interest'] ?? null,
                    'new'
                ]
            );
            
            echo json_encode(['message' => 'Contact form submitted successfully']);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    case 'GET':
        $user = Auth::requireAdmin();
        
        try {
            $page = (int)($_GET['page'] ?? 1);
            $limit = (int)($_GET['limit'] ?? 20);
            $offset = ($page - 1) * $limit;
            $status = $_GET['status'] ?? null;
            
            $whereClause = '';
            $params = [];
            
            if ($status) {
                $whereClause = 'WHERE status = ?';
                $params[] = $status;
            }
            
            $contacts = $db->fetchAll(
                "SELECT * FROM contacts $whereClause ORDER BY created_at DESC LIMIT ? OFFSET ?",
                array_merge($params, [$limit, $offset])
            );
            
            $totalQuery = "SELECT COUNT(*) as count FROM contacts $whereClause";
            $total = $db->fetchOne($totalQuery, $params)['count'];
            
            echo json_encode([
                'contacts' => $contacts,
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
        break;
        
    case 'PUT':
        $user = Auth::requireAdmin();
        $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
        
        if (!preg_match('#/contact/(\d+)/status#', $path, $matches)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid endpoint']);
            break;
        }
        
        $contactId = $matches[1];
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (empty($input['status']) || !in_array($input['status'], ['new', 'contacted', 'resolved', 'spam'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Valid status required']);
            break;
        }
        
        try {
            $db->execute(
                'UPDATE contacts SET status = ?, updated_at = NOW() WHERE id = ?',
                [$input['status'], $contactId]
            );
            
            echo json_encode(['message' => 'Contact status updated successfully']);
            
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