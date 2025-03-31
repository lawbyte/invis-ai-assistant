
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
        
        {/* Dashboard Preview */}
        <div className="mt-16 max-w-5xl mx-auto relative">
          {/* Glow effect */}
          <div className="absolute -inset-10 bg-invis/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          
          {/* Dashboard Preview Component */}
          <div className="relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-green text-invis-bg text-sm font-semibold py-1 px-4 rounded-full shadow-lg">
              Solution History Dashboard
            </div>
            <div className="rounded-xl shadow-2xl border border-gray-800 overflow-hidden">
              {/* Dashboard header */}
              <div className="bg-gray-900 p-4 border-b border-gray-800">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-white">My Solution History</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="h-8 px-3 text-xs">
                      Sort
                    </Button>
                    <Button className="bg-gradient-green h-8 px-3 text-xs">
                      New Solution
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Dashboard content */}
              <div className="bg-invis-bg p-4">
                <div className="grid gap-4">
                  {/* Solution items */}
                  {[1, 2, 3].map((index) => (
                    <div key={index} className="bg-gray-800/50 rounded-lg p-4 hover:bg-gray-800/80 transition-colors border border-gray-700/50">
                      <div className="flex justify-between items-start">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              index === 1 ? 'bg-blue-500/20 text-blue-300' : 
                              index === 2 ? 'bg-purple-500/20 text-purple-300' : 
                              'bg-green-500/20 text-green-300'
                            }`}>
                              {index === 1 ? 'Coding' : index === 2 ? 'Multiple Choice' : 'Essay'}
                            </span>
                            <span className="text-gray-400 text-xs">Solved {index} day{index > 1 ? 's' : ''} ago</span>
                          </div>
                          <h4 className="font-medium mb-1">
                            {index === 1 ? 'Merge Intervals Problem' : 
                             index === 2 ? 'Database Normalization Forms' : 
                             'Ethics of AI in Healthcare'}
                          </h4>
                          <p className="text-sm text-gray-400 line-clamp-1">
                            {index === 1 ? 'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals.' : 
                             index === 2 ? 'Multiple choice question about Third Normal Form (3NF) and database normalization.' : 
                             'Essay exploring ethical implications of AI in healthcare decision-making.'}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <span className="sr-only">View</span>
                          <ArrowRight className="h-4 w-4" />
                        </Button>
                      </div>
                      {index === 1 && (
                        <div className="mt-3 pt-3 border-t border-gray-700/50">
                          <div className="flex items-center text-xs text-gray-400">
                            <span className="font-mono bg-gray-700/50 px-1.5 py-0.5 rounded mr-2">O(n log n)</span>
                            <span>Time Complexity</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-4 text-center">
                  <Button variant="ghost" className="text-sm text-gray-400 hover:text-invis">
                    View All Solutions
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
