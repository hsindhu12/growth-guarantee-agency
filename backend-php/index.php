<?php
$pageTitle = "ICONA - Digital Excellence";
$pageDescription = "Leading digital marketing agency with comprehensive solutions for ecommerce, web development, and brand growth.";

include 'includes/header.php';
?>

<!-- Main Content -->
<main class="pt-20">

<!-- Hero Section -->
<section id="home" class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse"></div>
    </div>
    
    <div class="absolute inset-0 bg-black/20"></div>
    <div class="container mx-auto px-4 relative z-10 text-center">
        
        <div class="mb-6 inline-block bg-white/20 text-white border border-white/30 hover:bg-white/30 text-lg px-6 py-2 rounded-full animate-pulse hover:animate-none transition-all duration-300 hover:scale-110">
            ✨ Professional Digital Growth Solutions ✨
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span class="inline-block animate-fade-in">Welcome to</span>
            <span class="inline-block animate-fade-in">ICONA</span>
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-gradient-x">
                Digital Excellence
            </span>
        </h1>
        
        <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 animate-fade-in">
            ICONA delivers comprehensive digital solutions that drive measurable growth for your business. From ecommerce optimization to cutting-edge digital marketing, 
            <span class="font-semibold text-yellow-300 inline-block hover:scale-105 transition-transform duration-200"> 
                we're your strategic partner for success.
            </span>
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in">
            <a href="/contact.php" class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all group relative overflow-hidden inline-flex items-center">
                <span class="relative z-10 flex items-center">
                    Start Your Growth Journey
                    <i data-lucide="arrow-right" class="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"></i>
                </span>
            </a>
            <a href="/success-stories.php" class="border border-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl text-white bg-orange-500 rounded-full inline-flex items-center">
                View Our Portfolio
            </a>
        </div>
        
        <!-- Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div class="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <i data-lucide="users" class="h-8 w-8 mx-auto mb-2 text-yellow-300 group-hover:scale-110 transition-transform duration-300"></i>
                    <div class="text-3xl md:text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                        500+
                    </div>
                    <div class="text-blue-200 group-hover:text-white transition-colors duration-300">
                        Brands Grown
                    </div>
                </div>
            </div>
            <div class="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <i data-lucide="award" class="h-8 w-8 mx-auto mb-2 text-yellow-300 group-hover:scale-110 transition-transform duration-300"></i>
                    <div class="text-3xl md:text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                        99%
                    </div>
                    <div class="text-blue-200 group-hover:text-white transition-colors duration-300">
                        Success Rate
                    </div>
                </div>
            </div>
            <div class="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <i data-lucide="trending-up" class="h-8 w-8 mx-auto mb-2 text-yellow-300 group-hover:scale-110 transition-transform duration-300"></i>
                    <div class="text-3xl md:text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                        $50M+
                    </div>
                    <div class="text-blue-200 group-hover:text-white transition-colors duration-300">
                        Revenue Generated
                    </div>
                </div>
            </div>
            <div class="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                    <i data-lucide="building-2" class="h-8 w-8 mx-auto mb-2 text-yellow-300 group-hover:scale-110 transition-transform duration-300"></i>
                    <div class="text-3xl md:text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                        10+
                    </div>
                    <div class="text-blue-200 group-hover:text-white transition-colors duration-300">
                        Years Experience
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Services Section -->
<section id="services" class="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
    <div class="container mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
            <div class="mb-4 inline-block bg-blue-100 text-blue-800 hover:bg-blue-200 hover:scale-105 transition-all duration-300 px-4 py-2 rounded-full">
                🎯 Our Services
            </div>
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900 gradient-text">
                Complete Digital Solutions
            </h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                From ecommerce marketing to website development, we handle every aspect of your digital success 🚀
            </p>
        </div>

        <!-- Service Categories Overview -->
        <div class="mb-12">
            <div class="grid md:grid-cols-2 gap-8 mb-12">
                <div class="text-center p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl group relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="relative z-10">
                        <i data-lucide="shopping-cart" class="h-16 w-16 mx-auto mb-4 group-hover:animate-bounce"></i>
                        <h3 class="text-3xl font-bold mb-4">Ecommerce Services</h3>
                        <p class="text-blue-100 text-lg mb-4">Complete ecommerce growth solutions</p>
                        <a href="/services.php" class="inline-flex items-center border border-white text-white hover:text-blue-600 hover:bg-white px-4 py-2 rounded-lg transition-all">
                            Explore Ecommerce 
                            <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                        </a>
                    </div>
                </div>
                <div class="text-center p-8 bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl group relative overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div class="relative z-10">
                        <i data-lucide="monitor" class="h-16 w-16 mx-auto mb-4 group-hover:animate-bounce"></i>
                        <h3 class="text-3xl font-bold mb-4">Digital Services</h3>
                        <p class="text-green-100 text-lg mb-4">Web development & digital marketing</p>
                        <a href="/services.php" class="inline-flex items-center border border-white text-white hover:text-green-600 hover:bg-white px-4 py-2 rounded-lg transition-all">
                            Explore Digital 
                            <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Featured Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            <!-- Ecommerce Marketing -->
            <div class="p-6 hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-4 group relative overflow-hidden rounded-2xl">
                <div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div class="relative z-10">
                    <div class="flex items-center mb-6">
                        <div class="p-4 rounded-2xl text-white group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg">
                            <i data-lucide="shopping-cart" class="h-8 w-8"></i>
                        </div>
                        <div class="ml-auto text-xs border border-gray-300 px-2 py-1 rounded hover:scale-105 transition-transform duration-200">
                            🛒 Ecommerce
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        Ecommerce Marketing
                    </h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">Complete digital marketing strategies tailored for ecommerce success</p>
                    <ul class="space-y-3 mb-6">
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>PPC Campaigns</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Social Media Marketing</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Email Marketing</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>SEO Optimization</span>
                        </li>
                    </ul>
                    <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <a href="/services/ecommerce-marketing.php" class="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg transition-all duration-300 text-white px-4 py-2 rounded-lg inline-flex items-center justify-center">
                            Learn More 
                            <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Website Development -->
            <div class="p-6 hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-4 group relative overflow-hidden rounded-2xl">
                <div class="absolute inset-0 bg-gradient-to-br from-slate-500 to-gray-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div class="relative z-10">
                    <div class="flex items-center mb-6">
                        <div class="p-4 rounded-2xl text-white group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-slate-500 to-gray-600 shadow-lg">
                            <i data-lucide="monitor" class="h-8 w-8"></i>
                        </div>
                        <div class="ml-auto text-xs border border-gray-300 px-2 py-1 rounded hover:scale-105 transition-transform duration-200">
                            💻 Digital
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        Website Development
                    </h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">Custom websites that convert visitors into customers</p>
                    <ul class="space-y-3 mb-6">
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Responsive Design</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>E-commerce Sites</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Landing Pages</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Web Applications</span>
                        </li>
                    </ul>
                    <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <a href="/services/website-development.php" class="w-full bg-gradient-to-r from-slate-500 to-gray-600 hover:shadow-lg transition-all duration-300 text-white px-4 py-2 rounded-lg inline-flex items-center justify-center">
                            Learn More 
                            <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- SEO Services -->
            <div class="p-6 hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-4 group relative overflow-hidden rounded-2xl">
                <div class="absolute inset-0 bg-gradient-to-br from-lime-500 to-green-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div class="relative z-10">
                    <div class="flex items-center mb-6">
                        <div class="p-4 rounded-2xl text-white group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-lime-500 to-green-600 shadow-lg">
                            <i data-lucide="search" class="h-8 w-8"></i>
                        </div>
                        <div class="ml-auto text-xs border border-gray-300 px-2 py-1 rounded hover:scale-105 transition-transform duration-200">
                            💻 Digital
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        SEO Services
                    </h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">Dominate search results and drive organic traffic</p>
                    <ul class="space-y-3 mb-6">
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Keyword Research</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>On-Page SEO</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Link Building</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Technical SEO</span>
                        </li>
                    </ul>
                    <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <a href="/services/seo-services.php" class="w-full bg-gradient-to-r from-lime-500 to-green-600 hover:shadow-lg transition-all duration-300 text-white px-4 py-2 rounded-lg inline-flex items-center justify-center">
                            Learn More 
                            <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                        </a>
                    </div>
                </div>
            </div>

            <!-- Digital Marketing -->
            <div class="p-6 hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-4 group relative overflow-hidden rounded-2xl">
                <div class="absolute inset-0 bg-gradient-to-br from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                <div class="relative z-10">
                    <div class="flex items-center mb-6">
                        <div class="p-4 rounded-2xl text-white group-hover:scale-110 transition-all duration-300 bg-gradient-to-br from-yellow-500 to-orange-600 shadow-lg">
                            <i data-lucide="megaphone" class="h-8 w-8"></i>
                        </div>
                        <div class="ml-auto text-xs border border-gray-300 px-2 py-1 rounded hover:scale-105 transition-transform duration-200">
                            💻 Digital
                        </div>
                    </div>
                    <h3 class="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                        Digital Marketing
                    </h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">Comprehensive digital marketing campaigns across all channels</p>
                    <ul class="space-y-3 mb-6">
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Google Ads</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Facebook Ads</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Content Marketing</span>
                        </li>
                        <li class="flex items-center text-sm text-gray-700">
                            <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3 flex-shrink-0"></i>
                            <span>Social Media Management</span>
                        </li>
                    </ul>
                    <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <a href="/services/digital-marketing.php" class="w-full bg-gradient-to-r from-yellow-500 to-orange-600 hover:shadow-lg transition-all duration-300 text-white px-4 py-2 rounded-lg inline-flex items-center justify-center">
                            Learn More 
                            <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class="text-center mt-12">
            <a href="/services.php" class="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105">
                View All Services
                <i data-lucide="arrow-right" class="ml-2 h-5 w-5"></i>
            </a>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to Grow Your Business?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Let's discuss how we can help you achieve your digital marketing goals and drive real results for your business.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact.php" class="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center">
                Get Free Consultation
                <i data-lucide="arrow-right" class="ml-2 h-5 w-5"></i>
            </a>
            <a href="/success-stories.php" class="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 inline-flex items-center justify-center">
                View Success Stories
            </a>
        </div>
    </div>
</section>

</main>

<script>
    // Initialize Lucide icons after page load
    document.addEventListener('DOMContentLoaded', function() {
        lucide.createIcons();
    });
</script>

<?php include 'includes/footer.php'; ?>