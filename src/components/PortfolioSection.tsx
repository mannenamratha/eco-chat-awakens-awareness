
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Award, Target, Globe, Code, BookOpen } from 'lucide-react';

const PortfolioSection = () => {
  const certifications = [
    {
      name: "EY AI Skills Passport",
      issuer: "Ernst & Young",
      description: "Advanced AI and Machine Learning Certification",
      badge: "EY",
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Microsoft AI Fundamentals",
      issuer: "Microsoft",
      description: "Azure AI Services and Machine Learning",
      badge: "MS",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Sustainable Development Goals",
      issuer: "UN Global Compact",
      description: "SDG #7 & #13 Implementation",
      badge: "UN",
      color: "from-eco-400 to-eco-600"
    }
  ];

  const projectHighlights = [
    {
      icon: Target,
      title: "Mission-Driven Development",
      description: "Focused on solving real-world climate challenges through AI education"
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Built with Rasa NLP, Python, and modern web technologies"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Contributing to UN SDG #7 (Clean Energy) and SDG #13 (Climate Action)"
    },
    {
      icon: BookOpen,
      title: "Educational Innovation",
      description: "Making complex renewable energy concepts accessible to everyone"
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-eco-50/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-purple-100 text-purple-800">
            <Award className="w-4 h-4 mr-2" />
            Portfolio Showcase
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            AI for Climate Action
            <span className="text-eco-600"> Portfolio Project</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This project demonstrates expertise in AI, NLP, and sustainable technology development, 
            contributing to global climate education and awareness.
          </p>
        </div>

        {/* Project Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {projectHighlights.map((highlight, index) => (
            <Card key={index} className="hover-lift text-center bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-eco-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <highlight.icon className="w-6 h-6 text-eco-600" />
                </div>
                <CardTitle className="text-lg">{highlight.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-10">
            Professional Certifications & Recognition
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover-lift bg-white shadow-lg border-0">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <span className="text-white font-bold text-lg">{cert.badge}</span>
                  </div>
                  <CardTitle className="text-lg">{cert.name}</CardTitle>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-700">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Stack */}
        <Card className="bg-gradient-to-r from-eco-600 to-eco-700 text-white mb-16">
          <CardContent className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Technical Implementation</h3>
              <p className="text-eco-100 text-lg">Built with cutting-edge AI and web technologies</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Rasa NLP", category: "AI Framework" },
                { name: "Python", category: "Backend" },
                { name: "React", category: "Frontend" },
                { name: "Machine Learning", category: "Intelligence" }
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <div className="font-semibold text-lg">{tech.name}</div>
                  <div className="text-eco-200 text-sm">{tech.category}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* SDG Alignment */}
        <div className="text-center bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">UN Sustainable Development Goals</h3>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            This project directly contributes to achieving global sustainability targets through AI-powered education.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-4 p-6 bg-energy-50 rounded-2xl">
              <div className="w-16 h-16 bg-energy-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">7</span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg text-gray-900">Affordable and Clean Energy</h4>
                <p className="text-gray-600">Educating about renewable energy accessibility and solutions</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">13</span>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg text-gray-900">Climate Action</h4>
                <p className="text-gray-600">Promoting climate literacy and sustainable practices</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <Button className="bg-eco-600 hover:bg-eco-700 text-white px-8 py-3">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Full Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
