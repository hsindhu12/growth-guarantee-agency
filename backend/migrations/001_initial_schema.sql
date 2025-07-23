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