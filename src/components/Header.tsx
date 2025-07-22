
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
    <header className="fixed top-0 w-full bg-gradient-to-r from-background/95 via-background/98 to-background/95 backdrop-blur-xl z-50 border-b border-border/50 shadow-lg">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group flex items-center space-x-3 text-2xl font-bold text-primary hover:text-primary/90 transition-all duration-300">
            <div className="relative">
              <Sparkles className="h-9 w-9 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 h-9 w-9 bg-primary/20 rounded-full blur-lg group-hover:bg-primary/30 transition-all duration-300"></div>
            </div>
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">ICONA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link to="/" className="group relative px-4 py-2 text-foreground/80 hover:text-primary font-medium transition-all duration-300">
                    <span className="relative z-10">Home</span>
                    <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about" className="group relative px-4 py-2 text-foreground/80 hover:text-primary font-medium transition-all duration-300">
                    <span className="relative z-10">About</span>
                    <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="group relative px-4 py-2 text-foreground/80 hover:text-primary font-medium transition-all duration-300 bg-transparent hover:bg-primary/10">
                    <span className="relative z-10">Services</span>
                    <ChevronDown className="relative z-10 ml-1 h-4 w-4 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl">
                    <div className="grid w-[650px] grid-cols-2 gap-1 p-6">
                      {services.map((service, index) => (
                        <NavigationMenuLink key={service.name} asChild>
                          <Link
                            to={service.href}
                            className="group block select-none space-y-2 rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-primary/10 hover:shadow-md border border-transparent hover:border-primary/20"
                          >
                            <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {service.name}
                            </div>
                            <div className="text-xs text-muted-foreground group-hover:text-foreground/70 transition-colors duration-300 leading-relaxed">
                              {index % 3 === 0 ? "Boost your online presence" : 
                               index % 3 === 1 ? "Drive growth and engagement" : 
                               "Maximize your digital impact"}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                    <div className="border-t border-border/30 p-4 bg-gradient-to-r from-primary/5 to-primary/10">
                      <Link to="/services" className="flex items-center justify-center text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                        View All Services →
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/success-stories" className="group relative px-4 py-2 text-foreground/80 hover:text-primary font-medium transition-all duration-300">
                    <span className="relative z-10">Success Stories</span>
                    <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/blog" className="group relative px-4 py-2 text-foreground/80 hover:text-primary font-medium transition-all duration-300">
                    <span className="relative z-10">Blog</span>
                    <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/career" className="group relative px-4 py-2 text-foreground/80 hover:text-primary font-medium transition-all duration-300">
                    <span className="relative z-10">Careers</span>
                    <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/contact" className="group relative px-4 py-2 text-foreground/80 hover:text-primary font-medium transition-all duration-300">
                    <span className="relative z-10">Contact</span>
                    <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/10 transition-all duration-300"></div>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-6">
              <Link to="/contact" className="group">
                <Button className="relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground px-6 py-2.5 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <span className="relative z-10 font-semibold">Get Started</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
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
          <div className="lg:hidden mt-6 space-y-1 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-2xl">
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
