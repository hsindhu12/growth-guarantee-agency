
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Zap, Smartphone, Shield } from "lucide-react";

const WebsiteDevelopment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-slate-600 via-gray-600 to-zinc-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-400 text-lg px-6 py-2">
            🌐 Website Ninja Craft
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Website Development
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500">
              Lightning Fast & Converting 🌐
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-slate-100">
            Blink crafts websites with ninja precision - lightning-fast, conversion-optimized, and 
            <span className="text-cyan-300 font-semibold"> guaranteed to turn visitors into customers.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center" 
                alt="Website Development" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🥷 Websites That Convert
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Every website Blink creates is a conversion machine. Built for speed, optimized for sales, 
                and designed to dominate search results while delivering exceptional user experience.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Globe className="h-6 w-6 text-blue-500 mr-3" />
                  <span>Lightning-Fast Loading Speed</span>
                </div>
                <div className="flex items-center">
                  <Smartphone className="h-6 w-6 text-green-500 mr-3" />
                  <span>Mobile-First Responsive Design</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-yellow-500 mr-3" />
                  <span>Conversion-Optimized Layout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🌐 Blink's Web Development Arsenal
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>E-commerce Sites</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Complete online stores that maximize conversions</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Landing Pages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">High-converting pages for campaigns and products</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Smartphone className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Mobile Apps</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Progressive web apps for mobile-first experience</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Speed Optimization</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Lightning-fast loading for better conversions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🌐 Ready for a Converting Website?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let Blink build you a website that converts visitors into customers. Fast, beautiful, and profitable.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
            🌐 Build My Converting Website
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebsiteDevelopment;
