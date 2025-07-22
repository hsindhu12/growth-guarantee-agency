
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Megaphone, Smartphone, Users, BarChart3 } from "lucide-react";

const DigitalMarketing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-red-500/20 text-red-300 border-red-400 text-lg px-6 py-2">
            📱 Social Media Mastery
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Digital Marketing
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              That Builds Empires 📱
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-yellow-100">
            ICONA builds engaged communities and drives sales through strategic digital marketing 
            <span className="text-yellow-300 font-semibold"> across all platforms.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center" 
                alt="Digital Marketing Strategy" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🥷 Digital Marketing Mastery
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                ICONA orchestrates comprehensive digital marketing campaigns that build brand awareness, 
                engage audiences, and drive conversions across every digital touchpoint.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Megaphone className="h-6 w-6 text-red-500 mr-3" />
                  <span>Multi-Platform Campaigns</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-6 w-6 text-blue-500 mr-3" />
                  <span>Community Building & Management</span>
                </div>
                <div className="flex items-center">
                  <BarChart3 className="h-6 w-6 text-green-500 mr-3" />
                  <span>Performance Analytics & Optimization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            📱 Digital Marketing Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Megaphone className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Social Media Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Build engaged communities across all social platforms</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Influencer Marketing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Strategic partnerships with relevant influencers</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Smartphone className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Content Creation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Engaging content that drives action and sharing</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <BarChart3 className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Paid Advertising</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">High-ROI campaigns across Google, Facebook, and more</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            📱 Ready to Build Your Digital Empire?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let ICONA orchestrate your digital marketing strategy. Build communities, drive sales, dominate markets.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
            📱 Launch Digital Marketing
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DigitalMarketing;
