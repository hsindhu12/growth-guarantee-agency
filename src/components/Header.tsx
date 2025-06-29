
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
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
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=40&h=40&fit=crop&crop=center" 
                alt="Blink – The Retargeting Ninja" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-500 rounded-full animate-ping"></div>
            </div>
            <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
              Blink Growth Pro
            </div>
            <Sparkles className="h-4 w-4 text-yellow-500 animate-pulse" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium relative group">
              🏠 Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleServices}
                className="flex items-center text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium group"
              >
                🥷 Blink's Services 
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 py-4 z-10 animate-fade-in">
                  <div className="px-6 py-3 text-sm font-bold text-gray-900 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                    🛒 Ecommerce Ninja Skills
                  </div>
                  <Link to="/services#ecommerce-marketing" className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-2">
                    🎯 Precision Retargeting
                  </Link>
                  <Link to="/services#marketplace-management" className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-2">
                    🏪 Marketplace Domination
                  </Link>
                  <Link to="/services#product-photography" className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-2">
                    📸 Product Photography
                  </Link>
                  <Link to="/services#video-production" className="block px-6 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:translate-x-2">
                    🎬 Video Production
                  </Link>
                  
                  <div className="px-6 py-3 text-sm font-bold text-gray-900 border-b border-t border-gray-100 mt-2 bg-gradient-to-r from-green-50 to-teal-50">
                    💻 Digital Ninja Powers
                  </div>
                  <Link to="/services#web-development" className="block px-6 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 hover:translate-x-2">
                    🌐 Website Development
                  </Link>
                  <Link to="/services#seo-services" className="block px-6 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 hover:translate-x-2">
                    🔍 SEO Mastery
                  </Link>
                  <Link to="/services#digital-marketing" className="block px-6 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-all duration-200 hover:translate-x-2">
                    📱 Digital Marketing
                  </Link>
                </div>
              )}
            </div>
            
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium relative group">
              ℹ️ About Blink
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium relative group">
              📝 Growth Insights
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link to="/success-stories" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium relative group">
              🏆 Success Stories
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 font-medium relative group">
              📞 Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white">
              <Link to="/contact">
                🥷 Get Blink's Audit
              </Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 hover:scale-110 transition-all duration-300"
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
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 font-medium">
                🏠 Home
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 font-medium">
                🥷 Blink's Services
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 font-medium">
                ℹ️ About Blink
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 font-medium">
                📝 Growth Insights
              </Link>
              <Link to="/success-stories" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 font-medium">
                🏆 Success Stories
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-all duration-300 hover:translate-x-2 font-medium">
                📞 Contact
              </Link>
              <Button asChild className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 w-fit hover:scale-105 transition-all duration-300 text-white">
                <Link to="/contact">
                  🥷 Get Blink's Audit
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
