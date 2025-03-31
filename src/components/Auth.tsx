
import React from 'react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Auth = () => {
  return (
    <div className="fixed inset-0 bg-invis-bg/80 backdrop-blur-md flex items-center justify-center z-50">
      <div className="bg-invis-bg-light rounded-xl p-8 max-w-md w-full shadow-2xl border border-gray-800">
        <div className="flex justify-center mb-6">
          <Logo />
        </div>
        
        <h2 className="text-2xl font-bold text-center mb-2">Authentication Required</h2>
        <p className="text-gray-400 text-center mb-8">
          Checking authentication status...
        </p>
        
        <Button className="w-full bg-gradient-green hover:opacity-90 transition-opacity mb-4">
          Log In
        </Button>
        
        <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-700 mb-6">
          Sign Up
        </Button>
        
        <p className="text-gray-500 text-sm text-center">
          You need to authenticate and have an active subscription to use this application.
        </p>
      </div>
    </div>
  );
};

export default Auth;
