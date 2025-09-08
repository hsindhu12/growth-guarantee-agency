-- Complete ICONA Database Setup Script
-- Run this entire script to set up the complete database

-- Create database if not exists
CREATE DATABASE IF NOT EXISTS icona_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE icona_db;

-- Admin users table
CREATE TABLE admin_users (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  email VARCHAR(255) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  role ENUM('admin', 'super_admin') DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Blog posts table
CREATE TABLE blog_posts (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT,
  content LONGTEXT NOT NULL,
  featured_image_url VARCHAR(500),
  author_name VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  tags JSON,
  published BOOLEAN DEFAULT FALSE,
  featured BOOLEAN DEFAULT FALSE,
  meta_title VARCHAR(255),
  meta_description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug),
  INDEX idx_published (published),
  INDEX idx_featured (featured),
  INDEX idx_category (category)
);

-- Success stories table
CREATE TABLE success_stories (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  client_name VARCHAR(255) NOT NULL,
  industry VARCHAR(100),
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  results TEXT NOT NULL,
  metrics JSON,
  image_url VARCHAR(500),
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_featured (featured),
  INDEX idx_published (published)
);

-- Contacts table
CREATE TABLE contacts (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT NOT NULL,
  service_interest VARCHAR(100),
  status ENUM('new', 'contacted', 'qualified', 'closed') DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_status (status),
  INDEX idx_email (email)
);

-- Newsletter subscribers table
CREATE TABLE newsletter_subscribers (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(255),
  status ENUM('active', 'unsubscribed') DEFAULT 'active',
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  unsubscribed_at TIMESTAMP NULL,
  INDEX idx_email (email),
  INDEX idx_status (status)
);

-- Service pages table
CREATE TABLE service_pages (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  service_type VARCHAR(100) NOT NULL UNIQUE,
  title VARCHAR(255) NOT NULL,
  subtitle VARCHAR(500),
  hero_content JSON,
  features JSON,
  pricing JSON,
  testimonials JSON,
  faq JSON,
  meta_title VARCHAR(255),
  meta_description TEXT,
  published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_service_type (service_type),
  INDEX idx_published (published)
);

-- Site settings table
CREATE TABLE site_settings (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  setting_key VARCHAR(100) NOT NULL UNIQUE,
  setting_value JSON NOT NULL,
  description TEXT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  updated_by VARCHAR(36),
  INDEX idx_key (setting_key)
);

-- Media library table
CREATE TABLE media_library (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  filename VARCHAR(255) NOT NULL,
  original_name VARCHAR(255) NOT NULL,
  file_path VARCHAR(500) NOT NULL,
  file_size INT NOT NULL,
  mime_type VARCHAR(100) NOT NULL,
  alt_text VARCHAR(255),
  caption TEXT,
  uploaded_by VARCHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_filename (filename),
  INDEX idx_mime_type (mime_type)
);

-- Pages table for visual editor
CREATE TABLE pages (
  id VARCHAR(36) PRIMARY KEY DEFAULT (UUID()),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  content LONGTEXT,
  meta_title VARCHAR(255),
  meta_description TEXT,
  featured_image VARCHAR(500),
  status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
  template VARCHAR(100) DEFAULT 'default',
  author_id VARCHAR(36),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_slug (slug),
  INDEX idx_status (status),
  FOREIGN KEY (author_id) REFERENCES admin_users(id) ON DELETE SET NULL
);

-- Insert default admin user (password: admin123)
INSERT INTO admin_users (email, password_hash, name, role) VALUES 
('admin@icona.com', '$2a$10$rOyf/JZ4PiJ8EQrYV1J8MeNSw1dZqx6U9Qr8J7z5K2w4v3L1N8x9Y0', 'Admin User', 'super_admin');

-- Insert default site settings
INSERT INTO site_settings (setting_key, setting_value, description) VALUES 
('site_title', '"ICONA - Digital Marketing Agency"', 'Website title'),
('site_description', '"Professional digital marketing services to grow your business"', 'Website description'),
('contact_email', '"hello@icona.com"', 'Contact email'),
('contact_phone', '"+1 (555) 123-4567"', 'Contact phone'),
('social_media', '{"facebook": "", "twitter": "", "instagram": "", "linkedin": ""}', 'Social media links');

