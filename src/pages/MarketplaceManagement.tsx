
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, TrendingUp, Star, Shield } from "lucide-react";

const MarketplaceManagement = () => {
  const marketplaces = [
    { name: "Amazon India", growth: "+300%", timespan: "6 months" },
    { name: "Flipkart", growth: "+250%", timespan: "4 months" },
    { name: "Myntra", growth: "+400%", timespan: "8 months" },
    { name: "Blinkit", growth: "+180%", timespan: "3 months" },
    { name: "Zepto", growth: "+220%", timespan: "5 months" },
    { name: "Noon.com", growth: "+350%", timespan: "7 months" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            🏪 Marketplace Excellence
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Marketplace Management
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Dominate Every Platform 🏪
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            ICONA dominates every major marketplace with strategic precision. From Amazon to emerging platforms, 
            <span className="text-yellow-300 font-semibold"> your brand will achieve market leadership.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🏪 Platforms ICONA Has Mastered
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {marketplaces.map((marketplace, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <Globe className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <CardTitle className="text-xl">{marketplace.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">{marketplace.growth}</div>
                  <div className="text-gray-600">Growth in {marketplace.timespan}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🏪 ICONA's Marketplace Expertise
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <TrendingUp className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Listing Optimization</h3>
                    <p className="text-gray-600">Strategic titles, descriptions, and keywords that achieve top rankings</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Star className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Review Management</h3>
                    <p className="text-gray-600">5-star reputation building and comprehensive review optimization</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-blue-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Account Protection</h3>
                    <p className="text-gray-600">Policy compliance and comprehensive account security management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center" 
                alt="Marketplace Management" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🏪 Dominate Every Marketplace
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let ICONA conquer every marketplace for your brand. Performance-based investment, guaranteed market dominance.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-lg px-8 py-4">
            🏪 Start Marketplace Strategy
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MarketplaceManagement;
