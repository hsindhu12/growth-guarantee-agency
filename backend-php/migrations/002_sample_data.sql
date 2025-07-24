-- Sample data for ICONA database
USE icona_db;

-- Sample blog posts
INSERT INTO blog_posts (title, slug, content, excerpt, featured_image, author_id, status, meta_title, meta_description, tags) VALUES
('10 Digital Marketing Trends for 2024', '10-digital-marketing-trends-2024', 
'<h2>The Digital Marketing Landscape is Evolving</h2><p>As we move into 2024, digital marketing continues to evolve at a rapid pace. Here are the top 10 trends that will shape the industry...</p><h3>1. AI-Powered Personalization</h3><p>Artificial intelligence is revolutionizing how brands connect with their audiences through hyper-personalized experiences...</p><h3>2. Voice Search Optimization</h3><p>With the rise of smart speakers and voice assistants, optimizing for voice search is becoming crucial...</p>', 
'Discover the top digital marketing trends that will dominate 2024 and how your business can leverage them for growth.', 
'/uploads/blog/digital-marketing-trends-2024.jpg', 
1, 'published', 
'10 Digital Marketing Trends for 2024 | ICONA', 
'Stay ahead of the competition with these essential digital marketing trends for 2024. Expert insights from ICONA.', 
'["digital marketing", "trends", "2024", "AI", "voice search"]'),

('Complete Guide to E-commerce SEO', 'complete-guide-ecommerce-seo', 
'<h2>Mastering E-commerce SEO</h2><p>E-commerce SEO is essential for driving organic traffic to your online store. This comprehensive guide covers everything you need to know...</p><h3>Keyword Research for E-commerce</h3><p>Start with thorough keyword research focusing on product-specific and commercial intent keywords...</p><h3>On-Page Optimization</h3><p>Optimize your product pages, category pages, and collection pages for maximum visibility...</p>', 
'Learn how to optimize your e-commerce website for search engines and drive more organic traffic to your online store.', 
'/uploads/blog/ecommerce-seo-guide.jpg', 
1, 'published', 
'Complete Guide to E-commerce SEO | ICONA', 
'Master e-commerce SEO with our comprehensive guide. Increase organic traffic and sales for your online store.', 
'["ecommerce", "SEO", "online store", "organic traffic"]'),

('The Power of Social Media Marketing in 2024', 'power-social-media-marketing-2024', 
'<h2>Social Media: The Heart of Modern Marketing</h2><p>Social media marketing continues to be one of the most effective ways to reach and engage your target audience...</p><h3>Platform-Specific Strategies</h3><p>Each social media platform requires a unique approach. Here''s how to optimize for each...</p><h3>Content Creation Tips</h3><p>Creating engaging content that resonates with your audience is key to social media success...</p>', 
'Harness the full potential of social media marketing with proven strategies and best practices for 2024.', 
'/uploads/blog/social-media-marketing-2024.jpg', 
1, 'published', 
'The Power of Social Media Marketing in 2024 | ICONA', 
'Boost your brand with effective social media marketing strategies. Expert tips and insights from ICONA.', 
'["social media", "marketing", "engagement", "content creation"]');

-- Sample success stories
INSERT INTO success_stories (client_name, client_industry, project_title, description, results, testimonial, featured_image, status, author_id) VALUES
('TechStart Solutions', 'Technology', 'Complete Digital Transformation', 
'TechStart Solutions approached ICONA to completely revamp their digital presence. They needed a modern website, improved SEO, and a comprehensive digital marketing strategy to compete in the competitive tech industry.', 
'<ul><li>300% increase in organic traffic</li><li>150% boost in lead generation</li><li>45% improvement in conversion rate</li><li>ROI of 400% within 6 months</li></ul>', 
'Working with ICONA was a game-changer for our business. Their strategic approach and expertise helped us achieve results we never thought possible. Our online presence is now stronger than ever!', 
'/uploads/success-stories/techstart-solutions.jpg', 
'published', 1),

('GreenLife Organic', 'Health & Wellness', 'E-commerce Platform & Marketing', 
'GreenLife Organic needed an e-commerce solution to sell their organic products online. ICONA developed a custom e-commerce platform with integrated marketing automation and SEO optimization.', 
'<ul><li>500% increase in online sales</li><li>200% growth in customer base</li><li>60% improvement in customer retention</li><li>Featured in top 3 search results for key terms</li></ul>', 
'ICONA transformed our small local business into a thriving online enterprise. Their e-commerce solution and marketing strategies exceeded all our expectations.', 
'/uploads/success-stories/greenlife-organic.jpg', 
'published', 1),

('Urban Design Studio', 'Architecture & Design', 'Brand Development & Website', 
'Urban Design Studio wanted to establish themselves as a premium architecture firm. ICONA created a sophisticated brand identity and a stunning portfolio website that showcases their work.', 
'<ul><li>250% increase in project inquiries</li><li>180% growth in social media following</li><li>90% of visitors now view portfolio</li><li>25% increase in project value</li></ul>', 
'ICONA perfectly captured our vision and translated it into a brand that truly represents who we are. The results speak for themselves.', 
'/uploads/success-stories/urban-design-studio.jpg', 
'published', 1);

