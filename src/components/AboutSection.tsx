
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sun, Wind, Leaf, Brain, MessageCircle, Target } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: Sun,
      title: "Solar Energy Education",
      description: "Learn about photovoltaic systems, solar panel efficiency, and residential solar solutions.",
      gradient: "from-energy-400 to-energy-600"
    },
    {
      icon: Wind,
      title: "Wind Power Insights",
      description: "Discover wind turbine technology, offshore wind farms, and wind energy potential.",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      icon: Leaf,
      title: "Hydro Energy Solutions",
      description: "Explore hydroelectric power, micro-hydro systems, and sustainable water energy.",
      gradient: "from-eco-400 to-eco-600"
    }
  ];

  const technologies = [
    { name: "Rasa NLP", description: "Advanced Natural Language Processing" },
    { name: "Machine Learning", description: "Intelligent Response Generation" },
    { name: "Python", description: "Robust Backend Development" },
    { name: "React", description: "Modern Frontend Interface" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-eco-100 text-eco-800 hover:bg-eco-200">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Climate Education
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bridging Knowledge Gaps in 
            <span className="text-eco-600"> Clean Energy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our intelligent chatbot combines cutting-edge NLP technology with comprehensive renewable energy knowledge 
            to make climate education accessible and engaging for everyone.
          </p>
        </div>

        {/* Energy Types Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift glass-effect group">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-eco`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="bg-gradient-to-r from-eco-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Technology Stack</h3>
            <p className="text-lg text-gray-600">Built with cutting-edge AI and web technologies</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900 mb-2">{tech.name}</h4>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Metrics */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Real-World Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-eco-600 mb-2">1000+</div>
              <p className="text-gray-600">Conversations Started</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">95%</div>
              <p className="text-gray-600">User Satisfaction</p>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-energy-600 mb-2">24/7</div>
              <p className="text-gray-600">Available Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
