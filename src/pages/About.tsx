
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Zap, Shield, Award } from "lucide-react";

const About = () => {
  const teamValues = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Like a true ninja, Blink strikes with laser-focused precision in every retargeting campaign."
    },
    {
      icon: Zap,
      title: "Lightning Fast Results",
      description: "Blink moves at ninja speed to deliver rapid growth and immediate impact for your brand."
    },
    {
      icon: Shield,
      title: "Zero Risk Guarantee",
      description: "With Blink's ninja skills, you get 100% growth guarantee or we work for free."
    },
    {
      icon: Award,
      title: "Master-Level Expertise",
      description: "Blink has mastered the ancient art of digital growth across all platforms and channels."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=200&h=200&fit=crop&crop=center" 
              alt="Blink – The Retargeting Ninja" 
              className="w-48 h-48 object-contain animate-bounce hover:animate-pulse transition-all duration-300"
            />
          </div>
          
          <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-400 text-lg px-6 py-2">
            🥷 Meet The Growth Master
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About Blink
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              The Retargeting Ninja 🥷
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Born in the digital dojo, Blink mastered the ancient art of growth hacking. With ninja-like precision, 
            Blink helps brands dominate every digital channel with <span className="text-yellow-300 font-semibold">zero upfront fees</span> and 
            <span className="text-green-300 font-semibold"> 100% growth guarantee.</span>
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🥷 The Legend of Blink
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                In the mystical realm of digital marketing, there emerged a legendary ninja known as Blink. 
                Unlike ordinary marketers, Blink possessed supernatural abilities to see through the digital 
                noise and strike precisely where it mattered most.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With years of training in the ancient arts of retargeting, conversion optimization, and 
                growth hacking, Blink developed a unique methodology that guarantees results. No brand 
                that has worked with Blink has ever failed to achieve explosive growth.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Today, Blink continues the mission: helping ambitious brands achieve ninja-level dominance 
                across all digital channels with zero upfront investment and guaranteed results.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                🥷 Start Your Growth Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop&crop=center" 
                alt="Blink in action" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <span className="text-2xl">🥷</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              🥷 Blink's Ninja Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide every mission Blink undertakes for ambitious brands
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-12">
            🥷 Blink's Ninja Achievement Stats
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-yellow-400 mb-2">500+</div>
              <div className="text-xl text-gray-300">Brands Grown</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">₹50Cr+</div>
              <div className="text-xl text-gray-300">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-xl text-gray-300">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">0₹</div>
              <div className="text-xl text-gray-300">Upfront Investment</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
