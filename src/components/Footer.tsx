
import React from 'react';
import Logo from './Logo';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-invis-bg/70">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Logo className="mb-4" />
            <p className="text-gray-400 mb-6 max-w-md">
              Invis is your invisible AI assistant for coding interviews and exams.
              Get instant solutions and detailed explanations with just a few keystrokes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-invis-bg-light flex items-center justify-center text-gray-400 hover:text-invis transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-invis-bg-light flex items-center justify-center text-gray-400 hover:text-invis transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-invis-bg-light flex items-center justify-center text-gray-400 hover:text-invis transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-invis-bg-light flex items-center justify-center text-gray-400 hover:text-invis transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-invis transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-invis transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-invis transition-colors">Pricing</a></li>
              <li><a href="#shortcuts" className="text-gray-400 hover:text-invis transition-colors">Shortcuts</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-invis transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-invis transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-invis transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-invis transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
          <p>© {currentYear} Invis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
