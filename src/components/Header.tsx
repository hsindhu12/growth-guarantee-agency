
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Mascot from './Mascot';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Mascot size="sm" />
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              EcomGrowth Pro
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleServices}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border py-2 z-10">
                  <div className="px-4 py-2 text-sm font-semibold text-gray-900 border-b">Ecommerce Services</div>
                  <a href="#ecommerce-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Ecommerce Marketing</a>
                  <a href="#marketplace-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Marketplace Management</a>
                  <a href="#product-photography" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Product Photography</a>
                  <a href="#video-production" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Video Production</a>
                  
                  <div className="px-4 py-2 text-sm font-semibold text-gray-900 border-b border-t mt-2">Digital Services</div>
                  <a href="#web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Website Development</a>
                  <a href="#seo-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">SEO Services</a>
                  <a href="#digital-marketing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Digital Marketing</a>
                </div>
              )}
            </div>
            
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
              Get Free Audit
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 w-fit">
                Get Free Audit
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
