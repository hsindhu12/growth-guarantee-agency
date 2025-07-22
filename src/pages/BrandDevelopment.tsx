
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, Zap, Users, Star, Rocket, Target } from "lucide-react";

const BrandDevelopment = () => {
  const brandServices = [
    {
      icon: Award,
      title: "Brand Identity Creation",
      description: "Unforgettable brand identities that command attention",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Voice"]
    },
    {
      icon: Rocket,
      title: "Brand Growth Strategy",
      description: "Accelerate your brand's market presence",
      features: ["Market Positioning", "Competitive Analysis", "Growth Planning", "Brand Expansion"]
    },
    {
      icon: Users,
      title: "Brand Management",
      description: "Consistent brand experience across all touchpoints",
      features: ["Brand Monitoring", "Reputation Management", "Content Strategy", "Brand Guidelines"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 border-yellow-400 text-lg px-6 py-2">
            🏆 Brand Mastery
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Brand Development
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              ICONA's Brand Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-cyan-100">
            ICONA transforms businesses into unforgettable brands that customers love. 
            <span className="text-yellow-300 font-semibold"> From startup to market leader.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🚀 ICONA's Brand Building Arsenal
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {brandServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-700">
                          <Star className="h-4 w-4 text-emerald-500 mr-3" />
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
                🚀 Why ICONA for Brand Development?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Rapid Brand Evolution</h3>
                    <p className="text-gray-600">Transform your brand in weeks, not months</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-emerald-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Strategic Positioning</h3>
                    <p className="text-gray-600">Position your brand for maximum market impact</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-teal-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Proven Success</h3>
                    <p className="text-gray-600">500+ brands transformed into market leaders</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop&crop=center" 
                alt="Brand Development" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🚀 Ready to Build Your Brand Empire?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let ICONA transform your business into an unforgettable brand. Zero upfront investment, guaranteed impact.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
            🚀 Start Brand Transformation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BrandDevelopment;
