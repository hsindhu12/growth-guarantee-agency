
import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Video, Play, Film, Sparkles } from "lucide-react";

const VideoProduction = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-primary via-blue-600 to-blue-800 text-white overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 text-lg px-6 py-2">
            🎬 Video Production Excellence
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Video Production
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              That Engages & Converts 🎬
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            ICONA creates video content that stops the scroll and drives action. Every frame is strategically crafted 
            <span className="text-yellow-300 font-semibold"> to convert viewers into customers.</span>
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                🎬 ICONA's Video Expertise
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                In the attention economy, video is king. ICONA creates compelling video content that 
                captures attention, tells your story, and drives conversions across all platforms.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Video className="h-6 w-6 text-red-500 mr-3" />
                  <span>Product Demo Videos</span>
                </div>
                <div className="flex items-center">
                  <Play className="h-6 w-6 text-blue-500 mr-3" />
                  <span>Brand Storytelling</span>
                </div>
                <div className="flex items-center">
                  <Film className="h-6 w-6 text-purple-500 mr-3" />
                  <span>Social Media Content</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop&crop=center" 
                alt="Video Production Setup" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            🎬 Video Services ICONA Masters
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Video className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <CardTitle>Product Videos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Showcase features and benefits that drive purchase decisions</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Play className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <CardTitle>Unboxing Videos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Create excitement and anticipation for your products</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Film className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <CardTitle>Brand Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">Tell your brand's journey and connect emotionally</p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardHeader className="text-center">
                <Sparkles className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                <CardTitle>Ad Creatives</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">High-converting video ads for all platforms</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            🎬 Ready for Video That Converts?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let ICONA create video content that captures attention and drives results. Every frame designed to convert.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-700 text-lg px-8 py-4">
            🎬 Start Video Production
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VideoProduction;
