
import React from 'react';
import Mascot from './Mascot';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Mascot size="sm" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                EcomGrowth Pro
              </h3>
            </div>
            <p className="text-gray-400">
              Your trusted partner for guaranteed digital growth across all platforms and services.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ecommerce Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Ecommerce Marketing</li>
              <li>Marketplace Management</li>
              <li>Brand Growth</li>
              <li>Influencer Management</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Digital Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Website Development</li>
              <li>SEO Services</li>
              <li>Digital Marketing</li>
              <li>Web Applications</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: hello@ecomgrowthpro.com</li>
              <li>Phone: +91 XXXXX XXXXX</li>
              <li>100% Growth Guaranteed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EcomGrowth Pro. All rights reserved. Growth guaranteed or work for free.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
