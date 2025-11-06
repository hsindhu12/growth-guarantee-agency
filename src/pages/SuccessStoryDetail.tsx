import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, ArrowLeft, TrendingUp } from "lucide-react";
import { useSuccessStories } from "@/hooks/useSuccessStories";
import { Skeleton } from "@/components/ui/skeleton";

const SuccessStoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { data: stories, isLoading, error } = useSuccessStories();
  
  const story = stories?.find(s => s.id === id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <Skeleton className="h-12 w-3/4 mb-4" />
          <Skeleton className="h-6 w-1/2 mb-8" />
          <Skeleton className="h-96 w-full mb-8" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !story) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Success Story Not Found</h1>
          <p className="text-gray-600 mb-8">The success story you're looking for doesn't exist or has been removed.</p>
          <Link to="/success-stories">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Success Stories
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800 text-white">
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/success-stories">
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Success Stories
            </Button>
          </Link>

          {story.featured && (
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-300 border-yellow-400">
              🏆 Featured Success Story
            </Badge>
          )}

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {story.client_name}
          </h1>

          {story.industry && (
            <Badge variant="outline" className="mb-6 border-white/30 text-white bg-white/10">
              {story.industry}
            </Badge>
          )}
        </div>
      </section>

      {/* Story Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          {story.image_url && (
            <img 
              src={story.image_url} 
              alt={story.client_name}
              className="w-full h-96 object-cover rounded-lg mb-12 shadow-2xl"
            />
          )}

          {/* Metrics Overview */}
          {story.metrics && Object.keys(story.metrics).length > 0 && (
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {Object.entries(story.metrics).map(([key, value], index) => {
                if (key === 'timeframe') {
                  return (
                    <Card key={index} className="text-center border-0 shadow-lg bg-blue-50">
                      <CardContent className="p-6">
                        <Calendar className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-2xl font-bold text-blue-600">{value as string}</div>
                        <div className="text-sm text-gray-600 capitalize">Timeframe</div>
                      </CardContent>
                    </Card>
                  );
                }
                return (
                  <Card key={index} className="text-center border-0 shadow-lg bg-green-50">
                    <CardContent className="p-6">
                      <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-green-600">{value as string}</div>
                      <div className="text-sm text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Challenge Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">The Challenge</h2>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-700">{story.challenge}</p>
            </div>
          </div>

          {/* Solution Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">ICONA's Solution</h2>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
              <p className="text-lg text-gray-700">{story.solution}</p>
            </div>
          </div>

          {/* Results Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">The Results</h2>
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <blockquote className="text-lg italic text-gray-700">
                "{story.results}"
                <footer className="mt-4 font-semibold text-gray-900 not-italic">
                  — {story.client_name}
                </footer>
              </blockquote>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 pt-8 border-t text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join {story.client_name} and hundreds of other brands that have achieved extraordinary growth with ICONA's expert strategies.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-lg px-8 py-4">
                🚀 Start Your Growth Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStoryDetail;
