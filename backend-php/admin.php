<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ICONA Admin Dashboard</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <style>
        .admin-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .admin-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }
        .stat-icon {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }
    </style>
</head>
<body class="bg-gray-50">
    <!-- Navigation -->
    <nav class="bg-white shadow-lg">
        <div class="max-w-7xl mx-auto px-4">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0">
                        <h1 class="text-2xl font-bold text-gray-900">ICONA</h1>
                    </div>
                    <div class="ml-6">
                        <span class="text-sm text-gray-500">Admin Dashboard</span>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <button class="text-gray-600 hover:text-gray-900">
                        <i class="fas fa-bell"></i>
                    </button>
                    <button class="text-gray-600 hover:text-gray-900">
                        <i class="fas fa-user-circle text-xl"></i>
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto py-6 px-4">
        <!-- Dashboard Stats -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div class="bg-white rounded-lg shadow-md p-6 admin-card">
                <div class="flex items-center">
                    <div class="stat-icon p-3 rounded-full text-white mr-4">
                        <i class="fas fa-blog text-xl"></i>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm">Blog Posts</p>
                        <p class="text-3xl font-bold text-gray-900" id="blog-count">-</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6 admin-card">
                <div class="flex items-center">
                    <div class="stat-icon p-3 rounded-full text-white mr-4">
                        <i class="fas fa-trophy text-xl"></i>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm">Success Stories</p>
                        <p class="text-3xl font-bold text-gray-900" id="stories-count">-</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6 admin-card">
                <div class="flex items-center">
                    <div class="stat-icon p-3 rounded-full text-white mr-4">
                        <i class="fas fa-envelope text-xl"></i>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm">Contact Forms</p>
                        <p class="text-3xl font-bold text-gray-900" id="contacts-count">-</p>
                    </div>
                </div>
            </div>

            <div class="bg-white rounded-lg shadow-md p-6 admin-card">
                <div class="flex items-center">
                    <div class="stat-icon p-3 rounded-full text-white mr-4">
                        <i class="fas fa-users text-xl"></i>
                    </div>
                    <div>
                        <p class="text-gray-500 text-sm">Newsletter Subscribers</p>
                        <p class="text-3xl font-bold text-gray-900" id="newsletter-count">-</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Management Sections -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Content Management -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <i class="fas fa-edit mr-3 text-blue-600"></i>
                    Content Management
                </h2>
                <div class="space-y-4">
                    <a href="visual-editor.php" class="block bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all admin-card">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="font-semibold">Visual Page Editor</h3>
                                <p class="text-sm opacity-90">Create and edit pages with drag & drop</p>
                            </div>
                            <i class="fas fa-palette text-2xl"></i>
                        </div>
                    </a>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <button class="bg-gray-50 hover:bg-gray-100 border border-gray-200 p-4 rounded-lg text-left admin-card" onclick="manageBlogPosts()">
                            <i class="fas fa-blog text-green-600 mb-2"></i>
                            <p class="font-medium">Blog Posts</p>
                            <p class="text-sm text-gray-600">Manage articles</p>
                        </button>
                        
                        <button class="bg-gray-50 hover:bg-gray-100 border border-gray-200 p-4 rounded-lg text-left admin-card" onclick="manageSuccessStories()">
                            <i class="fas fa-star text-yellow-600 mb-2"></i>
                            <p class="font-medium">Success Stories</p>
                            <p class="text-sm text-gray-600">Client showcases</p>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Analytics & Reports -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <i class="fas fa-chart-bar mr-3 text-green-600"></i>
                    Analytics & Reports
                </h2>
                <div class="space-y-4">
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-sm font-medium text-gray-700">Website Traffic</span>
                            <span class="text-sm text-green-600">+15%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-green-600 h-2 rounded-full" style="width: 75%"></div>
                        </div>
                    </div>
                    
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <div class="flex justify-between items-center mb-2">
                            <span class="text-sm font-medium text-gray-700">Conversion Rate</span>
                            <span class="text-sm text-blue-600">3.2%</span>
                        </div>
                        <div class="w-full bg-gray-200 rounded-full h-2">
                            <div class="bg-blue-600 h-2 rounded-full" style="width: 32%"></div>
                        </div>
                    </div>
                    
                    <button class="w-full bg-gray-100 hover:bg-gray-200 border border-gray-300 p-3 rounded-lg text-center admin-card">
                        <i class="fas fa-chart-line mr-2"></i>
                        View Detailed Analytics
                    </button>
                </div>
            </div>

            <!-- Customer Communications -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <i class="fas fa-comments mr-3 text-purple-600"></i>
                    Customer Communications
                </h2>
                <div class="space-y-4">
                    <button class="w-full bg-red-50 hover:bg-red-100 border border-red-200 p-4 rounded-lg text-left admin-card" onclick="viewContacts()">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="font-medium text-red-800">New Contact Forms</h3>
                                <p class="text-sm text-red-600" id="new-contacts-count">Loading...</p>
                            </div>
                            <i class="fas fa-envelope text-red-600"></i>
                        </div>
                    </button>
                    
                    <button class="w-full bg-blue-50 hover:bg-blue-100 border border-blue-200 p-4 rounded-lg text-left admin-card" onclick="manageNewsletter()">
                        <div class="flex items-center justify-between">
                            <div>
                                <h3 class="font-medium text-blue-800">Newsletter Subscribers</h3>
                                <p class="text-sm text-blue-600" id="active-subscribers">Loading...</p>
                            </div>
                            <i class="fas fa-users text-blue-600"></i>
                        </div>
                    </button>
                </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-white rounded-lg shadow-md p-6">
                <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                    <i class="fas fa-bolt mr-3 text-yellow-600"></i>
                    Quick Actions
                </h2>
                <div class="space-y-3">
                    <button class="w-full bg-gradient-to-r from-green-500 to-green-600 text-white p-3 rounded-lg hover:from-green-600 hover:to-green-700 admin-card">
                        <i class="fas fa-plus mr-2"></i>
                        Create New Blog Post
                    </button>
                    
                    <button class="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-lg hover:from-purple-600 hover:to-purple-700 admin-card">
                        <i class="fas fa-cog mr-2"></i>
                        Site Settings
                    </button>
                    
                    <button class="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white p-3 rounded-lg hover:from-orange-600 hover:to-orange-700 admin-card">
                        <i class="fas fa-upload mr-2"></i>
                        Media Library
                    </button>
                </div>
            </div>
        </div>

        <!-- Recent Activity -->
        <div class="mt-8 bg-white rounded-lg shadow-md p-6">
            <h2 class="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <i class="fas fa-clock mr-3 text-indigo-600"></i>
                Recent Activity
            </h2>
            <div class="space-y-4" id="recent-activity">
                <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div class="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                    <div class="flex-1">
                        <p class="text-sm font-medium text-gray-900">New contact form submission</p>
                        <p class="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                </div>
                <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div class="w-2 h-2 bg-blue-500 rounded-full mr-4"></div>
                    <div class="flex-1">
                        <p class="text-sm font-medium text-gray-900">Blog post published</p>
                        <p class="text-xs text-gray-500">1 hour ago</p>
                    </div>
                </div>
                <div class="flex items-center p-4 bg-gray-50 rounded-lg">
                    <div class="w-2 h-2 bg-purple-500 rounded-full mr-4"></div>
                    <div class="flex-1">
                        <p class="text-sm font-medium text-gray-900">New newsletter subscriber</p>
                        <p class="text-xs text-gray-500">3 hours ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Load dashboard data
        async function loadDashboardData() {
            try {
                const response = await fetch('/api/admin/dashboard');
                const data = await response.json();
                
                if (data.stats) {
                    document.getElementById('blog-count').textContent = data.stats.blog_posts?.total || 0;
                    document.getElementById('stories-count').textContent = data.stats.success_stories?.total || 0;
                    document.getElementById('contacts-count').textContent = data.stats.contacts?.total || 0;
                    document.getElementById('newsletter-count').textContent = data.stats.newsletter?.active || 0;
                    
                    document.getElementById('new-contacts-count').textContent = 
                        `${data.stats.contacts?.new || 0} new messages`;
                    document.getElementById('active-subscribers').textContent = 
                        `${data.stats.newsletter?.active || 0} active subscribers`;
                }
            } catch (error) {
                console.error('Failed to load dashboard data:', error);
            }
        }

        // Management functions
        function manageBlogPosts() {
            alert('Blog post management coming soon!');
        }

        function manageSuccessStories() {
            alert('Success stories management coming soon!');
        }

        function viewContacts() {
            alert('Contact management coming soon!');
        }

        function manageNewsletter() {
            alert('Newsletter management coming soon!');
        }

        // Load data when page loads
        document.addEventListener('DOMContentLoaded', loadDashboardData);
    </script>
</body>
</html>