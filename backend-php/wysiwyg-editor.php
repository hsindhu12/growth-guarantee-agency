<?php
$pageTitle = "WYSIWYG Content Editor - ICONA CMS";
require_once 'config/database.php';
require_once 'config/auth.php';

// Check authentication
$user = Auth::requireAuth();

// Handle page save
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    if ($_POST['action'] === 'save_page') {
        $pageId = $_POST['page_id'] ?? '';
        $title = $_POST['title'] ?? '';
        $slug = $_POST['slug'] ?? '';
        $content = $_POST['content'] ?? '';
        $metaTitle = $_POST['meta_title'] ?? '';
        $metaDescription = $_POST['meta_description'] ?? '';
        $published = isset($_POST['published']) ? 1 : 0;
        
        if ($pageId) {
            // Update existing page
            $db->execute(
                'UPDATE pages SET title = ?, slug = ?, content = ?, meta_title = ?, meta_description = ?, published = ?, updated_at = NOW() WHERE id = ?',
                [$title, $slug, $content, $metaTitle, $metaDescription, $published, $pageId]
            );
        } else {
            // Create new page
            $db->execute(
                'INSERT INTO pages (title, slug, content, meta_title, meta_description, published, author_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())',
                [$title, $slug, $content, $metaTitle, $metaDescription, $published, $user['id']]
            );
        }
        
        header('Location: wysiwyg-editor.php?success=1');
        exit;
    }
}

// Get page data if editing
$pageData = null;
if (isset($_GET['id'])) {
    $pageData = $db->fetchOne('SELECT * FROM pages WHERE id = ?', [$_GET['id']]);
}

