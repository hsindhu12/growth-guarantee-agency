<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

require_once 'config/database.php';
require_once 'config/auth.php';

// Get the request path
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

// Remove /api prefix if present
$path = preg_replace('#^/api#', '', $path);

// Route the request
switch (true) {
    // Health check
    case $path === '/health':
        echo json_encode(['status' => 'OK', 'timestamp' => date('c')]);
        break;
        
    // Auth routes
    case preg_match('#^/auth/(.+)#', $path, $matches):
        require_once 'routes/auth.php';
        break;
        
    // Blog routes
    case preg_match('#^/blog#', $path):
        require_once 'routes/blog.php';
        break;
        
    // Contact routes
    case preg_match('#^/contact#', $path):
        require_once 'routes/contact.php';
        break;
        
    // Newsletter routes
    case preg_match('#^/newsletter#', $path):
        require_once 'routes/newsletter.php';
        break;
        
    // Success stories routes
    case preg_match('#^/success-stories#', $path):
        require_once 'routes/success-stories.php';
        break;
        
    // Services routes
    case preg_match('#^/services#', $path):
        require_once 'routes/services.php';
        break;
        
    // Admin routes
    case preg_match('#^/admin#', $path):
        require_once 'routes/admin.php';
        break;
        
    default:
        http_response_code(404);
        echo json_encode(['error' => 'Route not found']);
        break;
}
?>