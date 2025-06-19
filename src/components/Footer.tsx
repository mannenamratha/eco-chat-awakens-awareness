
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Leaf, Wind, Sun, Globe, MessageCircle, Award } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: "About Project", href: "#about" },
    { name: "Try Chatbot", href: "#chatbot" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Portfolio", href: "#portfolio" }
  ];

  const technologies = [
    { name: "Rasa NLP", href: "#" },
    { name: "Python", href: "#" },
    { name: "React", href: "#" },
    { name: "Machine Learning", href: "#" }
  ];

  const sdgGoals = [
    { number: "7", name: "Clean Energy", icon: Sun },
    { number: "13", name: "Climate Action", icon: Leaf }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-eco-600 rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Renewable Energy Chatbot</h3>
                <p className="text-gray-400 text-sm">AI for Climate Education</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering climate literacy through intelligent conversations about renewable energy solutions. 
              Built with Rasa NLP to make sustainable energy education accessible to everyone.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-eco-600 hover:bg-eco-700">
                <Leaf className="w-3 h-3 mr-1" />
                Sustainability
              </Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700">
                <Wind className="w-3 h-3 mr-1" />
                Clean Energy
              </Badge>
              <Badge className="bg-purple-600 hover:bg-purple-700">
                <Award className="w-3 h-3 mr-1" />
                AI Innovation
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-eco-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Technologies</h4>
            <ul className="space-y-3">
              {technologies.map((tech, index) => (
                <li key={index}>
                  <a href={tech.href} className="text-gray-300 hover:text-eco-400 transition-colors">
                    {tech.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* SDG Goals Section */}
        <div className="text-center mb-8">
          <h4 className="font-semibold text-lg mb-6">Contributing to UN Sustainable Development Goals</h4>
          <div className="flex justify-center gap-8">
            {sdgGoals.map((goal, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-gray-800 rounded-xl">
                <div className="w-12 h-12 bg-gradient-to-r from-eco-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{goal.number}</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">SDG #{goal.number}</div>
                  <div className="text-gray-300 text-sm">{goal.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2024 Renewable Energy Chatbot. Built with ❤️ for a sustainable future.
          </div>
          <div className="flex items-center gap-4 text-gray-400 text-sm">
            <span>Powered by Rasa NLP & React</span>
            <Globe className="w-4 h-4" />
            <span>Global Climate Impact</span>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-8 text-center p-6 bg-gradient-to-r from-eco-900/30 to-blue-900/30 rounded-2xl border border-eco-500/20">
          <p className="text-eco-200 italic">
            "Every conversation about renewable energy is a step towards a more sustainable future. 
            Together, we can accelerate the transition to clean energy through knowledge and awareness."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
