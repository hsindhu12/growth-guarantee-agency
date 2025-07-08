
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Camera, Eye, Zap, Award } from "lucide-react";

const ProductPhotography = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            📸 Professional Photography
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Product Photography
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              That Converts Sales 📸
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            ICONA captures products with professional precision that makes customers stop scrolling and start buying. 
            <span className="text-yellow-300 font-semibold"> Every shot strategically converts.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=600&h=400&fit=crop&crop=center" 
                alt="Professional Product Photography" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                📸 Photography That Converts
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Every product photo is a strategic sales asset in ICONA's arsenal. Using professional lighting, 
                optimal angles, and expert attention to detail, ICONA creates images that drive purchases.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Camera className="h-6 w-6 text-primary mr-3" />
                  <span>Studio-Quality Product Photography</span>
                </div>
                <div className="flex items-center">
                  <Eye className="h-6 w-6 text-blue-500 mr-3" />
                  <span>360° Interactive Product Views</span>
                </div>
                <div className="flex items-center">
                  <Zap className="h-6 w-6 text-yellow-500 mr-3" />
                  <span>Lifestyle & Context Photography</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            📸 ICONA's Photography Services
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Studio Photography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Professional studio setup with perfect lighting and backgrounds</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Eye className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Lifestyle Photography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Products in real-world contexts that customers can relate to</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Zap className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>360° Photography</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Interactive product views that showcase every angle</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Award className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <CardTitle>Premium Content</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">High-end marketplace content that converts browsers to buyers</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            📸 Ready for Photography That Sells?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let ICONA capture your products with professional precision. Every photo will convert browsers into buyers.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-lg px-8 py-4">
            📸 Book Professional Photo Shoot
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductPhotography;
