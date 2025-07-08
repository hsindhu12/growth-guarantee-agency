
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, TrendingUp, ShoppingCart, Zap, Users, Award } from "lucide-react";

const EcommerceMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            🎯 Precision Marketing
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ecommerce Marketing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Strategic & Data-Driven 🎯
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            ICONA's signature precision retargeting turns browsers into buyers with strategic accuracy. 
            <span className="text-yellow-300 font-semibold"> Performance-based pricing, guaranteed results.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🎯 ICONA's Retargeting Mastery
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Every visitor who leaves without buying becomes ICONA's strategic target. Using advanced precision 
                marketing techniques, ICONA tracks, engages, and converts them across every digital channel.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-blue-500 mr-3" />
                  <span>Facebook & Instagram Retargeting</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-green-500 mr-3" />
                  <span>Google Ads Precision Targeting</span>
                </div>
                <div className="flex items-center">
                  <ShoppingCart className="h-6 w-6 text-purple-500 mr-3" />
                  <span>Email Marketing Automation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center" 
                alt="Ecommerce Marketing Strategy" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🎯 ICONA's Strategic Approach
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Zap className="h-12 w-12 text-yellow-500 mb-4" />
                <CardTitle>Rapid Implementation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">ICONA implements retargeting campaigns in 24 hours with performance-based pricing.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Users className="h-12 w-12 text-blue-500 mb-4" />
                <CardTitle>Advanced Segmentation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Sophisticated audience targeting based on behavior, interests, and purchase intent.</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <Award className="h-12 w-12 text-green-500 mb-4" />
                <CardTitle>Guaranteed Results</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Performance guarantee - ICONA works until targets are achieved or you don't pay.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🎯 Ready for Strategic Growth?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let ICONA unleash precision retargeting on your store. Performance-based pricing, maximum results guaranteed.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-lg px-8 py-4">
            🎯 Get ICONA's Marketing Audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceMarketing;
