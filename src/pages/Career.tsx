
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Star, Heart, Zap, Target, Award } from "lucide-react";

const Career = () => {
  const positions = [
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote/Hybrid",
      type: "Full-time",
      description: "Join ICONA's elite team of growth strategists and master advanced digital marketing techniques."
    },
    {
      title: "Ecommerce Growth Specialist",
      department: "Ecommerce",
      location: "Remote/Hybrid", 
      type: "Full-time",
      description: "Help brands achieve explosive growth across all major marketplaces and digital channels."
    },
    {
      title: "Creative Content Strategist",
      department: "Creative",
      location: "Remote/Hybrid",
      type: "Full-time",
      description: "Create compelling content strategies that drive engagement and conversions."
    },
    {
      title: "Analytics & Data Specialist",
      department: "Analytics",
      location: "Remote/Hybrid",
      type: "Full-time",
      description: "Transform data into actionable insights that drive exponential business growth."
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: "Professional Development",
      description: "Master advanced growth strategies with ICONA's comprehensive training programs"
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options for optimal productivity"
    },
    {
      icon: Zap,
      title: "Performance Bonuses",
      description: "Get rewarded for exceptional results and client success achievements"
    },
    {
      icon: Target,
      title: "Career Advancement",
      description: "Clear progression paths from specialist to senior leadership roles"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            🚀 Join Our Team
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Career at ICONA
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Shape the Future of Growth 🚀
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Join ICONA's elite team of growth strategists and help ambitious brands achieve explosive growth. 
            <span className="text-yellow-300 font-semibold"> Master the art of strategic digital marketing.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🚀 Life at ICONA
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                At ICONA, we don't just have employees - we have growth strategists. Each team member is equipped 
                with cutting-edge tools, advanced methodologies, and empowered to deliver exceptional results 
                for our clients through data-driven strategies.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We believe in continuous learning, professional development, and celebrating every victory - 
                big or small. Join us and become part of a team that's revolutionizing digital growth.
              </p>
              <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700">
                🚀 View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&crop=center" 
                alt="Team working together" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🚀 Why Join ICONA's Growth Team?
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <IconComponent className="h-12 w-12 text-primary mx-auto mb-4" />
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🚀 Open Positions
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <CardTitle className="text-2xl mb-2">{position.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">{position.department}</Badge>
                        <Badge variant="outline">{position.location}</Badge>
                        <Badge variant="outline">{position.type}</Badge>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{position.description}</p>
                </CardHeader>
                <CardContent>
                  <Button className="w-full bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700">
                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🚀 Ready to Join ICONA's Growth Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join ICONA's elite team and master the art of strategic digital growth. Help brands achieve explosive results while building your professional expertise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-lg px-8 py-4">
              🚀 Submit Your Application
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-4">
              📧 Contact HR Team
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Career;
