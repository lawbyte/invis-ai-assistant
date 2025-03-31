
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-36 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-pattern opacity-60 pointer-events-none"></div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 py-2 px-4 bg-invis/10 rounded-full text-invis font-medium mb-8">
            <Terminal className="w-4 h-4" />
            <span>Your invisible companion for technical challenges</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Invisible AI</span> for Coding Interviews and Exams
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Invis works silently in the background, solving LeetCode problems, multiple-choice questions, and essays with 
            just a few keystrokes. Your secret advantage for technical interviews and exams.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="bg-gradient-green hover:opacity-90 transition-opacity px-8 py-6 text-lg">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-invis text-invis hover:bg-invis hover:text-white px-8 py-6 text-lg">
              See How It Works
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-invis w-4 h-4" />
              <span>Invisible on screen</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-invis w-4 h-4" />
              <span>Available for Mac & Windows</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-gray-700 rounded-full"></div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-invis w-4 h-4" />
              <span>50 solutions per month</span>
            </div>
          </div>
        </div>
        
        {/* App Demo Preview */}
        <div className="mt-16 max-w-5xl mx-auto relative">
          {/* Glow effect */}
          <div className="absolute -inset-10 bg-invis/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          {/* App Demo Component will be rendered here */}
          <div className="relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-green text-invis-bg text-sm font-semibold py-1 px-4 rounded-full shadow-lg">
              Screenshot → Solution
            </div>
            <img 
              src="public/lovable-uploads/b8be228d-2437-424a-95ea-786564ca9102.png" 
              alt="Invis App Demo" 
              className="rounded-xl shadow-2xl border border-gray-800 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
