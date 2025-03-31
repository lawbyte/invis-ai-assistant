
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { Menu, X } from 'lucide-react';

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - 100,
        behavior: 'smooth'
      });
    }
  };
  
  return (
    <a 
      href={href} 
      onClick={handleClick}
      className="text-gray-300 hover:text-invis transition-colors px-4 py-2"
    >
      {children}
    </a>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-invis-bg/80 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo />
        
        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-2">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#shortcuts">Shortcuts</NavLink>
          <Button variant="outline" className="ml-2 border-invis text-invis hover:bg-invis hover:text-white">
            Log In
          </Button>
          <Button className="bg-gradient-green hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-invis-bg-light p-4 absolute top-full left-0 right-0 border-t border-gray-800 flex flex-col">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
          <NavLink href="#shortcuts">Shortcuts</NavLink>
          <div className="flex gap-2 mt-4">
            <Button variant="outline" className="flex-1 border-invis text-invis hover:bg-invis hover:text-white">
              Log In
            </Button>
            <Button className="flex-1 bg-gradient-green hover:opacity-90 transition-opacity">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