-- Sample service pages
INSERT INTO service_pages (service_type, title, description, features, pricing, meta_title, meta_description, status, author_id) VALUES
('web-development', 'Professional Web Development Services', 
'Create stunning, responsive websites that drive results. Our expert development team builds custom solutions tailored to your business needs.', 
'["Custom responsive design", "E-commerce integration", "Content management systems", "Performance optimization", "SEO-friendly structure", "Mobile-first approach"]', 
'{"basic": {"name": "Starter Website", "price": "$2,999", "features": ["5 pages", "Responsive design", "Basic SEO", "Contact forms"]}, "premium": {"name": "Business Website", "price": "$5,999", "features": ["Up to 15 pages", "Custom design", "Advanced SEO", "Analytics integration", "Content management"]}, "enterprise": {"name": "Enterprise Solution", "price": "Custom", "features": ["Unlimited pages", "Custom functionality", "Advanced integrations", "Priority support"]}}', 
'Professional Web Development Services | ICONA', 
'Create stunning websites that drive results. Professional web development services from planning to launch.', 
'published', 1),

('digital-marketing', 'Comprehensive Digital Marketing Solutions', 
'Grow your business with data-driven digital marketing strategies. We help brands reach their target audience and achieve measurable results.', 
'["Search engine optimization", "Pay-per-click advertising", "Social media marketing", "Content marketing", "Email campaigns", "Analytics and reporting"]', 
'{"basic": {"name": "Starter Package", "price": "$1,999/month", "features": ["SEO optimization", "Social media management", "Monthly reporting"]}, "premium": {"name": "Growth Package", "price": "$3,999/month", "features": ["Full SEO campaign", "PPC advertising", "Content creation", "Email marketing"]}, "enterprise": {"name": "Enterprise Package", "price": "Custom", "features": ["Comprehensive strategy", "Multiple channels", "Dedicated account manager", "Advanced analytics"]}}', 
'Digital Marketing Solutions | ICONA', 
'Grow your business with proven digital marketing strategies. SEO, PPC, social media, and more.', 
'published', 1),

('brand-development', 'Strategic Brand Development Services', 
'Build a memorable brand that resonates with your audience. Our brand development process creates cohesive visual identities and messaging strategies.', 
'["Brand strategy development", "Logo and visual identity", "Brand guidelines", "Marketing collateral", "Brand positioning", "Competitive analysis"]', 
'{"basic": {"name": "Brand Essentials", "price": "$3,999", "features": ["Logo design", "Color palette", "Typography", "Basic guidelines"]}, "premium": {"name": "Complete Brand", "price": "$7,999", "features": ["Full brand strategy", "Complete visual identity", "Brand guidelines", "Marketing materials"]}, "enterprise": {"name": "Brand Transformation", "price": "Custom", "features": ["Comprehensive rebranding", "Market research", "Implementation strategy", "Ongoing support"]}}', 
'Brand Development Services | ICONA', 
'Create a powerful brand identity that stands out. Professional brand development and strategy services.', 
'published', 1);

-- Sample newsletter subscribers
INSERT INTO newsletter_subscribers (email, status) VALUES
('john.doe@example.com', 'active'),
('sarah.smith@business.com', 'active'),
('mike.johnson@startup.io', 'active'),
('lisa.chen@company.com', 'active'),
('david.wilson@enterprise.com', 'active');

-- Sample contacts
INSERT INTO contacts (name, email, phone, company, message, service_interest, status) VALUES
('Alex Thompson', 'alex@newventure.com', '+1-555-0123', 'New Venture LLC', 'We are looking for a complete digital marketing strategy for our new product launch. Can you help us reach our target audience effectively?', 'digital-marketing', 'new'),
('Maria Rodriguez', 'maria@retailplus.com', '+1-555-0234', 'Retail Plus', 'Our current website is outdated and not mobile-friendly. We need a modern, responsive website that showcases our products better.', 'web-development', 'contacted'),
('James Liu', 'james@techcorp.com', '+1-555-0345', 'TechCorp Industries', 'We want to rebrand our company to better reflect our innovative approach. Looking for comprehensive brand development services.', 'brand-development', 'new'),
('Emma Davis', 'emma@localstore.com', '+1-555-0456', 'Local Store Co', 'Need help with SEO to improve our local search rankings. Our competitors are outranking us for important keywords.', 'seo-services', 'new');

-- Update site settings with more comprehensive data
UPDATE site_settings SET setting_value = 'ICONA - Premier Digital Marketing & Web Solutions' WHERE setting_key = 'site_title';
UPDATE site_settings SET setting_value = 'Transform your business with professional digital marketing, web development, and brand development services from ICONA.' WHERE setting_key = 'site_description';

INSERT INTO site_settings (setting_key, setting_value) VALUES
('company_address', '123 Business District, Suite 400, New York, NY 10001'),
('business_hours', 'Monday - Friday: 9:00 AM - 6:00 PM EST'),
('services_intro', 'We provide comprehensive digital solutions to help your business thrive in the digital landscape.'),
('about_company', 'ICONA is a leading digital marketing and web development agency with over 10 years of experience helping businesses grow their online presence.'),
('team_size', '25+ Experts'),
('projects_completed', '500+'),
('client_satisfaction', '98%'),
('years_experience', '10+')
ON DUPLICATE KEY UPDATE setting_value = VALUES(setting_value);