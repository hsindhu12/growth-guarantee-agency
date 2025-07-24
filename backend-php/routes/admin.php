<?php
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../config/auth.php';

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Extract admin action from path
$action = '';
if (preg_match('#/admin/(.+)#', $path, $matches)) {
    $action = $matches[1];
}

switch ($action) {
    case 'dashboard':
        if ($method !== 'GET') {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
            break;
        }
        
        $user = Auth::requireAdmin();
        
        try {
            // Get dashboard statistics
            $stats = [];
            
            // Blog posts count
            $blogStats = $db->fetchOne('SELECT COUNT(*) as total, SUM(CASE WHEN status = "published" THEN 1 ELSE 0 END) as published FROM blog_posts');
            $stats['blog_posts'] = $blogStats;
            
            // Success stories count
            $storiesStats = $db->fetchOne('SELECT COUNT(*) as total, SUM(CASE WHEN status = "published" THEN 1 ELSE 0 END) as published FROM success_stories');
            $stats['success_stories'] = $storiesStats;
            
            // Contact forms count
            $contactStats = $db->fetchOne('SELECT COUNT(*) as total, SUM(CASE WHEN status = "new" THEN 1 ELSE 0 END) as new FROM contacts');
            $stats['contacts'] = $contactStats;
            
            // Newsletter subscribers count
            $newsletterStats = $db->fetchOne('SELECT COUNT(*) as total, SUM(CASE WHEN status = "active" THEN 1 ELSE 0 END) as active FROM newsletter_subscribers');
            $stats['newsletter'] = $newsletterStats;
            
            // Recent contacts
            $recentContacts = $db->fetchAll(
                'SELECT name, email, created_at, status FROM contacts ORDER BY created_at DESC LIMIT 5'
            );
            $stats['recent_contacts'] = $recentContacts;
            
            echo json_encode(['stats' => $stats]);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    case 'settings':
        $user = Auth::requireAdmin();
        
        if ($method === 'GET') {
            try {
                $settings = $db->fetchAll('SELECT setting_key, setting_value FROM site_settings');
                
                $settingsObj = [];
                foreach ($settings as $setting) {
                    $settingsObj[$setting['setting_key']] = $setting['setting_value'];
                }
                
                echo json_encode(['settings' => $settingsObj]);
                
            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Server error']);
            }
        } else {
            http_response_code(405);
            echo json_encode(['error' => 'Method not allowed']);
        }
        break;
        
    default:
        // Handle settings update with specific key
        if (preg_match('#^settings/(.+)#', $action, $matches)) {
            if ($method !== 'PUT') {
                http_response_code(405);
                echo json_encode(['error' => 'Method not allowed']);
                break;
            }
            
            $user = Auth::requireAdmin();
            $settingKey = $matches[1];
            $input = json_decode(file_get_contents('php://input'), true);
            
            if (!isset($input['value'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Setting value required']);
                break;
            }
            
            try {
                // Check if setting exists
                $existing = $db->fetchOne(
                    'SELECT id FROM site_settings WHERE setting_key = ?',
                    [$settingKey]
                );
                
                if ($existing) {
                    $db->execute(
                        'UPDATE site_settings SET setting_value = ?, updated_at = NOW() WHERE setting_key = ?',
                        [$input['value'], $settingKey]
                    );
                } else {
                    $db->execute(
                        'INSERT INTO site_settings (setting_key, setting_value) VALUES (?, ?)',
                        [$settingKey, $input['value']]
                    );
                }
                
                echo json_encode(['message' => 'Setting updated successfully']);
                
            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Server error']);
            }
        } else {
            http_response_code(404);
            echo json_encode(['error' => 'Admin endpoint not found']);
        }
        break;
}
?>