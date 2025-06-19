
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Leaf, Wind, Sun, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sun className="w-8 h-8 text-energy-300 opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
        <Wind className="w-10 h-10 text-white/40" />
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '2s' }}>
        <Leaf className="w-6 h-6 text-eco-200" />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="flex justify-center gap-4 mb-6">
          <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
            SDG #7: Clean Energy
          </Badge>
          <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
            SDG #13: Climate Action
          </Badge>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
          Renewable Energy
          <span className="block text-eco-200">Awareness Chatbot</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Empowering climate literacy through AI-driven conversations about solar, wind, and hydro energy solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <Button size="lg" className="bg-white text-eco-700 hover:bg-eco-50 px-8 py-3 text-lg font-semibold">
            <MessageCircle className="w-5 h-5 mr-2" />
            Start Chatting
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
            Learn More
          </Button>
        </div>
        
        <div className="mt-12 text-white/80 animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-sm">🌱 Built with Rasa NLP • Committed to a Greener World • AI for Climate Action ⚡</p>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-white">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;
