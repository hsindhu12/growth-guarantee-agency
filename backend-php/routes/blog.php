<?php
require_once __DIR__ . '/../config/database.php';
require_once __DIR__ . '/../config/auth.php';

$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Extract blog ID or slug from path
preg_match('#/blog(?:/([^/]+))?#', $path, $matches);
$identifier = $matches[1] ?? null;

switch ($method) {
    case 'GET':
        if ($identifier) {
            // Get single blog post by slug or ID
            try {
                if (is_numeric($identifier)) {
                    $post = $db->fetchOne(
                        'SELECT * FROM blog_posts WHERE id = ? AND status = "published"',
                        [$identifier]
                    );
                } else {
                    $post = $db->fetchOne(
                        'SELECT * FROM blog_posts WHERE slug = ? AND status = "published"',
                        [$identifier]
                    );
                }
                
                if (!$post) {
                    http_response_code(404);
                    echo json_encode(['error' => 'Blog post not found']);
                    break;
                }
                
                echo json_encode($post);
                
            } catch (Exception $e) {
                http_response_code(500);
                echo json_encode(['error' => 'Server error']);
            }
        } else {
            // Get all published blog posts
            try {
                $page = (int)($_GET['page'] ?? 1);
                $limit = (int)($_GET['limit'] ?? 10);
                $offset = ($page - 1) * $limit;
                
                $posts = $db->fetchAll(
                    'SELECT * FROM blog_posts WHERE status = "published" ORDER BY created_at DESC LIMIT ? OFFSET ?',
                    [$limit, $offset]
                );
                
                $total = $db->fetchOne('SELECT COUNT(*) as count FROM blog_posts WHERE status = "published"')['count'];
                
                echo json_encode([
                    'posts' => $posts,
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
        
        if (empty($input['title']) || empty($input['content'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Title and content required']);
            break;
        }
        
        try {
            $slug = strtolower(preg_replace('/[^A-Za-z0-9-]+/', '-', $input['title']));
            
            $db->execute(
                'INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, author_id, status, meta_title, meta_description, tags) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    $input['title'],
                    $slug,
                    $input['content'],
                    $input['excerpt'] ?? '',
                    $input['featured_image'] ?? null,
                    $user['id'],
                    $input['status'] ?? 'draft',
                    $input['meta_title'] ?? $input['title'],
                    $input['meta_description'] ?? '',
                    $input['tags'] ?? null
                ]
            );
            
            $postId = $db->lastInsertId();
            $post = $db->fetchOne('SELECT * FROM blog_posts WHERE id = ?', [$postId]);
            
            echo json_encode($post);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    case 'PUT':
        $user = Auth::requireAdmin();
        if (!$identifier || !is_numeric($identifier)) {
            http_response_code(400);
            echo json_encode(['error' => 'Valid post ID required']);
            break;
        }
        
        $input = json_decode(file_get_contents('php://input'), true);
        
        try {
            $updateFields = [];
            $params = [];
            
            foreach (['title', 'content', 'excerpt', 'featured_image', 'status', 'meta_title', 'meta_description', 'tags'] as $field) {
                if (isset($input[$field])) {
                    $updateFields[] = "$field = ?";
                    $params[] = $input[$field];
                }
            }
            
            if (!empty($updateFields)) {
                $params[] = $identifier;
                $db->execute(
                    'UPDATE blog_posts SET ' . implode(', ', $updateFields) . ', updated_at = NOW() WHERE id = ?',
                    $params
                );
            }
            
            $post = $db->fetchOne('SELECT * FROM blog_posts WHERE id = ?', [$identifier]);
            echo json_encode($post);
            
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => 'Server error']);
        }
        break;
        
    case 'DELETE':
        $user = Auth::requireAdmin();
        if (!$identifier || !is_numeric($identifier)) {
            http_response_code(400);
            echo json_encode(['error' => 'Valid post ID required']);
            break;
        }
        
        try {
            $db->execute('DELETE FROM blog_posts WHERE id = ?', [$identifier]);
            echo json_encode(['message' => 'Blog post deleted successfully']);
            
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