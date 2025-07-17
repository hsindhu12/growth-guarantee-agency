
-- Create admin users table for CMS access
CREATE TABLE public.admin_users (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role TEXT NOT NULL DEFAULT 'editor' CHECK (role IN ('super_admin', 'admin', 'editor')),
  permissions JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create pages table for CMS content management
CREATE TABLE public.pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  meta_title TEXT,
  meta_description TEXT,
  featured_image_url TEXT,
  template TEXT DEFAULT 'default',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id)
);

-- Create themes table for theme management
CREATE TABLE public.themes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  config JSONB NOT NULL DEFAULT '{}'::jsonb,
  is_active BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create service_pages table for service-specific content
CREATE TABLE public.service_pages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_type TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  subtitle TEXT,
  hero_content JSONB DEFAULT '{}'::jsonb,
  features JSONB DEFAULT '[]'::jsonb,
  pricing JSONB DEFAULT '{}'::jsonb,
  testimonials JSONB DEFAULT '[]'::jsonb,
  faq JSONB DEFAULT '[]'::jsonb,
  meta_title TEXT,
  meta_description TEXT,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create media library table
CREATE TABLE public.media_library (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT NOT NULL,
  file_size INTEGER,
  alt_text TEXT,
  uploaded_by UUID REFERENCES auth.users(id),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create site_settings table for global settings
CREATE TABLE public.site_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value JSONB NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable Row Level Security
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.themes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_library ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public access to published content
CREATE POLICY "Published pages are publicly readable" ON public.pages
  FOR SELECT USING (published = true);

CREATE POLICY "Active theme is publicly readable" ON public.themes
  FOR SELECT USING (is_active = true);

CREATE POLICY "Published service pages are publicly readable" ON public.service_pages
  FOR SELECT USING (published = true);

CREATE POLICY "Media library is publicly readable" ON public.media_library
  FOR SELECT USING (true);

CREATE POLICY "Site settings are publicly readable" ON public.site_settings
  FOR SELECT USING (true);

-- Create policies for admin access (will need authentication)
CREATE POLICY "Admins can manage all content" ON public.pages
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid() 
      AND role IN ('super_admin', 'admin')
    )
  );

CREATE POLICY "Editors can manage pages" ON public.pages
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage themes" ON public.themes
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid() 
      AND role IN ('super_admin', 'admin')
    )
  );

CREATE POLICY "Admins can manage service pages" ON public.service_pages
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid() 
      AND role IN ('super_admin', 'admin')
    )
  );

CREATE POLICY "Users can upload media" ON public.media_library
  FOR INSERT WITH CHECK (auth.uid() = uploaded_by);

CREATE POLICY "Admins can manage site settings" ON public.site_settings
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.admin_users 
      WHERE user_id = auth.uid() 
      AND role IN ('super_admin', 'admin')
    )
  );

-- Insert default service pages
INSERT INTO public.service_pages (service_type, title, subtitle, hero_content, features) VALUES
('ecommerce-marketing', 'E-commerce Marketing', 'Drive sales and grow your online business', 
 '{"heading": "Boost Your E-commerce Sales", "description": "Comprehensive marketing solutions for online retailers", "cta": "Get Started Today"}',
 '[{"title": "SEO Optimization", "description": "Improve search rankings"}, {"title": "PPC Advertising", "description": "Targeted ad campaigns"}, {"title": "Conversion Optimization", "description": "Increase sales rates"}]'),

('marketplace-management', 'Marketplace Management', 'Maximize your presence on major marketplaces',
 '{"heading": "Dominate Amazon & eBay", "description": "Professional marketplace management services", "cta": "Scale Your Business"}',
 '[{"title": "Amazon FBA", "description": "Full Amazon management"}, {"title": "eBay Optimization", "description": "Maximize eBay sales"}, {"title": "Multi-channel Strategy", "description": "Unified approach"}]'),

('seo-services', 'SEO Services', 'Rank higher and drive organic traffic',
 '{"heading": "Rank #1 on Google", "description": "Expert SEO strategies that deliver results", "cta": "Boost Rankings"}',
 '[{"title": "Technical SEO", "description": "Website optimization"}, {"title": "Content Strategy", "description": "SEO-friendly content"}, {"title": "Link Building", "description": "Quality backlinks"}]');

-- Insert default theme
INSERT INTO public.themes (name, config, is_active) VALUES
('ICONA Default', 
 '{"colors": {"primary": "210 100% 45%", "secondary": "210 17% 95%", "accent": "#f97316"}, "fonts": {"heading": "Inter", "body": "Inter"}, "layout": {"container": "1200px", "spacing": "1rem"}}',
 true);

-- Insert default site settings
INSERT INTO public.site_settings (key, value, description) VALUES
('site_title', '"ICONA - Digital Marketing Agency"', 'Main site title'),
('site_description', '"Leading digital marketing agency specializing in e-commerce growth"', 'Site meta description'),
('contact_email', '"info@icona.com"', 'Main contact email'),
('contact_phone', '"+1 (555) 123-4567"', 'Main contact phone'),
('social_links', '{"facebook": "https://facebook.com/icona", "twitter": "https://twitter.com/icona", "linkedin": "https://linkedin.com/company/icona"}', 'Social media links');

-- Create indexes for better performance
CREATE INDEX idx_pages_slug ON public.pages(slug);
CREATE INDEX idx_pages_published ON public.pages(published, created_at DESC);
CREATE INDEX idx_service_pages_type ON public.service_pages(service_type);
CREATE INDEX idx_media_library_type ON public.media_library(file_type);
CREATE INDEX idx_admin_users_role ON public.admin_users(role);
