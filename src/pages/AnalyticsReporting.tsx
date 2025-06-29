
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, BarChart3, TrendingUp, Target, Eye } from "lucide-react";

const AnalyticsReporting = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-red-600 via-pink-600 to-purple-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-yellow-500/20 text-yellow-300 border-yellow-400 text-lg px-6 py-2">
            📈 Growth Hacking Secrets
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Analytics & Reporting
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
              Data-Driven Domination 📈
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-pink-100">
            Blink transforms raw data into actionable insights that drive exponential growth. 
            <span className="text-yellow-300 font-semibold"> Every decision backed by ninja-level analytics.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🥷 Analytics Ninja Vision
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Blink sees what others miss. Through advanced analytics and reporting, every marketing dollar 
                is tracked, optimized, and multiplied for maximum ROI and sustainable growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <BarChart3 className="h-6 w-6 text-blue-500 mr-3" />
                  <span>Real-Time Performance Tracking</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="h-6 w-6 text-green-500 mr-3" />
                  <span>ROI & Conversion Analytics</span>
                </div>
                <div className="flex items-center">
                  <Target className="h-6 w-6 text-red-500 mr-3" />
                  <span>Custom Dashboard Creation</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center" 
                alt="Analytics Dashboard" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            📈 Analytics & Reporting Services
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <BarChart3 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Google Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Complete setup and optimization for maximum insights</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <TrendingUp className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Performance Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Detailed monthly reports with actionable insights</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Target className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle>ROI Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Track every dollar spent and revenue generated</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Custom Dashboards</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Personalized dashboards for real-time monitoring</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            📈 Ready for Data-Driven Growth?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let Blink unlock the power of your data. Turn insights into action, action into growth.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
            📈 Start Analytics Setup
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AnalyticsReporting;
