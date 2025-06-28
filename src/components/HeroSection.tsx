import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShoppingCart, TrendingUp, Sparkles, Zap } from "lucide-react";
import Mascot from './Mascot';

const HeroSection = () => {
  const stats = [
    { number: "500+", label: "Brands Grown", icon: Sparkles },
    { number: "100%", label: "Growth Guarantee", icon: Zap },
    { number: "₹50Cr+", label: "Revenue Generated", icon: TrendingUp },
    { number: "0₹", label: "Upfront Fees", icon: ShoppingCart }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden pt-16">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        {/* Mascot in Hero with enhanced animation */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Mascot size="xl" type="excited" className="animate-bounce hover:animate-pulse transition-all duration-300" />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-400 hover:bg-green-500/30 text-lg px-6 py-2 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110">
          ✨ 100% Growth Guarantee or Work for FREE ✨
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="inline-block animate-fade-in">Complete</span>{" "}
          <span className="inline-block animate-fade-in delay-200">Digital</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-gradient-x">
            Growth Agency
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 animate-fade-in delay-300">
          From ecommerce marketing to website development, we guarantee your brand's growth across all digital channels. 
          <span className="font-semibold text-yellow-300 inline-block hover:scale-105 transition-transform duration-200"> 
            ⚡ Zero upfront fees, maximum results.
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              🚀 Get Free Growth Audit
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-full hover:scale-105 transition-all duration-300 hover:shadow-xl">
            📊 View Our Success Stories
          </Button>
        </div>
        
        {/* Enhanced Stats with icons and animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <IconComponent className="h-8 w-8 mx-auto mb-2 text-yellow-300 group-hover:animate-spin" />
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute top-20 left-10 opacity-30 animate-float">
        <ShoppingCart className="h-12 w-12 text-white animate-pulse" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 animate-float delay-1000">
        <TrendingUp className="h-16 w-16 text-white animate-pulse" />
      </div>
      <div className="absolute top-40 right-20 opacity-20 animate-float delay-500">
        <Sparkles className="h-10 w-10 text-yellow-300 animate-spin" />
      </div>
    </section>
  );
};

export default HeroSection;
