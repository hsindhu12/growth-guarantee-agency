
-- Create contacts table for contact form submissions
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  message TEXT NOT NULL,
  service_interest TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed'))
);

-- Create blog_posts table for blog content management
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image_url TEXT,
  author_name TEXT NOT NULL DEFAULT 'ICONA Team',
  category TEXT NOT NULL DEFAULT 'Digital Marketing',
  tags TEXT[],
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create career_applications table for job applications
CREATE TABLE public.career_applications (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  position TEXT NOT NULL,
  experience_years INTEGER,
  resume_url TEXT,
  cover_letter TEXT,
  portfolio_url TEXT,
  expected_salary TEXT,
  availability TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'received' CHECK (status IN ('received', 'reviewing', 'shortlisted', 'rejected', 'hired'))
);

-- Create service_inquiries table for detailed service requests
CREATE TABLE public.service_inquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  contact_id UUID REFERENCES public.contacts(id) ON DELETE CASCADE,
  service_type TEXT NOT NULL,
  project_budget TEXT,
  timeline TEXT,
  project_description TEXT,
  current_challenges TEXT,
  goals TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'quoted', 'approved', 'in_progress', 'completed'))
);

-- Create newsletter_subscribers table
CREATE TABLE public.newsletter_subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  active BOOLEAN DEFAULT true,
  preferences JSONB DEFAULT '{}'::jsonb
);

-- Create success_stories table for case studies
CREATE TABLE public.success_stories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  industry TEXT,
  challenge TEXT NOT NULL,
  solution TEXT NOT NULL,
  results TEXT NOT NULL,
  metrics JSONB DEFAULT '{}'::jsonb,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published BOOLEAN DEFAULT true
);

-- Enable Row Level Security on all tables
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.success_stories ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to blog posts and success stories
CREATE POLICY "Blog posts are publicly readable" ON public.blog_posts
  FOR SELECT USING (published = true);

CREATE POLICY "Success stories are publicly readable" ON public.success_stories
  FOR SELECT USING (published = true);

-- Create policies for public insert on contact forms and applications
CREATE POLICY "Anyone can submit contact forms" ON public.contacts
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can submit career applications" ON public.career_applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can submit service inquiries" ON public.service_inquiries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can subscribe to newsletter" ON public.newsletter_subscribers
  FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published, created_at DESC);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX idx_blog_posts_featured ON public.blog_posts(featured, created_at DESC);
CREATE INDEX idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX idx_career_applications_position ON public.career_applications(position);
CREATE INDEX idx_service_inquiries_service_type ON public.service_inquiries(service_type);

-- Insert sample blog posts
INSERT INTO public.blog_posts (title, slug, excerpt, content, category, tags, published, featured) VALUES
('10 Proven Strategies to Boost Your E-commerce Sales in 2024', 
 '10-proven-strategies-boost-ecommerce-sales-2024',
 'Discover the latest e-commerce strategies that are driving real results for businesses worldwide.',
 'E-commerce success in 2024 requires a strategic approach that combines cutting-edge technology with proven marketing techniques. In this comprehensive guide, we''ll explore ten strategies that have helped our clients achieve remarkable growth...',
 'E-commerce Marketing',
 ARRAY['ecommerce', 'sales', 'marketing', 'conversion'],
 true, true),

('The Complete Guide to Amazon FBA Success', 
 'complete-guide-amazon-fba-success',
 'Master Amazon FBA with our step-by-step guide to building a profitable business.',
 'Amazon FBA (Fulfillment by Amazon) has revolutionized how entrepreneurs build online businesses. This comprehensive guide covers everything from product research to scaling your operations...',
 'Marketplace Management',
 ARRAY['amazon', 'fba', 'marketplace', 'business'],
 true, false),

('SEO Trends That Will Dominate 2024', 
 'seo-trends-dominate-2024',
 'Stay ahead of the competition with these emerging SEO trends and strategies.',
 'Search engine optimization continues to evolve rapidly. Our SEO experts have identified the key trends that will shape search rankings in 2024...',
 'SEO Services',
 ARRAY['seo', 'trends', 'google', 'ranking'],
 true, true);

-- Insert sample success stories
INSERT INTO public.success_stories (client_name, industry, challenge, solution, results, metrics, featured) VALUES
('TechStart Solutions', 
 'Technology',
 'Struggling with low online visibility and poor conversion rates on their e-commerce platform.',
 'ICONA implemented a comprehensive digital marketing strategy including SEO optimization, targeted advertising, and conversion rate optimization.',
 'Achieved 300% increase in organic traffic, 250% boost in sales, and improved conversion rate from 1.2% to 4.8% within 6 months.',
 '{"traffic_increase": "300%", "sales_boost": "250%", "conversion_improvement": "4x", "timeframe": "6 months"}',
 true),

('FashionForward Boutique', 
 'Fashion & Retail',
 'Limited brand awareness and difficulty competing with established fashion retailers online.',
 'ICONA developed a complete brand identity, created engaging social media campaigns, and optimized their online store for mobile users.',
 'Brand recognition increased by 400%, social media following grew by 500%, and mobile sales increased by 350% in 8 months.',
 '{"brand_recognition": "400%", "social_growth": "500%", "mobile_sales": "350%", "timeframe": "8 months"}',
 true);
