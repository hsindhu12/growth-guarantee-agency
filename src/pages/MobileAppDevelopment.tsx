
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Smartphone, Zap, Users, Award, Globe, Star } from "lucide-react";

const MobileAppDevelopment = () => {
  const appTypes = [
    {
      icon: Smartphone,
      title: "E-commerce Apps",
      description: "Mobile stores that convert visitors into customers",
      features: ["Product Catalogs", "Secure Payments", "Push Notifications", "Customer Reviews"]
    },
    {
      icon: Globe,
      title: "Business Apps",
      description: "Custom mobile solutions for your business needs",
      features: ["CRM Integration", "Analytics Dashboard", "Team Collaboration", "Cloud Sync"]
    },
    {
      icon: Users,
      title: "Social Apps",
      description: "Community-driven mobile experiences",
      features: ["User Profiles", "Social Features", "Real-time Chat", "Content Sharing"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-400 text-lg px-6 py-2">
            📱 Mobile Mastery
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Mobile App Development
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              ICONA's Mobile Magic 🚀
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            ICONA crafts mobile apps that users love and businesses profit from. 
            <span className="text-yellow-300 font-semibold"> Native performance, lightning speed.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🚀 ICONA's App Arsenal
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {appTypes.map((app, index) => {
              const IconComponent = app.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{app.title}</CardTitle>
                    <p className="text-gray-600">{app.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {app.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-700">
                          <Star className="h-4 w-4 text-yellow-500 mr-3" />
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
                🚀 Why Choose ICONA's Apps?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Lightning Fast Development</h3>
                    <p className="text-gray-600">From concept to app store in record time</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">User-Centric Design</h3>
                    <p className="text-gray-600">Apps that users actually want to use</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Guaranteed Success</h3>
                    <p className="text-gray-600">100% satisfaction or we work for free</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center" 
                alt="Mobile App Development" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🥷 Ready for Mobile Domination?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let ICONA create the mobile app that transforms your business. Zero upfront costs, guaranteed results.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
            🥷 Start Your App Journey
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MobileAppDevelopment;
