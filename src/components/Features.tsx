
import React from 'react';
import { Code, MonitorSmartphone, UserCheck, Sparkles, BookOpen, Zap, ArrowUpDown, Clock } from 'lucide-react';

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex gap-4 p-6 rounded-xl glass-card">
    <div className="mt-1 shrink-0">
      <div className="w-12 h-12 rounded-lg bg-gradient-green flex items-center justify-center text-invis-bg">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Coding Interview Solver",
      description: "Instantly solve LeetCode-style coding problems with step-by-step explanations for technical interviews."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Exam Question Solver",
      description: "Tackle multiple-choice and essay questions with AI-generated responses for any exam subject."
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6" />,
      title: "Cross-Platform",
      description: "Available on Windows and macOS with the same seamless experience across all your devices."
    },
    {
      icon: <UserCheck className="w-6 h-6" />,
      title: "Invisible Assistant",
      description: "Runs with a transparent background that ignores mouse clicks, making it undetectable during tests."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Detailed Explanations",
      description: "Get line-by-line code explanations to help you understand and explain your answers."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Solutions",
      description: "Screenshot a problem and get solutions in seconds with just a few keyboard shortcuts."
    },
    {
      icon: <ArrowUpDown className="w-6 h-6" />,
      title: "Movable Interface",
      description: "Position the app anywhere on your screen with arrow key navigation for optimal viewing."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time-Saving",
      description: "Save hours of study time with instant answers and comprehensive explanations for any problem."
    }
  ];
  
  return (
    <section id="features" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-gradient">Powerful Features</span> for Your Success
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Invis gives you the edge with powerful AI capabilities designed to make you excel in technical interviews and exams.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
