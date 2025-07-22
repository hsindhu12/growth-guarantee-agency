import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, TrendingUp, Users, Award, Building2 } from "lucide-react";
const HeroSection = () => {
  const stats = [{
    number: "500+",
    label: "Brands Grown",
    icon: Users
  }, {
    number: "99%",
    label: "Success Rate",
    icon: Award
  }, {
    number: "$50M+",
    label: "Revenue Generated",
    icon: TrendingUp
  }, {
    number: "10+",
    label: "Years Experience",
    icon: Building2
  }];
  return <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white overflow-hidden pt-16">
      {/* Professional background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        
        <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30 text-lg px-6 py-2 animate-pulse hover:animate-none transition-all duration-300 hover:scale-110">
          ✨ Professional Digital Growth Solutions ✨
        </Badge>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="inline-block animate-fade-in">Welcome to</span>{" "}
          <span className="inline-block animate-fade-in delay-200">ICONA</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 animate-gradient-x">
            Digital Excellence
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100 animate-fade-in delay-300">
          ICONA delivers comprehensive digital solutions that drive measurable growth for your business. From ecommerce optimization to cutting-edge digital marketing, 
          <span className="font-semibold text-yellow-300 inline-block hover:scale-105 transition-transform duration-200"> 
            we're your strategic partner for success.
          </span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-2xl transform hover:scale-105 transition-all group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              Start Your Growth Journey
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
          <Button variant="outline" size="lg" className="border-white px-8 py-4 text-lg hover:scale-105 transition-all duration-300 hover:shadow-xl text-slate-50 bg-[#ff8402] rounded-full">
            View Our Portfolio
          </Button>
        </div>
        
        {/* Professional Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return <div key={index} className="text-center group hover:scale-110 transition-all duration-300 cursor-pointer">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-4 group-hover:bg-white/20 transition-all duration-300">
                  <IconComponent className="h-8 w-8 mx-auto mb-2 text-yellow-300 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-blue-200 group-hover:text-white transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default HeroSection;