
import React from 'react';

interface KeyProps {
  children: React.ReactNode;
  highlight?: boolean;
  size?: 'normal' | 'wide' | 'space';
  className?: string;
}

const Key: React.FC<KeyProps> = ({ children, highlight = false, size = 'normal', className = '' }) => {
  const sizeClasses = {
    normal: 'w-12 h-12',
    wide: 'w-20 h-12',
    space: 'w-96 h-12',
  };

  return (
    <div 
      className={`
        ${sizeClasses[size]} 
        bg-invis-bg-light 
        rounded-md 
        flex 
        items-center 
        justify-center 
        text-gray-300 
        font-medium 
        border 
        border-gray-800
        ${highlight ? 'border-invis shadow-[0_0_15px_rgba(16,185,129,0.5)] text-invis' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

const KeyboardVisual = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Function row */}
        <div className="flex gap-2 mb-2 justify-center">
          {['F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10'].map(key => (
            <Key key={key}>{key}</Key>
          ))}
        </div>
        
        {/* Number row */}
        <div className="flex gap-2 mb-2 justify-center">
          <Key>1</Key>
          <Key>2</Key>
          <Key>3</Key>
          <Key>4</Key>
          <Key>5</Key>
          <Key>6</Key>
          <Key>7</Key>
          <Key>8</Key>
          <Key>9</Key>
          <Key>0</Key>
        </div>
        
        {/* QWERTY row */}
        <div className="flex gap-2 mb-2 justify-center">
          <Key>Q</Key>
          <Key>W</Key>
          <Key>E</Key>
          <Key>R</Key>
          <Key>T</Key>
          <Key>Y</Key>
          <Key>U</Key>
          <Key>I</Key>
          <Key>O</Key>
          <Key>P</Key>
          <Key className="px-4">[</Key>
          <Key className="px-4">]</Key>
          <Key className="px-4">\</Key>
        </div>
        
        {/* ASDF row */}
        <div className="flex gap-2 mb-2 justify-center">
          <Key>A</Key>
          <Key>S</Key>
          <Key>D</Key>
          <Key>F</Key>
          <Key>G</Key>
          <Key>H</Key>
          <Key>J</Key>
          <Key>K</Key>
          <Key>L</Key>
          <Key className="px-4">;</Key>
          <Key className="px-4">'</Key>
        </div>
        
        {/* ZXCV row */}
        <div className="flex gap-2 mb-2 justify-center">
          <Key>Z</Key>
          <Key>X</Key>
          <Key highlight={true}>C</Key>
          <Key highlight={true}>V</Key>
          <Key highlight={true}>B</Key>
          <Key>N</Key>
          <Key>M</Key>
          <Key className="px-4">.</Key>
          <Key className="px-4">/</Key>
        </div>
        
        {/* Bottom row */}
        <div className="flex gap-2 justify-center">
          <Key size="wide" highlight={true}>Ctrl</Key>
          <Key>⊞</Key>
          <Key size="wide" highlight={true}>Alt</Key>
          <Key size="space"></Key>
          <Key size="wide" highlight={true}>Alt</Key>
          <Key>≡</Key>
        </div>
        
        {/* Glowing effect behind the Alt and C, V, B keys */}
        <div className="absolute -z-10 w-full h-full flex items-center justify-center">
          <div className="absolute left-1/4 bottom-16 w-24 h-24 bg-invis/20 blur-3xl rounded-full"></div>
          <div className="absolute left-1/3 bottom-16 w-32 h-32 bg-invis/20 blur-3xl rounded-full"></div>
          <div className="absolute bottom-4 left-1/4 w-24 h-24 bg-invis/20 blur-3xl rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardVisual;
