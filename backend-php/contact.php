<?php
$pageTitle = "Contact Us - ICONA Digital Solutions";
$pageDescription = "Get in touch with ICONA for digital marketing services. Free consultation available. Contact us today to grow your business online.";

// Handle form submission
$formSubmitted = false;
$formError = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['submit_contact'])) {
    require_once 'config/database.php';
    
    $name = trim($_POST['name'] ?? '');
    $email = trim($_POST['email'] ?? '');
    $phone = trim($_POST['phone'] ?? '');
    $company = trim($_POST['company'] ?? '');
    $service = trim($_POST['service'] ?? '');
    $message = trim($_POST['message'] ?? '');
    
    // Validation
    if (empty($name) || empty($email) || empty($message)) {
        $formError = 'Please fill in all required fields.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $formError = 'Please enter a valid email address.';
    } else {
        try {
            // Insert into database
            $db->execute(
                'INSERT INTO contacts (name, email, phone, company, message, service_interest, created_at) VALUES (?, ?, ?, ?, ?, ?, NOW())',
                [$name, $email, $phone, $company, $message, $service]
            );
            $formSubmitted = true;
        } catch (Exception $e) {
            $formError = 'Sorry, there was an error submitting your message. Please try again.';
        }
    }
}

include 'includes/header.php';
?>

<main class="pt-20">

<!-- Hero Section -->
<section class="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
    <div class="container mx-auto px-4 text-center">
        <div class="mb-6 inline-block bg-white/20 text-white border border-white/30 px-6 py-2 rounded-full">
            📞 Get In Touch
        </div>
        <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Contact Us
        </h1>
        <p class="text-xl max-w-3xl mx-auto text-blue-100">
            Ready to grow your business? Let's discuss how we can help you achieve your digital marketing goals.
        </p>
    </div>
</section>

