-- ICONA Digital Marketing Agency Database Dump
-- Complete database setup with sample data

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
  slug VARCHAR(255) NOT NULL UNIQUE,
  content JSON NOT NULL,
  meta_title VARCHAR(255),
  meta_description TEXT,
  featured_image_url VARCHAR(500),
  template VARCHAR(100) DEFAULT 'default',
  published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  created_by VARCHAR(36),
  INDEX idx_slug (slug),
  INDEX idx_published (published)
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
INSERT INTO blog_posts (title, slug, excerpt, content, author_name, category, tags, published, featured) VALUES
('The Future of Digital Marketing: Trends to Watch in 2024', 'future-digital-marketing-2024', 'Discover the latest trends and innovations shaping digital marketing in 2024.', 'Digital marketing continues to evolve at a rapid pace...', 'ICONA Team', 'Digital Marketing', '["digital marketing", "trends", "2024"]', TRUE, TRUE),
('How to Build a Strong Brand Identity', 'build-strong-brand-identity', 'Learn the essential steps to create a memorable and effective brand identity.', 'Brand identity is more than just a logo...', 'Sarah Johnson', 'Branding', '["branding", "identity", "design"]', TRUE, FALSE),
('SEO Best Practices for 2024', 'seo-best-practices-2024', 'Stay ahead of the competition with these proven SEO strategies.', 'Search engine optimization remains crucial...', 'Mike Chen', 'SEO', '["seo", "optimization", "ranking"]', TRUE, TRUE);

-- Sample success stories
INSERT INTO success_stories (client_name, industry, challenge, solution, results, metrics, featured, published) VALUES
('TechStart Inc.', 'Technology', 'Low brand awareness and poor online presence', 'Comprehensive digital marketing strategy including SEO, content marketing, and social media campaigns', 'Increased brand awareness by 300% and generated 150% more leads', '{"brand_awareness": "300%", "lead_increase": "150%", "roi": "400%"}', TRUE, TRUE),
('GreenEarth Products', 'Sustainability', 'Difficulty reaching target audience and low conversion rates', 'Targeted social media advertising and conversion optimization', 'Improved conversion rates by 250% and reduced customer acquisition cost by 40%', '{"conversion_rate": "250%", "cac_reduction": "40%", "revenue_growth": "180%"}', TRUE, TRUE);

-- Sample newsletter subscribers
INSERT INTO newsletter_subscribers (email, name) VALUES
('john.doe@example.com', 'John Doe'),
('jane.smith@example.com', 'Jane Smith'),
('mike.wilson@example.com', 'Mike Wilson');

-- Sample contacts
INSERT INTO contacts (name, email, phone, company, message, service_interest) VALUES
('Alice Johnson', 'alice@company.com', '+1-555-0123', 'Tech Solutions Ltd', 'We need help with our digital marketing strategy', 'Digital Marketing'),
('Bob Smith', 'bob@startup.com', '+1-555-0456', 'Startup Inc', 'Looking for SEO services', 'SEO Services');

-- Sample service pages
INSERT INTO service_pages (service_type, title, subtitle, hero_content, features, pricing, testimonials, faq) VALUES
('digital-marketing', 'Digital Marketing Services', 'Comprehensive digital marketing solutions to grow your business', 
'{"headline": "Transform Your Digital Presence", "description": "We help businesses grow through strategic digital marketing campaigns that deliver measurable results."}',
'[{"title": "SEO Optimization", "description": "Improve your search rankings"}, {"title": "Social Media Marketing", "description": "Engage your audience on social platforms"}]',
'{"basic": {"price": "$999", "features": ["SEO Audit", "Social Media Setup"]}, "premium": {"price": "$2999", "features": ["Full SEO Campaign", "Social Media Management", "Content Creation"]}}',
'[{"client": "TechStart Inc.", "quote": "ICONA transformed our online presence completely!", "rating": 5}]',
'[{"question": "What is included in digital marketing?", "answer": "Our digital marketing services include SEO, social media marketing, content creation, and analytics."}]');

-- Sample pages for visual editor
INSERT INTO pages (title, slug, content, published, created_by) VALUES
('About Us', 'about-us', '{"elements": [{"type": "hero", "content": {"title": "About ICONA", "subtitle": "Your trusted digital marketing partner"}}, {"type": "text", "content": {"text": "We are a leading digital marketing agency..."}}]}', TRUE, (SELECT id FROM admin_users WHERE email = 'admin@icona.com' LIMIT 1)),
('Services Overview', 'services-overview', '{"elements": [{"type": "hero", "content": {"title": "Our Services", "subtitle": "Comprehensive digital solutions"}}, {"type": "grid", "content": {"items": [{"title": "SEO", "description": "Search engine optimization"}, {"title": "Social Media", "description": "Social media marketing"}]}}]}', TRUE, (SELECT id FROM admin_users WHERE email = 'admin@icona.com' LIMIT 1));

-- Completed
SELECT 'Database setup completed successfully!' as status;