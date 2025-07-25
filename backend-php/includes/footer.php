<!-- Footer -->
<footer class="bg-gray-900 text-white py-16">
    <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8">
            <!-- Company Info -->
            <div>
                <div class="flex items-center space-x-3 text-2xl font-bold mb-6">
                    <i data-lucide="sparkles" class="h-8 w-8 text-blue-400"></i>
                    <span class="gradient-text">ICONA</span>
                </div>
                <p class="text-gray-400 mb-6">
                    Leading digital marketing agency delivering comprehensive solutions for ecommerce, web development, and brand growth.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                        <i data-lucide="facebook" class="h-5 w-5"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                        <i data-lucide="twitter" class="h-5 w-5"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                        <i data-lucide="linkedin" class="h-5 w-5"></i>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-blue-400 transition-colors">
                        <i data-lucide="instagram" class="h-5 w-5"></i>
                    </a>
                </div>
            </div>

            <!-- Services -->
            <div>
                <h3 class="text-lg font-semibold mb-6">Services</h3>
                <ul class="space-y-3 text-gray-400">
                    <li><a href="/services/ecommerce-marketing.php" class="hover:text-white transition-colors">E-commerce Marketing</a></li>
                    <li><a href="/services/marketplace-management.php" class="hover:text-white transition-colors">Marketplace Management</a></li>
                    <li><a href="/services/seo-services.php" class="hover:text-white transition-colors">SEO Services</a></li>
                    <li><a href="/services/website-development.php" class="hover:text-white transition-colors">Website Development</a></li>
                    <li><a href="/services/digital-marketing.php" class="hover:text-white transition-colors">Digital Marketing</a></li>
                </ul>
            </div>

            <!-- Company -->
            <div>
                <h3 class="text-lg font-semibold mb-6">Company</h3>
                <ul class="space-y-3 text-gray-400">
                    <li><a href="/about.php" class="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="/success-stories.php" class="hover:text-white transition-colors">Success Stories</a></li>
                    <li><a href="/blog.php" class="hover:text-white transition-colors">Blog</a></li>
                    <li><a href="/careers.php" class="hover:text-white transition-colors">Careers</a></li>
                    <li><a href="/contact.php" class="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>

            <!-- Contact Info -->
            <div>
                <h3 class="text-lg font-semibold mb-6">Contact Info</h3>
                <div class="space-y-4 text-gray-400">
                    <div class="flex items-center space-x-3">
                        <i data-lucide="mail" class="h-5 w-5 text-blue-400"></i>
                        <span>hello@icona.com</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <i data-lucide="phone" class="h-5 w-5 text-blue-400"></i>
                        <span>+91 9876543210</span>
                    </div>
                    <div class="flex items-center space-x-3">
                        <i data-lucide="map-pin" class="h-5 w-5 text-blue-400"></i>
                        <span>Mumbai, India</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; <?= date('Y') ?> ICONA. All rights reserved.</p>
        </div>
    </div>
</footer>

<script>
    // Re-initialize Lucide icons for footer
    lucide.createIcons();
</script>

</body>
</html>