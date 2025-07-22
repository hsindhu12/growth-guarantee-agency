
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Rocket, Zap, Users, Award, Target, Star } from "lucide-react";

const ProductLaunch = () => {
  const launchPhases = [
    {
      icon: Target,
      title: "Pre-Launch Strategy",
      description: "Perfect planning for maximum impact",
      features: ["Market Research", "Audience Analysis", "Competitive Intelligence", "Launch Timeline"]
    },
    {
      icon: Rocket,
      title: "Launch Execution",
      description: "Coordinated multi-channel launch campaigns",
      features: ["PR & Media Outreach", "Influencer Partnerships", "Paid Advertising", "Content Marketing"]
    },
    {
      icon: Users,
      title: "Post-Launch Growth",
      description: "Sustain momentum and accelerate growth",
      features: ["Performance Optimization", "Customer Feedback", "Scaling Strategies", "Long-term Growth"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-violet-600 via-purple-600 to-indigo-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 border-yellow-400 text-lg px-6 py-2">
            🚀 Launch Excellence
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Product Launch
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              ICONA's Launch Mastery 🚀
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-purple-100">
            ICONA orchestrates product launches that create market explosions. 
            <span className="text-yellow-300 font-semibold"> Zero failed launches, guaranteed success.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🚀 ICONA's Launch Strategy
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {launchPhases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{phase.title}</CardTitle>
                    <p className="text-gray-600">{phase.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {phase.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center text-gray-700">
                          <Star className="h-4 w-4 text-violet-500 mr-3" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🎯 ICONA's Launch Guarantee
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-yellow-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Lightning Fast Execution</h3>
                    <p className="text-gray-600">From concept to market in record time</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Target className="h-6 w-6 text-violet-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Precision Targeting</h3>
                    <p className="text-gray-600">Reach exactly the right audience at launch</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg">Success Guarantee</h3>
                    <p className="text-gray-600">100% launch success or money back</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center" 
                alt="Product Launch" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🥷 Ready for Launch Success?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let ICONA orchestrate your product launch for maximum market impact. Zero risk, guaranteed success.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
            🥷 Plan Your Launch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductLaunch;
