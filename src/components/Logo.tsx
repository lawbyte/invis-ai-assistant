
import React from 'react';

const Logo: React.FC<{className?: string}> = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-gradient-green rounded-full blur-sm opacity-70"></div>
        <div className="absolute inset-0.5 bg-invis-bg rounded-full"></div>
        <div className="absolute inset-0 flex items-center justify-center text-invis font-bold text-xl">i</div>
      </div>
      <span className="font-bold text-2xl tracking-tighter">
        <span className="text-white">Inv</span>
        <span className="text-invis">is</span>
      </span>
    </div>
  );
};

export default Logo;
