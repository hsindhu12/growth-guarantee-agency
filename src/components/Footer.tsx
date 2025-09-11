
import React from 'react';
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteSetting } from "@/hooks/useSiteSettings";
import { useServicePages } from "@/hooks/useServicePages";

const Footer = () => {
  const { data: logoText } = useSiteSetting('header_logo_text');
  const { data: footerDescription } = useSiteSetting('footer_description');
  const { data: contactEmail } = useSiteSetting('contact_email');
  const { data: contactPhone } = useSiteSetting('contact_phone');
  const { data: servicePages } = useServicePages();

  // Separate services by category for footer
  const ecommerceServices = servicePages?.data?.filter(page => 
    ['ecommerce-marketing', 'marketplace-management', 'product-photography', 'video-production', 'advertising', 'brand-development', 'product-launch'].includes(page.service_type)
  ) || [];
  
  const digitalServices = servicePages?.data?.filter(page => 
    ['website-development', 'mobile-app-development', 'seo-services', 'digital-marketing', 'analytics-reporting'].includes(page.service_type)
  ) || [];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {logoText?.value || 'ICONA'}
              </h3>
            </div>
            <p className="text-gray-400">
              {footerDescription?.value || 'Your trusted partner for comprehensive digital growth and innovative business solutions across all platforms.'}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ecommerce Services</h4>
            <ul className="space-y-2 text-gray-400">
              {ecommerceServices.map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.service_type}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Digital Services</h4>
            <ul className="space-y-2 text-gray-400">
              {digitalServices.map(service => (
                <li key={service.id}>
                  <Link to={`/services/${service.service_type}`} className="hover:text-white transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: {contactEmail?.value || 'hello@icona.com'}</li>
              <li>Phone: {contactPhone?.value || '+1 (555) 123-4567'}</li>
              <li>Professional Growth Solutions</li>
              <li><Link to="/career" className="hover:text-white transition-colors">Join Our Team</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 {logoText?.value || 'ICONA'}. All rights reserved. Driving digital excellence.</p>
          <div className="mt-2">
            <Link to="/auth" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
