
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Search, TrendingUp, Target, Award } from "lucide-react";

const SEOServices = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-lime-600 via-green-600 to-emerald-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 border-yellow-400 text-lg px-6 py-2">
            🔍 SEO Stealth Mode
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            SEO Services
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-lime-500 to-green-500">
              Invisible to Competitors 🔍
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-lime-100">
            Blink's SEO techniques work like ninja magic - invisible to competitors but 
            <span className="text-yellow-300 font-semibold"> dominating search results.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🥷 SEO Ninja Techniques
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Blink employs stealth SEO strategies that fly under competitor radar while catapulting 
                your website to the top of search results. Every optimization is surgical and strategic.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Search className="h-6 w-6 text-green-500 mr-3" />
                  <span>Keyword Domination Strategy</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-blue-500 mr-3" />
                  <span>Technical SEO Mastery</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-purple-500 mr-3" />
                  <span>Content Strategy & Link Building</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop&crop=center" 
                alt="SEO Analytics Dashboard" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🔍 Blink's SEO Arsenal
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Search className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Keyword Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Find and dominate the most profitable keywords in your niche</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Technical SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Optimize site structure, speed, and technical elements</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Content Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Create content that ranks and converts visitors</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Local SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Dominate local search results and Google My Business</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🔍 Ready to Dominate Search Results?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let Blink unleash ninja SEO techniques on your website. Invisible to competitors, visible to customers.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
            🔍 Start SEO Domination
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOServices;
