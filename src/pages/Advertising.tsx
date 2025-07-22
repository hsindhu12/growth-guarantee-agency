
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Megaphone, Zap, Users, Award, Target, Star } from "lucide-react";

const Advertising = () => {
  const adServices = [
    {
      icon: Target,
      title: "Google Ads Mastery",
      description: "Dominate search results with ICONA's precision targeting",
      features: ["Search Campaigns", "Display Advertising", "Shopping Ads", "Video Campaigns"]
    },
    {
      icon: Users,
      title: "Social Media Ads",
      description: "Convert social browsers into loyal customers",
      features: ["Facebook Ads", "Instagram Campaigns", "LinkedIn Targeting", "TikTok Advertising"]
    },
    {
      icon: Megaphone,
      title: "Retargeting Expert",
      description: "ICONA's signature retargeting that never misses",
      features: ["Website Retargeting", "Email Retargeting", "Cross-platform Tracking", "Conversion Optimization"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-orange-600 via-red-600 to-pink-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 border-yellow-400 text-lg px-6 py-2">
            📢 Advertising Excellence
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Digital Advertising
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              ICONA's Ad Domination 🚀
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-orange-100">
            ICONA's advertising expertise turns every click into profit. 
            <span className="text-yellow-300 font-semibold"> Zero waste, maximum ROI.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🚀 ICONA's Advertising Arsenal
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {adServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-700">
                          <Star className="h-4 w-4 text-orange-500 mr-3" />
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

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🎯 ICONA's Advertising Advantage
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Instant Campaign Setup</h3>
                    <p className="text-gray-600">Live campaigns within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-red-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Precision Targeting</h3>
                    <p className="text-gray-600">Reach exactly the right customers</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">ROI Guarantee</h3>
                    <p className="text-gray-600">Minimum 300% return or money back</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center" 
                alt="Digital Advertising" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🥷 Ready to Dominate Advertising?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let ICONA's advertising experts multiply your profits. Zero risk, guaranteed results.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
            🥷 Launch Ad Campaigns
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Advertising;