// Get all pages
$pages = $db->fetchAll('SELECT id, title, slug, published, created_at FROM pages ORDER BY created_at DESC');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $pageTitle ?></title>
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- TinyMCE -->
    <script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/6/tinymce.min.js" referrerpolicy="origin"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    
    <style>
        .gradient-text {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    </style>
</head>
<body class="bg-gray-50">

<!-- Header -->
<header class="bg-white shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
            <div class="flex items-center space-x-4">
                <a href="index.php" class="flex items-center space-x-2">
                    <i data-lucide="sparkles" class="h-8 w-8 text-blue-600"></i>
                    <span class="text-2xl font-bold gradient-text">ICONA</span>
                </a>
                <span class="text-gray-300">|</span>
                <h1 class="text-xl font-semibold text-gray-900">WYSIWYG Content Editor</h1>
            </div>
            <div class="flex items-center space-x-4">
                <a href="admin.php" class="text-gray-600 hover:text-blue-600 transition-colors flex items-center space-x-2">
                    <i data-lucide="arrow-left" class="h-4 w-4"></i>
                    <span>Back to Admin</span>
                </a>
                <span class="text-sm text-gray-500">Welcome, <?= htmlspecialchars($user['name'] ?? $user['email']) ?></span>
            </div>
        </div>
    </div>
</header>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    
    <?php if (isset($_GET['success'])): ?>
    <div class="mb-6 bg-green-50 border border-green-200 rounded-lg p-4">
        <div class="flex items-center">
            <i data-lucide="check-circle" class="h-5 w-5 text-green-600 mr-2"></i>
            <span class="text-green-800">Page saved successfully!</span>
        </div>
    </div>
    <?php endif; ?>

    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        <!-- Sidebar - Pages List -->
        <div class="lg:col-span-1">
            <div class="bg-white rounded-lg shadow-sm border">
                <div class="p-4 border-b">
                    <div class="flex items-center justify-between">
                        <h2 class="text-lg font-semibold text-gray-900">Pages</h2>
                        <button onclick="createNewPage()" class="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors flex items-center space-x-1">
                            <i data-lucide="plus" class="h-4 w-4"></i>
                            <span>New</span>
                        </button>
                    </div>
                </div>
                <div class="p-4 space-y-2 max-h-96 overflow-y-auto">
                    <?php foreach ($pages as $page): ?>
                    <div class="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer <?= $pageData && $pageData['id'] == $page['id'] ? 'bg-blue-50 border border-blue-200' : '' ?>" onclick="editPage(<?= $page['id'] ?>)">
                        <div class="flex-1 min-w-0">
                            <div class="text-sm font-medium text-gray-900 truncate"><?= htmlspecialchars($page['title']) ?></div>
                            <div class="text-xs text-gray-500 truncate">/<?= htmlspecialchars($page['slug']) ?></div>
                        </div>
                        <div class="flex items-center space-x-1">
                            <?php if ($page['published']): ?>
                            <div class="w-2 h-2 bg-green-500 rounded-full" title="Published"></div>
                            <?php else: ?>
                            <div class="w-2 h-2 bg-gray-400 rounded-full" title="Draft"></div>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </div>

        <!-- Main Editor -->
        <div class="lg:col-span-3">
            <form id="pageForm" method="POST" class="space-y-6">
                <input type="hidden" name="action" value="save_page">
                <input type="hidden" name="page_id" value="<?= $pageData['id'] ?? '' ?>">
                
                <!-- Page Settings -->
                <div class="bg-white rounded-lg shadow-sm border">
                    <div class="p-4 border-b">
                        <h2 class="text-lg font-semibold text-gray-900">Page Settings</h2>
                    </div>
                    <div class="p-6 space-y-4">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Page Title</label>
                                <input type="text" id="title" name="title" value="<?= htmlspecialchars($pageData['title'] ?? '') ?>" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                            <div>
                                <label for="slug" class="block text-sm font-medium text-gray-700 mb-1">URL Slug</label>
                                <input type="text" id="slug" name="slug" value="<?= htmlspecialchars($pageData['slug'] ?? '') ?>" required class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label for="meta_title" class="block text-sm font-medium text-gray-700 mb-1">Meta Title</label>
                                <input type="text" id="meta_title" name="meta_title" value="<?= htmlspecialchars($pageData['meta_title'] ?? '') ?>" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                            </div>
                            <div>
                                <label for="published" class="flex items-center space-x-2">
                                    <input type="checkbox" id="published" name="published" <?= ($pageData['published'] ?? false) ? 'checked' : '' ?> class="rounded border-gray-300 text-blue-600 focus:ring-blue-500">
                                    <span class="text-sm font-medium text-gray-700">Published</span>
                                </label>
                            </div>
                        </div>
                        
                        <div>
                            <label for="meta_description" class="block text-sm font-medium text-gray-700 mb-1">Meta Description</label>
                            <textarea id="meta_description" name="meta_description" rows="2" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"><?= htmlspecialchars($pageData['meta_description'] ?? '') ?></textarea>
                        </div>
                    </div>
                </div>

                <!-- Content Editor -->
                <div class="bg-white rounded-lg shadow-sm border">
                    <div class="p-4 border-b">
                        <h2 class="text-lg font-semibold text-gray-900">Page Content</h2>
                    </div>
                    <div class="p-6">
                        <textarea id="content" name="content" rows="20"><?= htmlspecialchars($pageData['content'] ?? '') ?></textarea>
                    </div>
                </div>

                <!-- Actions -->
                <div class="flex justify-between items-center">
                    <div class="flex space-x-4">
                        <button type="submit" class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                            <i data-lucide="save" class="h-4 w-4"></i>
                            <span>Save Page</span>
                        </button>
                        <?php if ($pageData): ?>
                        <a href="/<?= htmlspecialchars($pageData['slug']) ?>" target="_blank" class="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2">
                            <i data-lucide="external-link" class="h-4 w-4"></i>
                            <span>Preview</span>
                        </a>
                        <?php endif; ?>
                    </div>
                    
                    <?php if ($pageData): ?>
                    <button type="button" onclick="deletePage(<?= $pageData['id'] ?>)" class="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2">
                        <i data-lucide="trash-2" class="h-4 w-4"></i>
                        <span>Delete</span>
                    </button>
                    <?php endif; ?>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Initialize TinyMCE
    tinymce.init({
        selector: '#content',
        height: 500,
        menubar: true,
        plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'help', 'wordcount'
        ],
        toolbar: 'undo redo | blocks | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
        content_style: 'body { font-family: -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif; font-size: 14px }',
        branding: false,
        elementpath: false,
        statusbar: true
    });
    
    // Auto-generate slug from title
    document.getElementById('title').addEventListener('input', function() {
        const title = this.value;
        const slug = title.toLowerCase()
            .replace(/[^a-z0-9 -]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim('-');
        document.getElementById('slug').value = slug;
    });
    
    function createNewPage() {
        window.location.href = 'wysiwyg-editor.php';
    }
    
    function editPage(pageId) {
        window.location.href = `wysiwyg-editor.php?id=${pageId}`;
    }
    
    function deletePage(pageId) {
        if (confirm('Are you sure you want to delete this page? This action cannot be undone.')) {
            const form = document.createElement('form');
            form.method = 'POST';
            form.innerHTML = `
                <input type="hidden" name="action" value="delete_page">
                <input type="hidden" name="page_id" value="${pageId}">
            `;
            document.body.appendChild(form);
            form.submit();
        }
    }
    
    // Save shortcut
    document.addEventListener('keydown', function(e) {
        if ((e.ctrlKey || e.metaKey) && e.key === 's') {
            e.preventDefault();
            document.getElementById('pageForm').submit();
        }
    });
</script>

</body>
</html>