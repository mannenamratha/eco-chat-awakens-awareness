
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, Bot, User, Minimize2, Maximize2 } from 'lucide-react';

const ChatbotWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hello! I'm your Renewable Energy Assistant. Ask me about solar, wind, or hydro energy! 🌱⚡",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const sampleQuestions = [
    "How do solar panels work?",
    "What are the benefits of wind energy?",
    "How can I make my home more energy efficient?",
    "Tell me about hydroelectric power"
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages(prev => [...prev, {
        type: 'user',
        content: inputValue,
        timestamp: new Date()
      }]);
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [...prev, {
          type: 'bot',
          content: "That's a great question about renewable energy! In a real implementation, I would provide detailed information about sustainable energy solutions. This is a demo showing the chatbot interface design.",
          timestamp: new Date()
        }]);
      }, 1000);
      
      setInputValue('');
    }
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-eco-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-eco-600 text-white">
            <MessageCircle className="w-4 h-4 mr-2" />
            Interactive Demo
          </Badge>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Try the Chatbot Experience
          </h2>
          <p className="text-xl text-gray-600">
            Experience how our AI assistant makes renewable energy education accessible and engaging
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-eco-600 to-eco-700 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-6 h-6" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Renewable Energy Assistant</CardTitle>
                    <p className="text-eco-100 text-sm">Powered by Rasa NLP</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="text-white hover:bg-white/20"
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className={`transition-all duration-300 ${isExpanded ? 'h-96' : 'h-64'} overflow-y-auto bg-gray-50`}>
                <div className="p-4 space-y-4">
                  {messages.map((message, index) => (
                    <div key={index} className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                      {message.type === 'bot' && (
                        <div className="w-8 h-8 bg-eco-600 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <div className={`max-w-xs px-4 py-2 rounded-2xl ${
                        message.type === 'user' 
                          ? 'bg-eco-600 text-white' 
                          : 'bg-white border shadow-sm'
                      }`}>
                        <p className="text-sm">{message.content}</p>
                      </div>
                      {message.type === 'user' && (
                        <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Questions */}
              <div className="p-4 bg-white border-t">
                <p className="text-sm text-gray-600 mb-3">Try asking:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {sampleQuestions.map((question, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="sm"
                      onClick={() => setInputValue(question)}
                      className="text-xs h-8 px-3 border-eco-200 text-eco-700 hover:bg-eco-50"
                    >
                      {question}
                    </Button>
                  ))}
                </div>

                {/* Input Area */}
                <div className="flex gap-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask about renewable energy..."
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    className="flex-1"
                  />
                  <Button 
                    onClick={handleSendMessage}
                    className="bg-eco-600 hover:bg-eco-700"
                    size="sm"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatbotWidget;
