
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Chen",
      role: "Environmental Science Professor",
      institution: "Green University",
      content: "This chatbot has revolutionized how we teach renewable energy concepts. Students engage more actively and retain information better through conversational learning.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "Sustainability Consultant",
      institution: "EcoSolutions Corp",
      content: "I recommend this tool to all my clients interested in renewable energy. The explanations are clear, accurate, and make complex topics accessible to everyone.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Johnson",
      role: "High School Teacher",
      institution: "Future Leaders Academy",
      content: "My students love learning about clean energy through this interactive chatbot. It's made environmental education so much more engaging and fun!",
      rating: 5,
      avatar: "EJ"
    },
    {
      name: "Alex Thompson",
      role: "Climate Activist",
      institution: "Youth for Climate",
      content: "Finally, a tool that makes renewable energy education accessible to everyone. The AI responses are incredibly helpful for our community workshops.",
      rating: 5,
      avatar: "AT"
    }
  ];

  const stats = [
    { number: "95%", label: "User Satisfaction", description: "Users find the chatbot helpful" },
    { number: "1000+", label: "Active Users", description: "People learning daily" },
    { number: "4.8/5", label: "Average Rating", description: "Based on user feedback" },
    { number: "24/7", label: "Availability", description: "Always ready to help" }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            <Star className="w-4 h-4 mr-2" />
            User Testimonials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Making Real Impact in
            <span className="text-eco-600"> Climate Education</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our renewable energy chatbot is transforming the way people learn about sustainable energy solutions.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-eco-50 to-blue-50 rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-eco-600 mb-2">{stat.number}</div>
              <div className="font-semibold text-gray-900 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift bg-gradient-to-br from-white to-eco-50/30 border-eco-100">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <Quote className="w-8 h-8 text-eco-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-700 text-lg leading-relaxed">{testimonial.content}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-eco-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                      <div className="text-sm text-eco-600">{testimonial.institution}</div>
                    </div>
                  </div>
                  
                  <div className="flex gap-1">
                    {Array(testimonial.rating).fill(null).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-energy-400 text-energy-400"  />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-gradient-to-r from-eco-600 to-eco-700 rounded-3xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Join the Clean Energy Movement</h3>
          <p className="text-xl text-eco-100 mb-6 max-w-2xl mx-auto">
            Be part of the solution. Start learning about renewable energy today and help build a sustainable future for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-eco-700 px-8 py-3 rounded-full font-semibold hover:bg-eco-50 transition-colors">
              Start Learning Now
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Share Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
