<?php
$pageTitle = "Our Services - ICONA Digital Solutions";
$pageDescription = "Comprehensive digital marketing and web development services including ecommerce marketing, SEO, website development, and more.";

include 'includes/header.php';
?>

<main class="pt-20">

<!-- Hero Section -->
<section class="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
    <div class="container mx-auto px-4 text-center">
        <div class="mb-6 inline-block bg-white/20 text-white border border-white/30 px-6 py-2 rounded-full">
            🎯 Our Professional Services
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Complete Digital Solutions
        </h1>
        <p class="text-xl max-w-3xl mx-auto text-blue-100">
            From ecommerce marketing to website development, we provide end-to-end digital services that drive real results for your business.
        </p>
    </div>
</section>

<!-- Service Categories -->
<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-2 gap-12 mb-16">
            <!-- Ecommerce Services -->
            <div class="text-center p-12 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl group">
                <i data-lucide="shopping-cart" class="h-20 w-20 mx-auto mb-6 group-hover:animate-bounce"></i>
                <h2 class="text-4xl font-bold mb-6">Ecommerce Services</h2>
                <p class="text-blue-100 text-lg mb-8">Complete solutions for online retail success</p>
                <div class="grid grid-cols-2 gap-4 text-left">
                    <div class="flex items-center space-x-2">
                        <i data-lucide="check" class="h-4 w-4"></i>
                        <span class="text-sm">Ecommerce Marketing</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <i data-lucide="check" class="h-4 w-4"></i>
                        <span class="text-sm">Marketplace Management</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <i data-lucide="check" class="h-4 w-4"></i>
                        <span class="text-sm">Product Photography</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <i data-lucide="check" class="h-4 w-4"></i>
                        <span class="text-sm">Brand Development</span>
                    </div>
                </div>
            </div>

            <!-- Digital Services -->
            <div class="text-center p-12 bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl group">
                <i data-lucide="monitor" class="h-20 w-20 mx-auto mb-6 group-hover:animate-bounce"></i>
                <h2 class="text-4xl font-bold mb-6">Digital Services</h2>
                <p class="text-green-100 text-lg mb-8">Web development & digital marketing excellence</p>
                <div class="grid grid-cols-2 gap-4 text-left">
                    <div class="flex items-center space-x-2">
                        <i data-lucide="check" class="h-4 w-4"></i>
                        <span class="text-sm">Website Development</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <i data-lucide="check" class="h-4 w-4"></i>
                        <span class="text-sm">SEO Services</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <i data-lucide="check" class="h-4 w-4"></i>
                        <span class="text-sm">Digital Marketing</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <i data-lucide="check" class="h-4 w-4"></i>
                        <span class="text-sm">Analytics & Reporting</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- All Services Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <!-- Ecommerce Marketing -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div class="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl text-white inline-block mb-6 group-hover:scale-110 transition-transform">
                    <i data-lucide="shopping-cart" class="h-8 w-8"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">Ecommerce Marketing</h3>
                <p class="text-gray-600 mb-6">Complete digital marketing strategies tailored for ecommerce success</p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        PPC Campaigns & Management
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Social Media Marketing
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Email Marketing Automation
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Conversion Rate Optimization
                    </li>
                </ul>
                <a href="/contact.php" class="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center">
                    Get Started
                    <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                </a>
            </div>

            <!-- Website Development -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div class="bg-gradient-to-br from-slate-500 to-gray-600 p-4 rounded-2xl text-white inline-block mb-6 group-hover:scale-110 transition-transform">
                    <i data-lucide="monitor" class="h-8 w-8"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">Website Development</h3>
                <p class="text-gray-600 mb-6">Custom websites that convert visitors into customers</p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Responsive Web Design
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        E-commerce Websites
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Landing Page Optimization
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Web Application Development
                    </li>
                </ul>
                <a href="/contact.php" class="bg-gradient-to-r from-slate-500 to-gray-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center">
                    Get Started
                    <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                </a>
            </div>

            <!-- SEO Services -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div class="bg-gradient-to-br from-lime-500 to-green-600 p-4 rounded-2xl text-white inline-block mb-6 group-hover:scale-110 transition-transform">
                    <i data-lucide="search" class="h-8 w-8"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">SEO Services</h3>
                <p class="text-gray-600 mb-6">Dominate search results and drive organic traffic</p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Keyword Research & Strategy
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        On-Page SEO Optimization
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Link Building Campaigns
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Technical SEO Audit
                    </li>
                </ul>
                <a href="/contact.php" class="bg-gradient-to-r from-lime-500 to-green-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center">
                    Get Started
                    <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                </a>
            </div>

            <!-- Digital Marketing -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div class="bg-gradient-to-br from-yellow-500 to-orange-600 p-4 rounded-2xl text-white inline-block mb-6 group-hover:scale-110 transition-transform">
                    <i data-lucide="megaphone" class="h-8 w-8"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">Digital Marketing</h3>
                <p class="text-gray-600 mb-6">Comprehensive digital marketing campaigns across all channels</p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Google Ads Management
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Facebook & Instagram Ads
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Content Marketing Strategy
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Social Media Management
                    </li>
                </ul>
                <a href="/contact.php" class="bg-gradient-to-r from-yellow-500 to-orange-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center">
                    Get Started
                    <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                </a>
            </div>

            <!-- Marketplace Management -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div class="bg-gradient-to-br from-indigo-500 to-blue-600 p-4 rounded-2xl text-white inline-block mb-6 group-hover:scale-110 transition-transform">
                    <i data-lucide="globe" class="h-8 w-8"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">Marketplace Management</h3>
                <p class="text-gray-600 mb-6">Expert management across all major ecommerce platforms</p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Amazon India Optimization
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Flipkart Store Management
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Myntra Brand Store
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        International Marketplaces
                    </li>
                </ul>
                <a href="/contact.php" class="bg-gradient-to-r from-indigo-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center">
                    Get Started
                    <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                </a>
            </div>

            <!-- Product Photography -->
            <div class="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                <div class="bg-gradient-to-br from-pink-500 to-rose-600 p-4 rounded-2xl text-white inline-block mb-6 group-hover:scale-110 transition-transform">
                    <i data-lucide="camera" class="h-8 w-8"></i>
                </div>
                <h3 class="text-2xl font-bold mb-4 text-gray-900">Product Photography</h3>
                <p class="text-gray-600 mb-6">Professional product photography that drives conversions</p>
                <ul class="space-y-3 mb-8">
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Studio Photography
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Lifestyle Product Shots
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        360° Product Views
                    </li>
                    <li class="flex items-center text-sm text-gray-700">
                        <i data-lucide="check-circle" class="h-4 w-4 text-green-500 mr-3"></i>
                        Image Editing & Retouching
                    </li>
                </ul>
                <a href="/contact.php" class="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 inline-flex items-center">
                    Get Started
                    <i data-lucide="arrow-right" class="ml-2 h-4 w-4"></i>
                </a>
            </div>

        </div>
    </div>
