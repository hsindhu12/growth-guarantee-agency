
import React from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { name: "E-commerce Marketing", href: "/services/ecommerce-marketing" },
    { name: "Marketplace Management", href: "/services/marketplace-management" },
    { name: "SEO Services", href: "/services/seo-services" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
    { name: "Product Photography", href: "/services/product-photography" },
    { name: "Video Production", href: "/services/video-production" },
    { name: "Website Development", href: "/services/website-development" },
    { name: "Mobile App Development", href: "/services/mobile-app-development" },
    { name: "Brand Development", href: "/services/brand-development" },
    { name: "Analytics & Reporting", href: "/services/analytics-reporting" },
    { name: "Product Launch", href: "/services/product-launch" },
    { name: "Advertising", href: "/services/advertising" },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-primary hover:text-primary/90 transition-colors">
            <Sparkles className="h-8 w-8" />
            <span>ICONA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/" className="text-gray-700 hover:text-primary transition-colors">
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about" className="text-gray-700 hover:text-primary transition-colors">
                    About
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[600px] grid-cols-2 gap-3 p-4">
                      {services.map((service) => (
                        <NavigationMenuLink key={service.name} asChild>
                          <Link
                            to={service.href}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {service.name}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/success-stories" className="text-gray-700 hover:text-primary transition-colors">
                    Success Stories
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blog" className="text-gray-700 hover:text-primary transition-colors">
                    Blog
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/career" className="text-gray-700 hover:text-primary transition-colors">
                    Careers
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="text-gray-700 hover:text-primary transition-colors">
                    Contact
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-4 bg-white border rounded-lg p-4 shadow-lg">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            
            <div className="py-2">
              <div className="flex items-center text-gray-700 mb-2">
                Services
                <ChevronDown className="h-4 w-4 ml-1" />
              </div>
              <div className="pl-4 space-y-2">
                {services.slice(0, 6).map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block py-1 text-sm text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
                <Link
                  to="/services"
                  className="block py-1 text-sm text-primary font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  View All Services →
                </Link>
              </div>
            </div>

            <Link
              to="/success-stories"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Success Stories
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/career"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>

            <div className="pt-4 border-t">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
