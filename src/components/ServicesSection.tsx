
import React from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, ShoppingCart, TrendingUp, Camera, Video, Globe, Rocket, Users, Shield, Monitor, Search, Megaphone, Code, BarChart3, Smartphone } from "lucide-react";
import Mascot from './Mascot';

const ServicesSection = () => {
  const services = [
    // Ecommerce Services
    {
      icon: ShoppingCart,
      title: "Ecommerce Marketing",
      category: "Ecommerce",
      description: "Complete digital marketing strategies tailored for ecommerce success",
      features: ["PPC Campaigns", "Social Media Marketing", "Email Marketing", "SEO Optimization"]
    },
    {
      icon: TrendingUp,
      title: "Ecommerce Sales Growth",
      category: "Ecommerce", 
      description: "Data-driven strategies to boost your online sales and conversion rates",
      features: ["Conversion Optimization", "Sales Funnel Design", "A/B Testing", "Performance Analytics"]
    },
    {
      icon: Camera,
      title: "Brand Product Shoot",
      category: "Ecommerce",
      description: "Professional product photography that drives conversions",
      features: ["Studio Photography", "Lifestyle Shots", "360° Product Views", "Image Editing"]
    },
    {
      icon: Video,
      title: "Product Video Production",
      category: "Ecommerce",
      description: "Engaging video content that showcases your products effectively",
      features: ["Product Demos", "Unboxing Videos", "Brand Stories", "Social Media Videos"]
    },
    {
      icon: Globe,
      title: "Marketplace Management",
      category: "Ecommerce",
      description: "Expert management across all major ecommerce platforms",
      features: ["Amazon India", "Flipkart", "Myntra", "Blinkit", "Zepto", "Noon.com", "Walmart"]
    },
    {
      icon: Rocket,
      title: "Brand Growth & Launch",
      category: "Ecommerce",
      description: "End-to-end brand building and product launch strategies",
      features: ["Brand Strategy", "Product Launch", "Market Research", "Competitive Analysis"]
    },
    {
      icon: Users,
      title: "Influencer Management",
      category: "Ecommerce",
      description: "Strategic influencer partnerships that amplify your brand reach",
      features: ["Influencer Sourcing", "Campaign Management", "Content Strategy", "Performance Tracking"]
    },
    {
      icon: Shield,
      title: "Brand Partnerships",
      category: "Ecommerce",
      description: "Strategic collaborations that expand your market presence",
      features: ["Partnership Strategy", "Deal Negotiation", "Co-marketing", "Joint Ventures"]
    },
    // Digital Services
    {
      icon: Monitor,
      title: "Website Development",
      category: "Digital",
      description: "Custom websites that convert visitors into customers",
      features: ["Responsive Design", "E-commerce Sites", "Landing Pages", "Web Applications"]
    },
    {
      icon: Search,
      title: "SEO Services",
      category: "Digital",
      description: "Dominate search results and drive organic traffic",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"]
    },
    {
      icon: Megaphone,
      title: "Digital Marketing",
      category: "Digital",
      description: "Comprehensive digital marketing campaigns across all channels",
      features: ["Google Ads", "Facebook Ads", "Content Marketing", "Social Media Management"]
    },
    {
      icon: Code,
      title: "Web Applications",
      category: "Digital",
      description: "Custom web applications tailored to your business needs",
      features: ["SaaS Solutions", "CRM Systems", "Booking Platforms", "Management Tools"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      category: "Digital",
      description: "Data-driven insights to optimize your digital presence",
      features: ["Google Analytics", "Performance Reports", "ROI Tracking", "Custom Dashboards"]
    },
    {
      icon: Smartphone,
      title: "Mobile Optimization",
      category: "Digital",
      description: "Ensure your digital presence works perfectly on all devices",
      features: ["Mobile-First Design", "App Development", "Progressive Web Apps", "Mobile SEO"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Mascot size="md" />
          </div>
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Our Services</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ecommerce marketing to website development, we handle every aspect of your digital success
          </p>
        </div>

        {/* Service Categories */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-2xl">
              <ShoppingCart className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Ecommerce Services</h3>
              <p className="text-blue-100">Complete ecommerce growth solutions</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-2xl">
              <Monitor className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Digital Services</h3>
              <p className="text-green-100">Web development & digital marketing</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white hover:-translate-y-2 group">
              <div className="flex items-center mb-4">
                <div className={`p-3 rounded-xl text-white group-hover:scale-110 transition-transform ${
                  service.category === 'Ecommerce' 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600' 
                    : 'bg-gradient-to-br from-green-500 to-teal-600'
                }`}>
                  <service.icon className="h-6 w-6" />
                </div>
                <Badge variant="outline" className="ml-auto text-xs">
                  {service.category}
                </Badge>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-sm text-gray-700">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
