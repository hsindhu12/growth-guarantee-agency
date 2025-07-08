
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-100 shadow-sm'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-primary group-hover:text-blue-600 transition-colors duration-300">
              ICONA
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleServices}
                className="flex items-center text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 font-medium group"
              >
                Services 
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 py-4 z-10 animate-fade-in">
                  <div className="px-6 py-3 text-sm font-bold text-gray-900 border-b border-gray-100 bg-gray-50">
                    Ecommerce Solutions
                  </div>
                  <Link to="/services/ecommerce-marketing" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    Ecommerce Marketing
                  </Link>
                  <Link to="/services/marketplace-management" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    Marketplace Management
                  </Link>
                  <Link to="/services/product-photography" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    Product Photography
                  </Link>
                  <Link to="/services/video-production" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    Video Production
                  </Link>
                  <Link to="/services/advertising" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    Digital Advertising
                  </Link>
                  <Link to="/services/brand-development" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    Brand Development
                  </Link>
                  <Link to="/services/product-launch" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    Product Launch
                  </Link>
                  
                  <div className="px-6 py-3 text-sm font-bold text-gray-900 border-b border-t border-gray-100 mt-2 bg-gray-50">
                    Digital Solutions
                  </div>
                  <Link to="/services/website-development" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    Website Development
                  </Link>
                  <Link to="/services/mobile-app-development" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    Mobile App Development
                  </Link>
                  <Link to="/services/seo-services" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    SEO Services
                  </Link>
                  <Link to="/services/digital-marketing" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    Digital Marketing
                  </Link>
                  <Link to="/services/analytics-reporting" className="block px-6 py-3 text-sm text-gray-700 hover:bg-primary/5 hover:text-primary transition-all duration-200">
                    Analytics & Reporting
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link to="/blog" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              Insights
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link to="/success-stories" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              Case Studies
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link to="/career" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              Careers
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-primary transition-all duration-300 hover:scale-105 font-medium relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Button asChild className="bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white">
              <Link to="/contact">
                Get Started
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-primary hover:scale-110 transition-all duration-300"
          >
            {isMenuOpen ? 
              <X className="h-6 w-6" /> : 
              <Menu className="h-6 w-6" />
            }
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white/95 backdrop-blur-md animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium">
                Home
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium">
                Services
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium">
                About
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium">
                Insights
              </Link>
              <Link to="/success-stories" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium">
                Case Studies
              </Link>
              <Link to="/career" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium">
                Careers
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-primary transition-all duration-300 font-medium">
                Contact
              </Link>
              <Button asChild className="bg-primary hover:bg-primary/90 w-fit hover:scale-105 transition-all duration-300 text-white">
                <Link to="/contact">
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
