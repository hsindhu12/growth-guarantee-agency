
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Target, Zap, Shield, Award, Building2 } from "lucide-react";

const About = () => {
  const companyValues = [
    {
      icon: Target,
      title: "Strategic Excellence",
      description: "ICONA delivers precision-focused strategies that align with your business objectives and market dynamics."
    },
    {
      icon: Zap,
      title: "Innovative Solutions",
      description: "We leverage cutting-edge technology and creative approaches to accelerate your digital transformation."
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "ICONA builds long-term relationships based on transparency, reliability, and consistent results."
    },
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Our team combines deep industry knowledge with proven methodologies to deliver exceptional outcomes."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-white/10 to-blue-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-cyan-300/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center animate-pulse">
              <Building2 className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            About Our Company
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About ICONA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
              Digital Excellence Partner
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            ICONA is a leading digital growth agency that transforms businesses through innovative strategies, 
            cutting-edge technology, and <span className="text-yellow-300 font-semibold">data-driven results</span>. 
            We partner with ambitious brands to achieve <span className="text-green-300 font-semibold">sustainable growth</span> 
            and market leadership.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Our Story & Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Founded with a vision to democratize digital success, ICONA emerged from the understanding 
                that every business deserves access to world-class digital marketing and growth strategies, 
                regardless of size or industry.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our team of seasoned professionals combines deep industry expertise with innovative 
                approaches to deliver measurable results. We believe in building authentic partnerships 
                that drive long-term success for our clients.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Today, ICONA continues to lead the digital transformation space by helping businesses 
                navigate complex digital landscapes and achieve their growth objectives through 
                strategic, data-driven solutions.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop&crop=center" 
                alt="ICONA team collaboration" 
                className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center animate-pulse">
                <Building2 className="h-8 w-8 text-white" />
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every solution we deliver
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
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
            ICONA by the Numbers
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-xl text-gray-300">Brands Grown</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-400 mb-2">$50M+</div>
              <div className="text-xl text-gray-300">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-400 mb-2">99%</div>
              <div className="text-xl text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-400 mb-2">10+</div>
              <div className="text-xl text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
