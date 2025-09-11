import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingCart, TrendingUp, Camera, Video, Globe, Rocket, Users, Shield, Monitor, Search, Megaphone, Code, BarChart3, Smartphone, ArrowRight } from "lucide-react";
import { useSiteSetting } from "@/hooks/useSiteSettings";
import { useServicePages } from "@/hooks/useServicePages";
import { Link } from "react-router-dom";
import Mascot from './Mascot';

const getServiceIcon = (serviceType: string) => {
  const iconMap: Record<string, any> = {
    'ecommerce-marketing': ShoppingCart,
    'marketplace-management': Globe,
    'seo-services': Search,
    'digital-marketing': Megaphone,
    'product-photography': Camera,
    'video-production': Video,
    'website-development': Monitor,
    'mobile-app-development': Smartphone,
    'brand-development': Rocket,
    'analytics-reporting': BarChart3,
    'product-launch': Rocket,
    'advertising': TrendingUp
  };
  return iconMap[serviceType] || Monitor;
};

const getServiceCategory = (serviceType: string) => {
  const ecommerceServices = ['ecommerce-marketing', 'marketplace-management', 'product-photography', 'video-production', 'advertising', 'brand-development', 'product-launch'];
  return ecommerceServices.includes(serviceType) ? 'Ecommerce' : 'Digital';
};

const getServiceColor = (index: number) => {
  const colors = [
    "from-blue-500 to-purple-600",
    "from-green-500 to-teal-600", 
    "from-pink-500 to-rose-600",
    "from-orange-500 to-red-600",
    "from-indigo-500 to-blue-600",
    "from-cyan-500 to-blue-600",
    "from-violet-500 to-purple-600",
    "from-emerald-500 to-green-600",
    "from-slate-500 to-gray-600",
    "from-lime-500 to-green-600",
    "from-yellow-500 to-orange-600"
  ];
  return colors[index % colors.length];
};

const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const { data: servicesTitle } = useSiteSetting('services_section_title');
  const { data: servicesSubtitle } = useSiteSetting('services_section_subtitle');
  const { data: servicesBadge } = useSiteSetting('services_section_badge');
  const { data: servicePages } = useServicePages();

  // Transform service pages to match component format
  const services = servicePages?.data?.map((page, index) => ({
    icon: getServiceIcon(page.service_type),
    title: page.title,
    category: getServiceCategory(page.service_type),
    description: page.subtitle || page.hero_content?.description || '',
    features: page.features?.map(f => f.title || f.description) || [],
    color: getServiceColor(index),
    href: `/services/${page.service_type}`
  })) || [];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  if (!servicePages?.data || servicePages.data.length === 0) {
    return (
      <section className="py-16 bg-gradient-to-br from-background via-background/50 to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">Loading services...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-background/50 to-primary/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Badge variant="outline" className="text-sm px-4 py-2 bg-primary/10 text-primary border-primary/20">
              {servicesBadge?.value || '🚀 Premium Services'}
            </Badge>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            {servicesTitle?.value || (
              <>
                Our Professional <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">Services</span>
              </>
            )}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {servicesSubtitle?.value || 'Comprehensive digital solutions designed to accelerate your business growth across all platforms and channels'}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-background/80 backdrop-blur-xl p-2 rounded-2xl border border-border/50 shadow-lg">
            <div className="flex space-x-2">
              {['all', 'Ecommerce', 'Digital'].map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'text-muted-foreground hover:text-foreground hover:bg-primary/5'
                  }`}
                >
                  {category === 'all' ? 'All Services' : `${category} Services`}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group relative overflow-hidden bg-background/80 backdrop-blur-xl border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="p-8 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  
                  <Badge variant="outline" className="mb-4 text-xs bg-background/50">
                    {service.category}
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to={service.href}>
                    <Button className="w-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 rounded-3xl p-12 border border-border/50 backdrop-blur-xl">
            <Mascot className="w-20 h-20 mx-auto mb-6" />
            
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Transform Your Business?
            </h3>
            
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can accelerate your growth and help you achieve your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-4 font-semibold rounded-xl group">
                  <span className="flex items-center gap-2">
                    Get Started Today
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
              
              <Link to="/services">
                <Button variant="outline" size="lg" className="border-border/50 hover:border-primary/50 bg-background/50 hover:bg-background/80 px-8 py-4 font-semibold rounded-xl group">
                  <span className="flex items-center gap-2">
                    View All Services
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;