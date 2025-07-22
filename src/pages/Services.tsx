
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, ShoppingCart, Camera, Video, Globe, Search, Smartphone, TrendingUp } from "lucide-react";

const Services = () => {
  const ecommerceServices = [
    {
      icon: Target,
      title: "🎯 Precision Retargeting",
      description: "ICONA's signature technique - laser-focused retargeting that converts browsers into buyers with surgical precision.",
      features: ["Facebook & Instagram Retargeting", "Google Ads Retargeting", "Email Retargeting Sequences", "Cross-platform Tracking"]
    },
    {
      icon: ShoppingCart,
      title: "🏪 Marketplace Domination",
      description: "Master all major marketplaces with ICONA's proven strategies for Amazon, Flipkart, Myntra, and more.",
      features: ["Amazon Optimization", "Flipkart Growth", "Myntra Brand Building", "Multi-platform Management"]
    },
    {
      icon: Camera,
      title: "📸 Professional Photography",
      description: "Product photography that makes customers stop scrolling and start buying - captured with professional precision.",
      features: ["Product Photography", "Lifestyle Shoots", "360° Product Views", "A+ Content Creation"]
    },
    {
      icon: Video,
      title: "🎬 Video Production Magic",
      description: "Engaging video content that tells your brand story and drives conversions across all platforms.",
      features: ["Product Videos", "Brand Storytelling", "Social Media Content", "Ad Creative Production"]
    }
  ];

  const digitalServices = [
    {
      icon: Globe,
      title: "🌐 Website Excellence",
      description: "Lightning-fast, conversion-optimized websites that turn visitors into customers with ICONA's digital mastery.",
      features: ["E-commerce Websites", "Landing Pages", "Mobile Optimization", "Speed Optimization"]
    },
    {
      icon: Search,
      title: "🔍 SEO Excellence",
      description: "Advanced SEO strategies that dominate search results - ICONA's SEO techniques deliver proven results.",
      features: ["Keyword Domination", "Technical SEO", "Content Strategy", "Local SEO"]
    },
    {
      icon: Smartphone,
      title: "📱 Social Media Mastery",
      description: "Build engaged communities and drive sales through strategic social media presence across all platforms.",
      features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Social Commerce"]
    },
    {
      icon: TrendingUp,
      title: "📈 Growth Strategy",
      description: "Strategic growth techniques that deliver explosive results faster than traditional marketing.",
      features: ["Viral Marketing", "Growth Analytics", "Conversion Optimization", "Customer Acquisition"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-400 text-lg px-6 py-2">
            🚀 ICONA's Professional Services Arsenal
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            ICONA's Complete
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Growth Mastery Suite 🚀
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            From precision retargeting to marketplace domination, ICONA's expert skills cover every aspect of digital growth. 
            <span className="text-yellow-300 font-semibold"> Zero upfront fees, 100% guaranteed results.</span>
          </p>
        </div>
      </section>

      {/* Ecommerce Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              🛒 Ecommerce Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ICONA's specialized ecommerce techniques that transform online stores into profit-generating machines
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {ecommerceServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-blue-50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              💻 Digital Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions that establish your brand's dominance across all online channels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {digitalServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-green-50">
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-500 rounded-full mr-3"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🚀 Ready to Unleash ICONA's Power?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join 500+ brands that trust ICONA's expert techniques for guaranteed growth. Zero risk, maximum results.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
            🚀 Get ICONA's Growth Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
