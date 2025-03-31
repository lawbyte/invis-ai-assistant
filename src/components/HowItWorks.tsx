
import React from 'react';
import { Camera, Code, ArrowRight, Eye, PanelRight } from 'lucide-react';

const HowItWorksStep = ({ 
  number, 
  title, 
  description, 
  icon 
}: { 
  number: number, 
  title: string, 
  description: string, 
  icon: React.ReactNode 
}) => (
  <div className="relative">
    {number < 3 && (
      <div className="absolute left-9 top-16 h-20 border-l-2 border-dashed border-invis/30 hidden md:block"></div>
    )}
    <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
      <div className="w-20 h-20 rounded-full bg-invis/10 border border-invis/30 flex items-center justify-center flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-invis flex items-center justify-center">
          {icon}
        </div>
      </div>
      <div className="text-center md:text-left">
        <div className="text-invis font-semibold mb-1">Step {number}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 max-w-md">{description}</p>
      </div>
    </div>
  </div>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: <Camera className="w-6 h-6 text-white" />,
      title: "Screenshot Your Problem",
      description: "Press Alt+V to capture any coding problem, multiple choice, or essay question directly from your screen."
    },
    {
      icon: <Code className="w-6 h-6 text-white" />,
      title: "Generate the Solution",
      description: "Press Alt+B to process the problem. Our AI will analyze the question and generate a comprehensive solution."
    },
    {
      icon: <Eye className="w-6 h-6 text-white" />,
      title: "Review & Learn",
      description: "Get a detailed solution with explanations, code, and reasoning to understand the approach and logic."
    }
  ];
  
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-invis-bg to-invis-bg-light">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-gradient">Invis</span> Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Three simple steps to get instant solutions for any coding interview or exam question
          </p>
        </div>
        
        <div className="space-y-16 max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <HowItWorksStep key={index} number={index + 1} {...step} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-8">
            With Invis, you're always prepared. Our invisible assistant stays out of your way until you need it.
          </p>
          <div className="inline-flex items-center gap-2 py-2 px-4 bg-invis/10 rounded-full text-invis">
            <PanelRight className="w-5 h-5" />
            <span>Your invisible partner for every technical challenge</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
