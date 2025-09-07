-- Create pages table for visual editor
CREATE TABLE IF NOT EXISTS pages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content LONGTEXT,
    meta_title VARCHAR(255),
    meta_description TEXT,
    featured_image VARCHAR(500),
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    template VARCHAR(100) DEFAULT 'default',
    author_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_slug (slug),
    INDEX idx_status (status),
    FOREIGN KEY (author_id) REFERENCES admin_users(id) ON DELETE SET NULL
);

-- Sample pages
INSERT INTO pages (title, slug, content, meta_title, meta_description, status, author_id) VALUES
('Home', 'home', 
'{"elements": [{"type": "hero", "content": {"heading": "ICONA - Digital Marketing Excellence", "subheading": "Transform your business with our comprehensive digital marketing solutions"}}, {"type": "services", "content": {}}, {"type": "success-stories", "content": {}}, {"type": "contact", "content": {}}]}',
'ICONA - Digital Marketing Agency | SEO, PPC, Social Media',
'Leading digital marketing agency specializing in SEO, PPC, social media marketing, and web development. Grow your business online with ICONA.',
'published', 1),

('About Us', 'about-us', 
'{"elements": [{"type": "hero", "content": {"heading": "About ICONA", "subheading": "Leading digital marketing agency with 10+ years of experience"}}, {"type": "paragraph", "content": {"text": "We are a team of passionate digital marketing experts dedicated to helping businesses grow their online presence and achieve measurable results."}}]}',
'About ICONA - Digital Marketing Experts',
'Learn about ICONA, a leading digital marketing agency with over 10 years of experience helping businesses grow online.',
'published', 1),

('Contact', 'contact', 
'{"elements": [{"type": "heading", "content": {"text": "Get In Touch"}}, {"type": "paragraph", "content": {"text": "Ready to grow your business? Contact us today for a free consultation."}}, {"type": "contact-form", "content": {}}]}',
'Contact ICONA - Free Consultation',
'Contact ICONA for a free digital marketing consultation. Let us help you grow your business online.',
'published', 1),

('Privacy Policy', 'privacy-policy',
'{"elements": [{"type": "heading", "content": {"text": "Privacy Policy"}}, {"type": "paragraph", "content": {"text": "Last updated: January 2024"}}, {"type": "paragraph", "content": {"text": "ICONA respects your privacy and is committed to protecting your personal information..."}}]}',
'Privacy Policy - ICONA',
'ICONA privacy policy explaining how we collect, use, and protect your personal information.',
'published', 1);