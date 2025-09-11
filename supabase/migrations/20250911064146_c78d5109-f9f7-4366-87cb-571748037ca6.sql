-- Insert default site settings for header, footer, and other content sections
INSERT INTO site_settings (key, value, description) VALUES 
  ('header_logo_text', '"ICONA"', 'Text displayed in the header logo'),
  ('header_button_text', '"Get Started"', 'Text for the main CTA button in header'),
  ('footer_description', '"Your trusted partner for comprehensive digital growth and innovative business solutions across all platforms."', 'Company description in footer'),
  ('hero_badge_text', '"✨ Professional Digital Growth Solutions ✨"', 'Text inside the floating badge'),
  ('hero_primary_button_text', '"Start Your Growth Journey"', 'Text for the main CTA button'),
  ('hero_secondary_button_text', '"View Our Portfolio"', 'Text for the secondary button'),
  ('hero_stats', '[
    { "number": "500+", "label": "Brands Grown" },
    { "number": "99%", "label": "Success Rate" },
    { "number": "$50M+", "label": "Revenue Generated" },
    { "number": "10+", "label": "Years Experience" }
  ]', 'Statistics displayed in the hero section (JSON format)'),
  ('cta_section_title', '"Ready to Guarantee Your Growth?"', 'Main heading for call-to-action section'),
  ('cta_section_description', '"Join 500+ brands that have achieved explosive growth with our proven strategies."', 'Description text for CTA section'),
  ('cta_primary_button_text', '"📞 Get Free Strategy Call"', 'Text for the main CTA button'),
  ('cta_secondary_button_text', '"📱 WhatsApp: +91 XXXXX XXXXX"', 'Text for the secondary CTA button')
ON CONFLICT (key) DO UPDATE SET 
  value = EXCLUDED.value,
  description = EXCLUDED.description,
  updated_at = now();