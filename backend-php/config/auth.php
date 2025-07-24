<?php
require_once __DIR__ . '/../vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Auth {
    private static $secret;
    
    public static function init() {
        self::$secret = $_ENV['JWT_SECRET'] ?? 'your_secret_key_here';
    }
    
    public static function generateToken($userId, $email, $role) {
        $payload = [
            'userId' => $userId,
            'email' => $email,
            'role' => $role,
            'iat' => time(),
            'exp' => time() + (24 * 60 * 60) // 24 hours
        ];
        
        return JWT::encode($payload, self::$secret, 'HS256');
    }
    
    public static function verifyToken($token) {
        try {
            return JWT::decode($token, new Key(self::$secret, 'HS256'));
        } catch (Exception $e) {
            return false;
        }
    }
    
    public static function getAuthUser() {
        $headers = getallheaders();
        $authHeader = $headers['Authorization'] ?? $headers['authorization'] ?? '';
        
        if (empty($authHeader) || !preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
            return false;
        }
        
        $token = $matches[1];
        $decoded = self::verifyToken($token);
        
        if (!$decoded) {
            return false;
        }
        
        // Verify user still exists
        global $db;
        $user = $db->fetchOne(
            'SELECT id, email, name, role FROM admin_users WHERE id = ?',
            [$decoded->userId]
        );
        
        return $user ?: false;
    }
    
    public static function requireAuth() {
        $user = self::getAuthUser();
        if (!$user) {
            http_response_code(401);
            echo json_encode(['error' => 'Authentication required']);
            exit;
        }
        return $user;
    }
    
    public static function requireAdmin() {
        $user = self::requireAuth();
        if (!in_array($user['role'], ['admin', 'super_admin'])) {
            http_response_code(403);
            echo json_encode(['error' => 'Admin access required']);
            exit;
        }
        return $user;
    }
    
    public static function hashPassword($password) {
        return password_hash($password, PASSWORD_DEFAULT);
    }
    
    public static function verifyPassword($password, $hash) {
        return password_verify($password, $hash);
    }
}

Auth::init();
?>