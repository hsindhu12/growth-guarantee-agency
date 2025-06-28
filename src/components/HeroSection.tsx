
import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingCart, TrendingUp } from "lucide-react";
import Mascot from './Mascot';

const HeroSection = () => {
  const stats = [
    { number: "500+", label: "Brands Grown" },
    { number: "100%", label: "Growth Guarantee" },
    { number: "₹50Cr+", label: "Revenue Generated" },
    { number: "0₹", label: "Upfront Fees" }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden pt-16">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Mascot in Hero */}
        <div className="flex justify-center mb-6">
          <Mascot size="xl" className="animate-bounce" />
        </div>
        
        <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-400 hover:bg-green-500/30 text-lg px-6 py-2">
          100% Growth Guarantee or Work for FREE
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Complete Digital
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Growth Agency
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
          From ecommerce marketing to website development, we guarantee your brand's growth across all digital channels. 
          <span className="font-semibold text-yellow-300"> Zero upfront fees, maximum results.</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all">
            Get Free Growth Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full">
            View Our Success Stories
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2">{stat.number}</div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <ShoppingCart className="h-12 w-12 text-white animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <TrendingUp className="h-16 w-16 text-white animate-pulse" />
      </div>
    </section>
  );
};

export default HeroSection;
