<?php
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../config/auth.php';

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Extract action from path
$action = '';
if (preg_match('#/newsletter/(.+)#', $path, $matches)) {
    $action = $matches[1];
}

switch ($action) {
    case 'subscribe':
        if ($method !== 'POST') {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
            break;
        }
        
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (empty($input['email'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Email is required']);
            break;
        }
        
        if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
            http_response_code(400);
            echo json_encode(['error' => 'Invalid email format']);
            break;
        }
        
        try {
            // Check if already subscribed
            $existing = $db->fetchOne(
                'SELECT id FROM newsletter_subscribers WHERE email = ?',
                [$input['email']]
            );
            
            if ($existing) {
                echo json_encode(['message' => 'Email already subscribed']);
                break;
            }
            
            $db->execute(
                'INSERT INTO newsletter_subscribers (email, status) VALUES (?, ?)',
                [$input['email'], 'active']
            );
            
            echo json_encode(['message' => 'Successfully subscribed to newsletter']);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    case 'unsubscribe':
        if ($method !== 'POST') {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
            break;
        }
        
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (empty($input['email'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Email is required']);
            break;
        }
        
        try {
            $db->execute(
                'UPDATE newsletter_subscribers SET status = ?, updated_at = NOW() WHERE email = ?',
                ['unsubscribed', $input['email']]
            );
            
            echo json_encode(['message' => 'Successfully unsubscribed from newsletter']);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    case 'subscribers':
        if ($method !== 'GET') {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
            break;
        }
        
        $user = Auth::requireAdmin();
        
        try {
            $page = (int)($_GET['page'] ?? 1);
            $limit = (int)($_GET['limit'] ?? 50);
            $offset = ($page - 1) * $limit;
            $status = $_GET['status'] ?? 'active';
            
            $subscribers = $db->fetchAll(
                'SELECT * FROM newsletter_subscribers WHERE status = ? ORDER BY created_at DESC LIMIT ? OFFSET ?',
                [$status, $limit, $offset]
            );
            
            $total = $db->fetchOne(
                'SELECT COUNT(*) as count FROM newsletter_subscribers WHERE status = ?',
                [$status]
            )['count'];
            
            echo json_encode([
                'subscribers' => $subscribers,
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
        
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Newsletter endpoint not found']);
        break;
}
?>