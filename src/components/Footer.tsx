
import React from 'react';
import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
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
                ICONA
              </h3>
            </div>
            <p className="text-gray-400">
              Your trusted partner for comprehensive digital growth and innovative business solutions across all platforms.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ecommerce Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/ecommerce-marketing" className="hover:text-white transition-colors">Ecommerce Marketing</Link></li>
              <li><Link to="/services/marketplace-management" className="hover:text-white transition-colors">Marketplace Management</Link></li>
              <li><Link to="/services/product-photography" className="hover:text-white transition-colors">Product Photography</Link></li>
              <li><Link to="/services/video-production" className="hover:text-white transition-colors">Video Production</Link></li>
              <li><Link to="/services/advertising" className="hover:text-white transition-colors">Digital Advertising</Link></li>
              <li><Link to="/services/brand-development" className="hover:text-white transition-colors">Brand Development</Link></li>
              <li><Link to="/services/product-launch" className="hover:text-white transition-colors">Product Launch</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Digital Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/website-development" className="hover:text-white transition-colors">Website Development</Link></li>
              <li><Link to="/services/mobile-app-development" className="hover:text-white transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services/seo-services" className="hover:text-white transition-colors">SEO Services</Link></li>
              <li><Link to="/services/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services/analytics-reporting" className="hover:text-white transition-colors">Analytics & Reporting</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@icona.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Professional Growth Solutions</li>
              <li><Link to="/career" className="hover:text-white transition-colors">Join Our Team</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 ICONA. All rights reserved. Driving digital excellence.</p>
          <div className="mt-2">
            <Link to="/auth" className="text-gray-600 hover:text-gray-400 text-xs transition-colors">Admin</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