<!-- Contact Form Section -->
<section class="py-20">
    <div class="container mx-auto px-4">
        <div class="grid lg:grid-cols-2 gap-16">
            
            <!-- Contact Form -->
            <div>
                <h2 class="text-3xl font-bold mb-8 text-gray-900">Send us a message</h2>
                
                <?php if ($formSubmitted): ?>
                <div class="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
                    <div class="flex items-center">
                        <i data-lucide="check-circle" class="h-6 w-6 text-green-600 mr-3"></i>
                        <div>
                            <h3 class="text-lg font-semibold text-green-800">Message Sent Successfully!</h3>
                            <p class="text-green-700">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
                
                <?php if ($formError): ?>
                <div class="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                    <div class="flex items-center">
                        <i data-lucide="alert-circle" class="h-6 w-6 text-red-600 mr-3"></i>
                        <div>
                            <h3 class="text-lg font-semibold text-red-800">Error</h3>
                            <p class="text-red-700"><?= htmlspecialchars($formError) ?></p>
                        </div>
                    </div>
                </div>
                <?php endif; ?>
                
                <form method="POST" class="space-y-6">
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <input type="text" id="name" name="name" required value="<?= htmlspecialchars($_POST['name'] ?? '') ?>" 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input type="email" id="email" name="email" required value="<?= htmlspecialchars($_POST['email'] ?? '') ?>"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                        </div>
                    </div>
                    
                    <div class="grid md:grid-cols-2 gap-6">
                        <div>
                            <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" id="phone" name="phone" value="<?= htmlspecialchars($_POST['phone'] ?? '') ?>"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                        </div>
                        <div>
                            <label for="company" class="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                            <input type="text" id="company" name="company" value="<?= htmlspecialchars($_POST['company'] ?? '') ?>"
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                        </div>
                    </div>
                    
                    <div>
                        <label for="service" class="block text-sm font-medium text-gray-700 mb-2">Service Interest</label>
                        <select id="service" name="service" class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                            <option value="">Select a service</option>
                            <option value="ecommerce-marketing" <?= ($_POST['service'] ?? '') === 'ecommerce-marketing' ? 'selected' : '' ?>>Ecommerce Marketing</option>
                            <option value="website-development" <?= ($_POST['service'] ?? '') === 'website-development' ? 'selected' : '' ?>>Website Development</option>
                            <option value="seo-services" <?= ($_POST['service'] ?? '') === 'seo-services' ? 'selected' : '' ?>>SEO Services</option>
                            <option value="digital-marketing" <?= ($_POST['service'] ?? '') === 'digital-marketing' ? 'selected' : '' ?>>Digital Marketing</option>
                            <option value="marketplace-management" <?= ($_POST['service'] ?? '') === 'marketplace-management' ? 'selected' : '' ?>>Marketplace Management</option>
                            <option value="product-photography" <?= ($_POST['service'] ?? '') === 'product-photography' ? 'selected' : '' ?>>Product Photography</option>
                            <option value="other" <?= ($_POST['service'] ?? '') === 'other' ? 'selected' : '' ?>>Other</option>
                        </select>
                    </div>
                    
                    <div>
                        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                        <textarea id="message" name="message" rows="6" required
                                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                                  placeholder="Tell us about your project and how we can help..."><?= htmlspecialchars($_POST['message'] ?? '') ?></textarea>
                    </div>
                    
                    <button type="submit" name="submit_contact" 
                            class="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2">
                        <span>Send Message</span>
                        <i data-lucide="send" class="h-5 w-5"></i>
                    </button>
                </form>
            </div>
            
            <!-- Contact Information -->
            <div>
                <h2 class="text-3xl font-bold mb-8 text-gray-900">Get in touch</h2>
                <p class="text-gray-600 mb-8 text-lg">
                    Ready to take your business to the next level? We're here to help you succeed with our comprehensive digital solutions.
                </p>
                
                <div class="space-y-8">
                    <div class="flex items-start space-x-4">
                        <div class="bg-blue-100 p-3 rounded-lg">
                            <i data-lucide="mail" class="h-6 w-6 text-blue-600"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-1">Email us</h3>
                            <p class="text-gray-600">hello@icona.com</p>
                            <p class="text-gray-600">support@icona.com</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                        <div class="bg-green-100 p-3 rounded-lg">
                            <i data-lucide="phone" class="h-6 w-6 text-green-600"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-1">Call us</h3>
                            <p class="text-gray-600">+91 9876543210</p>
                            <p class="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                        <div class="bg-purple-100 p-3 rounded-lg">
                            <i data-lucide="map-pin" class="h-6 w-6 text-purple-600"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-1">Visit us</h3>
                            <p class="text-gray-600">Mumbai, India</p>
                            <p class="text-sm text-gray-500">By appointment only</p>
                        </div>
                    </div>
                    
                    <div class="flex items-start space-x-4">
                        <div class="bg-orange-100 p-3 rounded-lg">
                            <i data-lucide="clock" class="h-6 w-6 text-orange-600"></i>
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-gray-900 mb-1">Response time</h3>
                            <p class="text-gray-600">Within 24 hours</p>
                            <p class="text-sm text-gray-500">Usually much faster!</p>
                        </div>
                    </div>
                </div>
                
                <!-- Social Links -->
                <div class="mt-12">
                    <h3 class="text-lg font-semibold text-gray-900 mb-4">Follow us</h3>
                    <div class="flex space-x-4">
                        <a href="#" class="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                            <i data-lucide="linkedin" class="h-5 w-5 text-gray-600 hover:text-blue-600"></i>
                        </a>
                        <a href="#" class="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                            <i data-lucide="twitter" class="h-5 w-5 text-gray-600 hover:text-blue-600"></i>
                        </a>
                        <a href="#" class="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                            <i data-lucide="facebook" class="h-5 w-5 text-gray-600 hover:text-blue-600"></i>
                        </a>
                        <a href="#" class="bg-gray-100 p-3 rounded-lg hover:bg-blue-100 transition-colors">
                            <i data-lucide="instagram" class="h-5 w-5 text-gray-600 hover:text-blue-600"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- FAQ Section -->
<section class="py-20 bg-gray-50">
    <div class="container mx-auto px-4">
        <div class="text-center mb-16">
            <h2 class="text-4xl font-bold mb-6 text-gray-900">Frequently Asked Questions</h2>
            <p class="text-xl text-gray-600">Quick answers to common questions</p>
        </div>
        
        <div class="max-w-3xl mx-auto space-y-6">
            <div class="bg-white rounded-lg shadow-sm border p-6">
                <h3 class="text-lg font-semibold mb-3 text-gray-900">How quickly can you start working on my project?</h3>
                <p class="text-gray-600">We can typically start working on your project within 24-48 hours after our initial consultation and agreement on the project scope.</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-sm border p-6">
                <h3 class="text-lg font-semibold mb-3 text-gray-900">Do you work with businesses of all sizes?</h3>
                <p class="text-gray-600">Yes! We work with startups, small businesses, and large enterprises. Our solutions are tailored to fit your specific needs and budget.</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-sm border p-6">
                <h3 class="text-lg font-semibold mb-3 text-gray-900">What makes ICONA different from other agencies?</h3>
                <p class="text-gray-600">Our data-driven approach, transparent reporting, and focus on ROI set us apart. We treat your success as our success and provide dedicated support throughout your journey.</p>
            </div>
            
            <div class="bg-white rounded-lg shadow-sm border p-6">
                <h3 class="text-lg font-semibold mb-3 text-gray-900">Can you help with international markets?</h3>
                <p class="text-gray-600">Absolutely! We have experience managing campaigns across multiple countries and can help you expand your business globally.</p>
            </div>
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