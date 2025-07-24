<?php
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../config/auth.php';

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Remove prefixes to get the action
$action = preg_replace('#^.*/auth/#', '', $path);

switch ($action) {
    case 'login':
        if ($method !== 'POST') {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
            break;
        }
        
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (empty($input['email']) || empty($input['password'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Email and password required']);
            break;
        }
        
        try {
            $user = $db->fetchOne(
                'SELECT id, email, name, role, password FROM admin_users WHERE email = ?',
                [$input['email']]
            );
            
            if (!$user || !Auth::verifyPassword($input['password'], $user['password'])) {
                http_response_code(401);
                echo json_encode(['error' => 'Invalid credentials']);
                break;
            }
            
            $token = Auth::generateToken($user['id'], $user['email'], $user['role']);
            
            // Update last login
            $db->execute(
                'UPDATE admin_users SET last_login = NOW() WHERE id = ?',
                [$user['id']]
            );
            
            echo json_encode([
                'token' => $token,
                'user' => [
                    'id' => $user['id'],
                    'email' => $user['email'],
                    'name' => $user['name'],
                    'role' => $user['role']
                ]
            ]);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    case 'verify':
        if ($method !== 'GET') {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
            break;
        }
        
        $user = Auth::getAuthUser();
        if (!$user) {
            http_response_code(401);
            echo json_encode(['error' => 'Invalid token']);
            break;
        }
        
        echo json_encode([
            'user' => [
                'id' => $user['id'],
                'email' => $user['email'],
                'name' => $user['name'],
                'role' => $user['role']
            ]
        ]);
        break;
        
    case 'logout':
        // For JWT, logout is handled client-side by removing the token
        echo json_encode(['message' => 'Logged out successfully']);
        break;
        
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Auth endpoint not found']);
        break;
}
?>