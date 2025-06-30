
import React from 'react';
import Mascot from './Mascot';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Mascot size="sm" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Blink Growth Pro
              </h3>
            </div>
            <p className="text-gray-400">
              Your trusted ninja partner for guaranteed digital growth across all platforms and services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ecommerce Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services/ecommerce-marketing" className="hover:text-white transition-colors">Ecommerce Marketing</Link></li>
              <li><Link to="/services/marketplace-management" className="hover:text-white transition-colors">Marketplace Management</Link></li>
              <li><Link to="/services/product-photography" className="hover:text-white transition-colors">Product Photography</Link></li>
              <li><Link to="/services/video-production" className="hover:text-white transition-colors">Video Production</Link></li>
              <li><Link to="/services/advertising" className="hover:text-white transition-colors">Advertising</Link></li>
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
              <li>Email: hello@blinkgrowthpro.com</li>
              <li>Phone: +91 XXXXX XXXXX</li>
              <li>100% Growth Guaranteed</li>
              <li><Link to="/career" className="hover:text-white transition-colors">Join Our Ninja Team</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Blink Growth Pro. All rights reserved. Growth guaranteed or work for free.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