</section>

<!-- Process Section -->
<section class="py-20 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Process</h2>
            <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to deliver exceptional results for every client
            </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
            <div class="text-center">
                <div class="bg-blue-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <span class="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 class="text-xl font-semibold mb-4">Discovery</h3>
                <p class="text-gray-600">Understanding your business, goals, and target audience</p>
            </div>
            <div class="text-center">
                <div class="bg-green-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <span class="text-2xl font-bold text-green-600">2</span>
                </div>
                <h3 class="text-xl font-semibold mb-4">Strategy</h3>
                <p class="text-gray-600">Creating a customized plan tailored to your objectives</p>
            </div>
            <div class="text-center">
                <div class="bg-purple-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <span class="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 class="text-xl font-semibold mb-4">Execution</h3>
                <p class="text-gray-600">Implementing the strategy with precision and expertise</p>
            </div>
            <div class="text-center">
                <div class="bg-orange-100 p-6 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                    <span class="text-2xl font-bold text-orange-600">4</span>
                </div>
                <h3 class="text-xl font-semibold mb-4">Optimization</h3>
                <p class="text-gray-600">Continuous monitoring and improvement for best results</p>
            </div>
        </div>
    </div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
    <div class="container mx-auto px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
        </h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
            Let's discuss how our services can help you achieve your digital marketing goals and drive real results.
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
    document.addEventListener('DOMContentLoaded', function() {
        lucide.createIcons();
    });
</script>

<?php include 'includes/footer.php'; ?>