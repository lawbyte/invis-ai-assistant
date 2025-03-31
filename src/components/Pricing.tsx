
import React from 'react';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingCard = ({ 
  title, 
  price, 
  period, 
  credits, 
  description, 
  features,
  popular = false
}: { 
  title: string, 
  price: string, 
  period: string, 
  credits: number,
  description: string, 
  features: string[],
  popular?: boolean
}) => (
  <div className={`rounded-xl p-1 ${popular ? 'bg-gradient-green' : 'bg-gray-800'} animate-fade-in`}>
    <div className="h-full bg-invis-bg-light rounded-lg p-6 flex flex-col">
      {popular && (
        <div className="text-xs font-semibold text-invis bg-invis/10 py-1 px-3 rounded-full self-start mb-4">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-4xl font-bold">{price}</span>
        <span className="text-gray-400">/{period}</span>
      </div>
      <p className="text-gray-400 mb-6">{description}</p>
      <div className="bg-invis/10 rounded-lg px-4 py-3 mb-6 text-center">
        <span className="text-invis font-medium">{credits} credits</span> per month
      </div>
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="w-5 h-5 text-invis flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
      <Button className={`w-full ${popular ? 'bg-invis hover:bg-invis/90 text-invis-bg' : 'bg-invis hover:bg-invis/90 text-invis-bg'}`}>
        Get Started
      </Button>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the plan that works best for your needs with our straightforward pricing options
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Monthly"
            price="$30"
            period="month"
            credits={50}
            description="Perfect for occasional interviews and exams"
            features={[
              "50 solution credits per month",
              "Access to all problem types",
              "Detailed explanations",
              "Cross-platform support",
              "Updates and improvements"
            ]}
          />
          
          <PricingCard
            title="Annual"
            price="$300"
            period="year"
            credits={50}
            description="Best value for serious students and job seekers"
            features={[
              "50 solution credits per month",
              "Access to all problem types",
              "Detailed explanations",
              "Cross-platform support",
              "Priority support",
              "Save $60 compared to monthly"
            ]}
            popular={true}
          />
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-semibold mb-4">Each credit can be used to solve:</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-invis-bg-light rounded-lg p-4">
              <div className="w-12 h-12 rounded-full bg-invis/10 flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6 text-invis" />
              </div>
              <p className="font-medium">1 Coding Problem</p>
            </div>
            <div className="bg-invis-bg-light rounded-lg p-4">
              <div className="w-12 h-12 rounded-full bg-invis/10 flex items-center justify-center mx-auto mb-3">
                <ListChecks className="w-6 h-6 text-invis" />
              </div>
              <p className="font-medium">1 Multiple Choice Question</p>
            </div>
            <div className="bg-invis-bg-light rounded-lg p-4">
              <div className="w-12 h-12 rounded-full bg-invis/10 flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-invis" />
              </div>
              <p className="font-medium">1 Essay Question</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Code, ListChecks, FileText } from 'lucide-react';

export default Pricing;