-- Sample blog posts
INSERT INTO blog_posts (title, slug, excerpt, content, author_name, category, published, featured, meta_title, meta_description) VALUES
('10 Digital Marketing Strategies That Actually Work in 2024', '10-digital-marketing-strategies-2024', 
'Discover the most effective digital marketing strategies that are driving real results for businesses this year.',
'<h2>Introduction</h2><p>The digital marketing landscape is constantly evolving. What worked last year might not be as effective today. In this comprehensive guide, we''ll explore the top 10 digital marketing strategies that are delivering real results in 2024.</p><h2>1. AI-Powered Personalization</h2><p>Artificial intelligence is revolutionizing how we personalize marketing experiences...</p>',
'ICONA Team', 'Digital Marketing', TRUE, TRUE,
'10 Digital Marketing Strategies That Work in 2024 | ICONA',
'Discover the most effective digital marketing strategies for 2024. Learn proven tactics that drive real results for businesses.'),

('The Complete Guide to SEO in 2024', 'complete-guide-seo-2024',
'Everything you need to know about SEO in 2024, from technical optimization to content strategy.',
'<h2>SEO Fundamentals</h2><p>Search Engine Optimization remains one of the most cost-effective ways to drive organic traffic to your website...</p>',
'ICONA Team', 'SEO', TRUE, FALSE,
'Complete SEO Guide 2024 | ICONA Digital Marketing',
'Master SEO in 2024 with our comprehensive guide covering technical optimization, content strategy, and ranking factors.');

-- Sample success stories
INSERT INTO success_stories (client_name, industry, challenge, solution, results, metrics, featured, published) VALUES
('TechStart Inc.', 'Technology', 
'Struggling to generate quality leads and increase brand awareness in a competitive market.',
'Implemented comprehensive digital marketing strategy including SEO, PPC, content marketing, and social media management.',
'Achieved 300% increase in organic traffic, 250% boost in lead generation, and 180% improvement in conversion rates within 6 months.',
'{"organic_traffic_increase": "300%", "lead_generation_boost": "250%", "conversion_improvement": "180%", "timeframe": "6 months"}',
TRUE, TRUE),

('Fashion Forward Boutique', 'E-commerce',
'Low online visibility and poor website conversion rates despite having quality products.',
'Redesigned website for better UX, implemented e-commerce SEO, and launched targeted social media campaigns.',
'Doubled online sales, improved conversion rate by 150%, and gained 500% more social media followers.',
'{"sales_increase": "200%", "conversion_improvement": "150%", "social_followers": "500%", "timeframe": "4 months"}',
TRUE, TRUE);

-- Sample service pages
INSERT INTO service_pages (service_type, title, subtitle, hero_content, features, pricing, published, meta_title, meta_description) VALUES
('seo', 'SEO Services', 'Boost your search engine rankings and drive organic traffic',
'{"heading": "Professional SEO Services", "subheading": "Get found by customers searching for your services", "cta_text": "Get Free SEO Audit", "background_image": "/images/seo-hero.jpg"}',
'[{"title": "Keyword Research", "description": "Comprehensive keyword analysis to target the right terms"}, {"title": "On-Page Optimization", "description": "Optimize your website structure and content for search engines"}, {"title": "Link Building", "description": "Build high-quality backlinks to improve domain authority"}]',
'{"starting_price": "$999", "monthly_packages": [{"name": "Basic", "price": "$999", "features": ["Keyword research", "On-page optimization", "Monthly reporting"]}, {"name": "Professional", "price": "$1999", "features": ["Everything in Basic", "Link building", "Technical SEO", "Content optimization"]}]}',
TRUE,
'Professional SEO Services | Increase Rankings | ICONA',
'Boost your search engine rankings with our professional SEO services. Drive more organic traffic and grow your business online.'),

