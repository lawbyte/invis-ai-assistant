
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import Shortcuts from '../components/Shortcuts';
import AppDemo from '../components/AppDemo';
import Footer from '../components/Footer';
import Auth from '../components/Auth';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <div className="py-16 bg-invis-bg-light">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            See <span className="text-gradient">Invis</span> in Action
          </h2>
          <AppDemo />
        </div>
      </div>
      <HowItWorks />
      <Pricing />
      <Shortcuts />
      <Footer />
      
      {/* Uncomment to show the Auth modal */}
      {/* <Auth /> */}
    </div>
  );
};

export default Index;
