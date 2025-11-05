
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
import { Menu, X, ChevronDown, Sparkles, ArrowRight, Star, Users, Award } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { 
      name: "E-commerce Marketing", 
      href: "/services/ecommerce-marketing",
      description: "Drive sales and ROI with strategic e-commerce campaigns",
      icon: "🛒"
    },
    { 
      name: "Marketplace Management", 
      href: "/services/marketplace-management",
      description: "Dominate Amazon, Flipkart, and other major platforms",
      icon: "🏪"
    },
    { 
      name: "SEO Services", 
      href: "/services/seo-services",
      description: "Rank higher and attract organic traffic",
      icon: "🔍"
    },
    { 
      name: "Digital Marketing", 
      href: "/services/digital-marketing",
      description: "360° digital strategies for maximum impact",
      icon: "📱"
    },
    { 
      name: "Product Photography", 
      href: "/services/product-photography",
      description: "Professional visuals that convert browsers to buyers",
      icon: "📸"
    },
    { 
      name: "Video Production", 
      href: "/services/video-production",
      description: "Engaging videos that tell your brand story",
      icon: "🎥"
    },
    { 
      name: "Website Development", 
      href: "/services/website-development",
      description: "High-converting websites built for growth",
      icon: "💻"
    },
    { 
      name: "Mobile App Development", 
      href: "/services/mobile-app-development",
      description: "User-friendly apps that drive engagement",
      icon: "📲"
    },
    { 
      name: "Brand Development", 
      href: "/services/brand-development",
      description: "Build a brand that customers love and trust",
      icon: "⭐"
    },
    { 
      name: "Analytics & Reporting", 
      href: "/services/analytics-reporting",
      description: "Data-driven insights for smarter decisions",
      icon: "📊"
    },
    { 
      name: "Product Launch", 
      href: "/services/product-launch",
      description: "Strategic launches that create market buzz",
      icon: "🚀"
    },
    { 
      name: "Advertising", 
      href: "/services/advertising",
      description: "High-performance ads that maximize ROI",
      icon: "📈"
    },
  ];

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-background/95 to-background/98 backdrop-blur-xl z-50 border-b border-border/50 shadow-lg">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 text-2xl font-bold text-primary hover:text-primary/90 transition-all duration-300 group">
            <div className="relative">
              <Sparkles className="h-8 w-8 transition-transform group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">ICONA</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <Link 
                    to="/" 
                    className="relative px-4 py-2 font-medium text-foreground/80 hover:text-primary transition-all duration-300 group"
                  >
                    <span className="relative z-10">Home</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/about" 
                    className="relative px-4 py-2 font-medium text-foreground/80 hover:text-primary transition-all duration-300 group"
                  >
                    <span className="relative z-10">About</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="relative px-4 py-2 font-medium text-foreground/80 hover:text-primary data-[state=open]:text-primary transition-all duration-300 bg-transparent hover:bg-primary/10 data-[state=open]:bg-primary/10 rounded-lg">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[800px] p-6 bg-background/95 backdrop-blur-xl border border-border/50 rounded-xl shadow-2xl">
                      <div className="mb-6">
                        <h3 className="text-lg font-bold text-foreground mb-2 flex items-center gap-2">
                          <Star className="h-5 w-5 text-primary" />
                          Our Professional Services
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive solutions to elevate your business across all digital channels
                        </p>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {services.map((service) => (
                          <NavigationMenuLink key={service.name} asChild>
                            <Link
                              to={service.href}
                              className="group block select-none rounded-xl p-4 leading-none no-underline outline-none transition-all duration-300 hover:bg-primary/5 hover:shadow-lg border border-transparent hover:border-primary/20"
                            >
                              <div className="flex items-start space-x-3">
                                <span className="text-2xl">{service.icon}</span>
                                <div className="flex-1">
                                  <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                                    {service.name}
                                  </div>
                                  <p className="text-xs text-muted-foreground leading-relaxed">
                                    {service.description}
                                  </p>
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-border/50">
                        <Link 
                          to="/services" 
                          className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group"
                        >
                          View All Services 
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/success-stories" 
                    className="relative px-4 py-2 font-medium text-foreground/80 hover:text-primary transition-all duration-300 group"
                  >
                    <span className="relative z-10">Success Stories</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/blog" 
                    className="relative px-4 py-2 font-medium text-foreground/80 hover:text-primary transition-all duration-300 group"
                  >
                    <span className="relative z-10">Blog</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/career" 
                    className="relative px-4 py-2 font-medium text-foreground/80 hover:text-primary transition-all duration-300 group"
                  >
                    <span className="relative z-10">Careers</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link 
                    to="/contact" 
                    className="relative px-4 py-2 font-medium text-foreground/80 hover:text-primary transition-all duration-300 group"
                  >
                    <span className="relative z-10">Contact</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <div className="flex items-center space-x-4 ml-8">
              <Link to="/contact">
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2 font-semibold rounded-xl group">
                  <span className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
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
          <div className="lg:hidden mt-6 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl p-6 shadow-2xl animate-in slide-in-from-top-2 duration-300">
            <div className="space-y-1">
              <Link
                to="/"
                className="flex items-center py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Home</span>
              </Link>
              <Link
                to="/about"
                className="flex items-center py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">About</span>
              </Link>
              
              <div className="py-2">
                <div className="flex items-center py-3 px-4 text-foreground font-medium">
                  <Star className="h-4 w-4 mr-2 text-primary" />
                  Services
                </div>
                <div className="ml-6 space-y-1">
                  {services.slice(0, 6).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center py-2 px-4 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="mr-2">{service.icon}</span>
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="flex items-center py-2 px-4 text-sm text-primary font-medium hover:bg-primary/5 rounded-lg transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ArrowRight className="h-4 w-4 mr-2" />
                    View All Services
                  </Link>
                </div>
              </div>

              <Link
                to="/success-stories"
                className="flex items-center py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Award className="h-4 w-4 mr-3 text-primary/60" />
                <span className="font-medium">Success Stories</span>
              </Link>
              <Link
                to="/blog"
                className="flex items-center py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Blog</span>
              </Link>
              <Link
                to="/career"
                className="flex items-center py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="h-4 w-4 mr-3 text-primary/60" />
                <span className="font-medium">Careers</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center py-3 px-4 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="font-medium">Contact</span>
              </Link>
            </div>

            <div className="mt-6 pt-6 border-t border-border/50">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 py-3 font-semibold rounded-xl">
                  <span className="flex items-center justify-center gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </span>
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