('ppc', 'PPC Advertising', 'Drive immediate traffic and conversions with targeted ads',
'{"heading": "PPC Advertising Services", "subheading": "Get instant visibility and drive qualified traffic to your website", "cta_text": "Start Your Campaign", "background_image": "/images/ppc-hero.jpg"}',
'[{"title": "Google Ads Management", "description": "Expert management of your Google Ads campaigns for maximum ROI"}, {"title": "Facebook Advertising", "description": "Targeted social media advertising to reach your ideal customers"}, {"title": "Campaign Optimization", "description": "Continuous optimization to improve performance and reduce costs"}]',
'{"starting_price": "$500", "management_fee": "15% of ad spend", "minimum_budget": "$1000"}',
TRUE,
'PPC Advertising Services | Google Ads Management | ICONA',
'Drive immediate results with our PPC advertising services. Expert Google Ads and Facebook advertising management.');

-- Sample newsletter subscribers
INSERT INTO newsletter_subscribers (email, name, status) VALUES
('john.doe@example.com', 'John Doe', 'active'),
('jane.smith@example.com', 'Jane Smith', 'active'),
('marketing@techcompany.com', 'Tech Company Marketing', 'active');

-- Sample contact submissions
INSERT INTO contacts (name, email, phone, company, message, service_interest, status) VALUES
('Michael Johnson', 'michael@company.com', '+1-555-0123', 'Johnson & Associates', 'Interested in improving our online presence and SEO rankings.', 'SEO', 'new'),
('Sarah Wilson', 'sarah@startup.com', '+1-555-0456', 'Wilson Startup', 'Looking for comprehensive digital marketing strategy for our new business.', 'Digital Marketing', 'contacted');

-- Sample pages for visual editor
INSERT INTO pages (title, slug, content, meta_title, meta_description, status, author_id) VALUES
('Home', 'home', 
'{"elements": [{"type": "hero", "content": {"heading": "ICONA - Digital Marketing Excellence", "subheading": "Transform your business with our comprehensive digital marketing solutions", "cta_text": "Get Started", "background_image": "/images/hero-bg.jpg"}}, {"type": "services", "content": {"heading": "Our Services", "services": [{"title": "SEO", "description": "Boost your search rankings"}, {"title": "PPC", "description": "Drive immediate traffic"}, {"title": "Social Media", "description": "Engage your audience"}]}}, {"type": "success-stories", "content": {"heading": "Success Stories"}}, {"type": "contact", "content": {"heading": "Ready to Grow?"}}]}',
'ICONA - Digital Marketing Agency | SEO, PPC, Social Media',
'Leading digital marketing agency specializing in SEO, PPC, social media marketing, and web development. Grow your business online with ICONA.',
'published', (SELECT id FROM admin_users WHERE email = 'admin@icona.com' LIMIT 1)),

('About Us', 'about-us', 
'{"elements": [{"type": "hero", "content": {"heading": "About ICONA", "subheading": "Leading digital marketing agency with 10+ years of experience"}}, {"type": "paragraph", "content": {"text": "We are a team of passionate digital marketing experts dedicated to helping businesses grow their online presence and achieve measurable results. Our comprehensive approach combines strategic thinking with cutting-edge technology to deliver exceptional outcomes for our clients."}}]}',
'About ICONA - Digital Marketing Experts',
'Learn about ICONA, a leading digital marketing agency with over 10 years of experience helping businesses grow online.',
'published', (SELECT id FROM admin_users WHERE email = 'admin@icona.com' LIMIT 1)),

('Contact', 'contact', 
'{"elements": [{"type": "heading", "content": {"text": "Get In Touch"}}, {"type": "paragraph", "content": {"text": "Ready to grow your business? Contact us today for a free consultation and discover how we can help you achieve your digital marketing goals."}}, {"type": "contact-form", "content": {"heading": "Send us a message"}}]}',
'Contact ICONA - Free Consultation',
'Contact ICONA for a free digital marketing consultation. Let us help you grow your business online.',
'published', (SELECT id FROM admin_users WHERE email = 'admin@icona.com' LIMIT 1));

-- End of script
SELECT 'Database setup completed successfully!' as message;