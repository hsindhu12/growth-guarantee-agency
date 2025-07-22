import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, ShoppingCart, TrendingUp, Camera, Video, Globe, Rocket, Users, Shield, Monitor, Search, Megaphone, Code, BarChart3, Smartphone, ArrowRight } from "lucide-react";
import Mascot from './Mascot';
const ServicesSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const services = [
  // Ecommerce Services
  {
    icon: ShoppingCart,
    title: "Ecommerce Marketing",
    category: "Ecommerce",
    description: "Complete digital marketing strategies tailored for ecommerce success",
    features: ["PPC Campaigns", "Social Media Marketing", "Email Marketing", "SEO Optimization"],
    color: "from-blue-500 to-purple-600"
  }, {
    icon: TrendingUp,
    title: "Ecommerce Sales Growth",
    category: "Ecommerce",
    description: "Data-driven strategies to boost your online sales and conversion rates",
    features: ["Conversion Optimization", "Sales Funnel Design", "A/B Testing", "Performance Analytics"],
    color: "from-green-500 to-teal-600"
  }, {
    icon: Camera,
    title: "Brand Product Shoot",
    category: "Ecommerce",
    description: "Professional product photography that drives conversions",
    features: ["Studio Photography", "Lifestyle Shots", "360° Product Views", "Image Editing"],
    color: "from-pink-500 to-rose-600"
  }, {
    icon: Video,
    title: "Product Video Production",
    category: "Ecommerce",
    description: "Engaging video content that showcases your products effectively",
    features: ["Product Demos", "Unboxing Videos", "Brand Stories", "Social Media Videos"],
    color: "from-orange-500 to-red-600"
  }, {
    icon: Globe,
    title: "Marketplace Management",
    category: "Ecommerce",
    description: "Expert management across all major ecommerce platforms",
    features: ["Amazon India", "Flipkart", "Myntra", "Swiggy Instamart", "Zepto", "Noon.com", "Walmart"],
    color: "from-indigo-500 to-blue-600"
  }, {
    icon: Rocket,
    title: "Brand Growth & Launch",
    category: "Ecommerce",
    description: "End-to-end brand building and product launch strategies",
    features: ["Brand Strategy", "Product Launch", "Market Research", "Competitive Analysis"],
    color: "from-cyan-500 to-blue-600"
  }, {
    icon: Users,
    title: "Influencer Management",
    category: "Ecommerce",
    description: "Strategic influencer partnerships that amplify your brand reach",
    features: ["Influencer Sourcing", "Campaign Management", "Content Strategy", "Performance Tracking"],
    color: "from-violet-500 to-purple-600"
  }, {
    icon: Shield,
    title: "Brand Partnerships",
    category: "Ecommerce",
    description: "Strategic collaborations that expand your market presence",
    features: ["Partnership Strategy", "Deal Negotiation", "Co-marketing", "Joint Ventures"],
    color: "from-emerald-500 to-green-600"
  },
  // Digital Services
  {
    icon: Monitor,
    title: "Website Development",
    category: "Digital",
    description: "Custom websites that convert visitors into customers",
    features: ["Responsive Design", "E-commerce Sites", "Landing Pages", "Web Applications"],
    color: "from-slate-500 to-gray-600"
  }, {
    icon: Search,
    title: "SEO Services",
    category: "Digital",
    description: "Dominate search results and drive organic traffic",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"],
    color: "from-lime-500 to-green-600"
  }, {
    icon: Megaphone,
    title: "Digital Marketing",
    category: "Digital",
    description: "Comprehensive digital marketing campaigns across all channels",
    features: ["Google Ads", "Facebook Ads", "Content Marketing", "Social Media Management"],
    color: "from-yellow-500 to-orange-600"
  }, {
    icon: Code,
    title: "Web Applications",
    category: "Digital",
    description: "Custom web applications tailored to your business needs",
    features: ["SaaS Solutions", "CRM Systems", "Booking Platforms", "Management Tools"],
    color: "from-teal-500 to-cyan-600"
  }, {
    icon: BarChart3,
    title: "Analytics & Reporting",
    category: "Digital",
    description: "Data-driven insights to optimize your digital presence",
    features: ["Google Analytics", "Performance Reports", "ROI Tracking", "Custom Dashboards"],
    color: "from-red-500 to-pink-600"
  }, {
    icon: Smartphone,
    title: "Mobile Optimization",
    category: "Digital",
    description: "Ensure your digital presence works perfectly on all devices",
    features: ["Mobile-First Design", "App Development", "Progressive Web Apps", "Mobile SEO"],
    color: "from-purple-500 to-violet-600"
  }];
  const filteredServices = activeCategory === 'all' ? services : services.filter(service => service.category === activeCategory);
  return <section id="services" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decoration */}
      
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200 hover:scale-105 transition-all duration-300">
            🎯 Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Complete Digital Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ecommerce marketing to website development, we handle every aspect of your digital success 🚀
          </p>
        </div>

        {/* Service Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-lg border flex flex-wrap gap-2">
            {['all', 'Ecommerce', 'Digital'].map(category => <Button key={category} onClick={() => setActiveCategory(category)} variant={activeCategory === category ? "default" : "ghost"} className={`rounded-xl transition-all duration-300 ${activeCategory === category ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105' : 'hover:bg-gray-100 hover:scale-105'}`}>
                {category === 'all' ? '🌟 All Services' : category === 'Ecommerce' ? '🛒 Ecommerce' : '💻 Digital'}
              </Button>)}
          </div>
        </div>

        {/* Service Categories Overview */}
        <div className="mb-12">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="text-center p-8 bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <ShoppingCart className="h-16 w-16 mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="text-3xl font-bold mb-4">Ecommerce Services</h3>
                <p className="text-blue-100 text-lg mb-4">Complete ecommerce growth solutions</p>
                <Button variant="outline" className="border-white text-white hover:text-blue-600 bg-white-300 hover:bg-blue-200 text-base">
                  Explore Ecommerce <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-3xl hover:scale-105 transition-all duration-300 shadow-xl group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <Monitor className="h-16 w-16 mx-auto mb-4 group-hover:animate-bounce" />
                <h3 className="text-3xl font-bold mb-4">Digital Services</h3>
                <p className="text-green-100 text-lg mb-4">Web development & digital marketing</p>
                <Button variant="outline" className="border-white text-white hover:text-green-600 bg-green-100">
                  Explore Digital <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredServices.map((service, index) => <Card key={index} className="p-6 hover:shadow-2xl transition-all duration-500 border-0 bg-white hover:-translate-y-4 group relative overflow-hidden rounded-2xl">
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <div className={`p-4 rounded-2xl text-white group-hover:scale-110 transition-all duration-300 bg-gradient-to-br ${service.color} shadow-lg`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <Badge variant="outline" className="ml-auto text-xs hover:scale-105 transition-transform duration-200">
                    {service.category === 'Ecommerce' ? '🛒' : '💻'} {service.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => <li key={fIndex} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-200">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                      <span className="hover:font-medium transition-all duration-200">{feature}</span>
                    </li>)}
                </ul>
                
                {/* Hidden button that appears on hover */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <Button size="sm" className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300`}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default ServicesSection;