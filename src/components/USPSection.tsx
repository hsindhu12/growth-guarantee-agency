
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Shield, Heart, Trophy, Target } from "lucide-react";
import Mascot from './Mascot';

const USPSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-400 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <Mascot size="lg" className="hover:scale-110 transition-transform duration-300" />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-2 animate-bounce">
                <Heart className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
          
          <Badge className="mb-8 bg-green-100 text-green-800 hover:bg-green-200 text-xl px-8 py-4 hover:scale-105 transition-all duration-300 shadow-lg">
            ✨ Why Choose Us?
          </Badge>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-900 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
            Our Unique Promise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="p-10 bg-gradient-to-br from-green-500 to-emerald-600 text-white border-0 hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 rounded-full p-4 group-hover:animate-pulse">
                    <Zap className="h-16 w-16 group-hover:animate-bounce" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-6">💯 100% Growth Guarantee</h3>
                <p className="text-green-100 text-lg leading-relaxed">
                  We're so confident in our strategies that we guarantee results. If we don't deliver the promised growth, 
                  <span className="font-bold text-yellow-200"> we work for free until we do!</span>
                </p>
                <div className="mt-6 flex justify-center">
                  <Badge className="bg-yellow-400/20 text-yellow-200 border-yellow-300">
                    <Trophy className="h-4 w-4 mr-2" />
                    Risk-Free Promise
                  </Badge>
                </div>
              </div>
            </Card>
            
            <Card className="p-10 bg-gradient-to-br from-blue-600 to-purple-600 text-white border-0 hover:shadow-2xl transition-all duration-500 hover:scale-105 group relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div className="flex justify-center mb-6">
                  <div className="bg-white/20 rounded-full p-4 group-hover:animate-pulse">
                    <Shield className="h-16 w-16 group-hover:animate-bounce" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-6">💸 Zero Upfront Fees</h3>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Start your growth journey without any financial risk. Our 0 fees model means 
                  <span className="font-bold text-yellow-200"> you only pay based on the results we deliver.</span>
                </p>
                <div className="mt-6 flex justify-center">
                  <Badge className="bg-yellow-400/20 text-yellow-200 border-yellow-300">
                    <Target className="h-4 w-4 mr-2" />
                    Performance-Based
                  </Badge>
                </div>
              </div>
            </Card>
          </div>

          {/* Enhanced CTA Section */}
          <div className="bg-gradient-to-r from-white via-blue-50 to-purple-50 rounded-3xl p-12 shadow-2xl border border-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-4 shadow-lg">
                  <Heart className="h-12 w-12 text-white animate-pulse" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                🎯 Stress-Free Growth Model
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Focus on your business while we handle the growth. Our performance-based model aligns our success with yours.
                <span className="block mt-2 font-semibold text-purple-600">
                  ✨ No Risk. No Stress. Just Results.
                </span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-12 py-6 text-xl rounded-full shadow-2xl hover:scale-105 transition-all duration-300 group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    🚀 Start Your Risk-Free Growth Journey
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Button>
                
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-2">Trusted by 500+ brands</div>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default USPSection;
