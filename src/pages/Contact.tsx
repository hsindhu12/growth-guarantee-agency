
import React, { useState } from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you! Blink will contact you within 24 hours with your growth strategy.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Blink",
      details: "hello@blinkgrowthpro.com",
      description: "Get a response within 2 hours"
    },
    {
      icon: Phone,
      title: "Call Blink",
      details: "+91 98765 43210",
      description: "Mon-Sat: 9 AM - 8 PM IST"
    },
    {
      icon: MapPin,
      title: "Blink's Dojo",
      details: "Mumbai, India",
      description: "Where the growth magic happens"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "< 2 Hours",
      description: "Ninja-fast support always"
    }
  ];

  const services = [
    "Precision Retargeting",
    "Marketplace Domination",
    "Website Development",
    "SEO Services",
    "Social Media Marketing",
    "Product Photography",
    "Video Production",
    "Complete Growth Audit"
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
          <Badge className="mb-6 bg-green-500/20 text-green-300 border-green-400 text-lg px-6 py-2">
            🥷 Connect with Blink
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Work with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Blink The Ninja? 🥷
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-blue-100">
            Let's discuss your growth goals. Blink responds faster than a ninja strike - 
            <span className="text-yellow-300 font-semibold"> usually within 2 hours!</span>
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                🥷 Get Your Free Growth Audit
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Tell Blink about your brand, and get a customized growth strategy within 24 hours. 
                Zero cost, maximum value.
              </p>
              
              <Card className="shadow-2xl border-0">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    Free Growth Strategy Session
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your name"
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          required
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+91 98765 43210"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company/Brand Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Your brand name"
                          className="mt-1"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="service">Which Ninja Service Interests You?</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Tell Blink About Your Growth Goals</Label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Describe your current challenges and what you'd like to achieve..."
                        rows={4}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                      <Send className="mr-2 h-5 w-5" />
                      🥷 Get My Free Growth Strategy
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                🥷 Connect with Blink Directly
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Multiple ways to reach out to Blink for your growth needs. Choose what works best for you.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <Card key={index} className="shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-0">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                            <p className="text-lg text-blue-600 font-semibold">{info.details}</p>
                            <p className="text-gray-600">{info.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
              
              {/* Guarantee Badge */}
              <Card className="mt-8 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    🥷 Blink's Growth Guarantee
                  </h3>
                  <p className="text-gray-700">
                    <strong>100% Growth Guaranteed</strong> or we work for free. That's Blink's ninja promise to every brand we partner with.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
