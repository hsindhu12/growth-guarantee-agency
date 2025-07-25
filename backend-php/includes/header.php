<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= $pageTitle ?? 'ICONA - Digital Excellence' ?></title>
    <meta name="description" content="<?= $pageDescription ?? 'Leading digital marketing agency with comprehensive solutions for ecommerce, web development, and brand growth.' ?>">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom CSS -->
    <style>
        :root {
            --primary: 217 91% 60%;
            --primary-foreground: 0 0% 98%;
            --background: 0 0% 100%;
            --foreground: 222.2 84% 4.9%;
            --muted: 210 40% 98%;
            --muted-foreground: 215.4 16.3% 46.9%;
            --border: 214.3 31.8% 91.4%;
        }
        
        .gradient-text {
            background: linear-gradient(135deg, #3b82f6, #8b5cf6);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .animate-fade-in {
            animation: fadeIn 1s ease-in-out;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-gradient-x {
            animation: gradient-x 3s ease-in-out infinite;
        }
        
        @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
        }
    </style>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
</head>
<body class="font-sans antialiased bg-white text-gray-900">

<!-- Header -->
<header class="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-gray-200 shadow-lg">
    <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
            <!-- Logo -->
            <a href="/index.php" class="flex items-center space-x-3 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-all duration-300 group">
                <div class="relative">
                    <i data-lucide="sparkles" class="h-8 w-8 transition-transform group-hover:scale-110"></i>
                    <div class="absolute inset-0 bg-blue-600/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span class="gradient-text">ICONA</span>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center space-x-8">
                <a href="/index.php" class="relative px-4 py-2 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 group">
                    <span class="relative z-10">Home</span>
                    <div class="absolute inset-0 bg-blue-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>
                
                <a href="/about.php" class="relative px-4 py-2 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 group">
                    <span class="relative z-10">About</span>
                    <div class="absolute inset-0 bg-blue-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>

                <div class="relative group">
                    <button class="relative px-4 py-2 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 flex items-center gap-1">
                        Services
                        <i data-lucide="chevron-down" class="h-4 w-4"></i>
                    </button>
                    
                    <!-- Services Dropdown -->
                    <div class="absolute top-full left-0 mt-2 w-96 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div class="p-6">
                            <div class="grid grid-cols-1 gap-3">
                                <a href="/services/ecommerce-marketing.php" class="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                                    <span class="text-xl mr-3">🛒</span>
                                    <div>
                                        <div class="font-semibold text-gray-900">E-commerce Marketing</div>
                                        <div class="text-sm text-gray-600">Drive sales with strategic campaigns</div>
                                    </div>
                                </a>
                                <a href="/services/marketplace-management.php" class="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                                    <span class="text-xl mr-3">🏪</span>
                                    <div>
                                        <div class="font-semibold text-gray-900">Marketplace Management</div>
                                        <div class="text-sm text-gray-600">Dominate Amazon, Flipkart platforms</div>
                                    </div>
                                </a>
                                <a href="/services/seo-services.php" class="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                                    <span class="text-xl mr-3">🔍</span>
                                    <div>
                                        <div class="font-semibold text-gray-900">SEO Services</div>
                                        <div class="text-sm text-gray-600">Rank higher and attract traffic</div>
                                    </div>
                                </a>
                                <a href="/services/website-development.php" class="flex items-center p-3 rounded-lg hover:bg-blue-50 transition-colors">
                                    <span class="text-xl mr-3">💻</span>
                                    <div>
                                        <div class="font-semibold text-gray-900">Website Development</div>
                                        <div class="text-sm text-gray-600">High-converting websites</div>
                                    </div>
                                </a>
                            </div>
                            <div class="mt-4 pt-4 border-t border-gray-200">
                                <a href="/services.php" class="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700">
                                    View All Services 
                                    <i data-lucide="arrow-right" class="h-4 w-4"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/success-stories.php" class="relative px-4 py-2 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 group">
                    <span class="relative z-10">Success Stories</span>
                    <div class="absolute inset-0 bg-blue-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>

                <a href="/blog.php" class="relative px-4 py-2 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 group">
                    <span class="relative z-10">Blog</span>
                    <div class="absolute inset-0 bg-blue-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>

                <a href="/contact.php" class="relative px-4 py-2 font-medium text-gray-700 hover:text-blue-600 transition-all duration-300 group">
                    <span class="relative z-10">Contact</span>
                    <div class="absolute inset-0 bg-blue-600/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                </a>

                <a href="/contact.php" class="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2 font-semibold rounded-xl inline-flex items-center gap-2">
                    Get Started
                    <i data-lucide="arrow-right" class="h-4 w-4"></i>
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <button id="mobile-menu-btn" class="lg:hidden p-2">
                <i data-lucide="menu" class="h-6 w-6"></i>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="lg:hidden mt-6 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-2xl hidden">
            <div class="space-y-1">
                <a href="/index.php" class="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                    <span class="font-medium">Home</span>
                </a>
                <a href="/about.php" class="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                    <span class="font-medium">About</span>
                </a>
                <a href="/services.php" class="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                    <span class="font-medium">Services</span>
                </a>
                <a href="/success-stories.php" class="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                    <span class="font-medium">Success Stories</span>
                </a>
                <a href="/blog.php" class="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                    <span class="font-medium">Blog</span>
                </a>
                <a href="/contact.php" class="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-200">
                    <span class="font-medium">Contact</span>
                </a>
            </div>

            <div class="mt-6 pt-6 border-t border-gray-200">
                <a href="/contact.php" class="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 font-semibold rounded-xl flex items-center justify-center gap-2">
                    Get Started
                    <i data-lucide="arrow-right" class="h-4 w-4"></i>
                </a>
            </div>
        </div>
    </nav>
</header>

<script>
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Mobile menu toggle
    document.getElementById('mobile-menu-btn').addEventListener('click', function() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('hidden');
    });
</script>