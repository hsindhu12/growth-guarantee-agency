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

// Handle pages routes
if (preg_match('#^pages#', $action)) {
    handlePagesRoutes($action, $method, $user);
}

function handlePagesRoutes($action, $method, $user) {
    global $db;
    
    // Extract page ID from action if present
    preg_match('#^pages(?:/(\d+))?#', $action, $matches);
    $pageId = $matches[1] ?? null;
    
    switch ($method) {
        case 'GET':
            if ($pageId) {
                // Get single page
                try {
                    $page = $db->fetchOne('SELECT * FROM pages WHERE id = ?', [$pageId]);
                    if (!$page) {
                        http_response_code(404);
                        echo json_encode(['error' => 'Page not found']);
                        return;
                    }
                    echo json_encode($page);
                } catch (Exception $e) {
                    http_response_code(500);
                    echo json_encode(['error' => 'Server error']);
                }
            } else {
                // Get all pages
                try {
                    $pages = $db->fetchAll('SELECT * FROM pages ORDER BY updated_at DESC');
                    echo json_encode(['pages' => $pages]);
                } catch (Exception $e) {
                    http_response_code(500);
                    echo json_encode(['error' => 'Server error']);
                }
            }
            break;
            
        case 'POST':
            // Create new page
            $input = json_decode(file_get_contents('php://input'), true);
            
            if (empty($input['title']) || empty($input['slug'])) {
                http_response_code(400);
                echo json_encode(['error' => 'Title and slug required']);
                return;
            }
            
            try {
                $db->execute(
                    'INSERT INTO pages (title, slug, content, meta_title, meta_description, status, template, author_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
                    [
                        $input['title'],
                        $input['slug'],
                        $input['content'] ?? '{}',
                        $input['meta_title'] ?? $input['title'],
                        $input['meta_description'] ?? '',
                        $input['status'] ?? 'draft',
                        $input['template'] ?? 'default',
                        $user['id']
                    ]
                );
                
                $pageId = $db->lastInsertId();
                $page = $db->fetchOne('SELECT * FROM pages WHERE id = ?', [$pageId]);
                
                echo json_encode($page);
                
            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Server error']);
            }
            break;
            
        case 'PUT':
            if (!$pageId) {
                http_response_code(400);
                echo json_encode(['error' => 'Page ID required']);
                return;
            }
            
            $input = json_decode(file_get_contents('php://input'), true);
            
            try {
                $updateFields = [];
                $params = [];
                
                foreach (['title', 'slug', 'content', 'meta_title', 'meta_description', 'status', 'template'] as $field) {
                    if (isset($input[$field])) {
                        $updateFields[] = "$field = ?";
                        $params[] = $input[$field];
                    }
                }
                
                if (!empty($updateFields)) {
                    $params[] = $pageId;
                    $db->execute(
                        'UPDATE pages SET ' . implode(', ', $updateFields) . ', updated_at = NOW() WHERE id = ?',
                        $params
                    );
                }
                
                $page = $db->fetchOne('SELECT * FROM pages WHERE id = ?', [$pageId]);
                echo json_encode($page);
                
            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Server error']);
            }
            break;
            
        case 'DELETE':
            if (!$pageId) {
                http_response_code(400);
                echo json_encode(['error' => 'Page ID required']);
                return;
            }
            
            try {
                $db->execute('DELETE FROM pages WHERE id = ?', [$pageId]);
                echo json_encode(['message' => 'Page deleted successfully']);
                
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
}
}
?>