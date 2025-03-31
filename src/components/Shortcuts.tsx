
import React from 'react';
import { Keyboard } from 'lucide-react';

const ShortcutCard = ({ shortcut, description, icon }: { shortcut: string, description: string, icon?: React.ReactNode }) => (
  <div className="flex gap-4 items-center p-4 rounded-lg bg-invis-bg-light">
    <div className="w-12 h-12 rounded-lg bg-invis/10 flex items-center justify-center text-invis shrink-0">
      {icon || <Keyboard className="w-6 h-6" />}
    </div>
    <div>
      <div className="shortcut-key inline-block mb-1">{shortcut}</div>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const Shortcuts = () => {
  const shortcuts = [
    { shortcut: "Alt + C", description: "Take a screenshot of the problem" },
    { shortcut: "Alt + V", description: "Solve the current problem" },
    { shortcut: "Alt + B", description: "Minimize the software" },
    { shortcut: "Alt + D", description: "Move to the next question" },
    { shortcut: "Alt + A", description: "Move to the previous question" },
    { shortcut: "Alt + X", description: "Quit the application" },
    { shortcut: "Alt + ←→↑↓", description: "Move the software window around" }
  ];
  
  return (
    <section id="shortcuts" className="py-20 bg-gradient-to-b from-invis-bg-light to-invis-bg">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Keyboard <span className="text-gradient">Shortcuts</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Control Invis effortlessly with these convenient keyboard shortcuts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {shortcuts.map((shortcut, index) => (
            <ShortcutCard key={index} {...shortcut} />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-invis/10 text-invis font-medium">
            <Keyboard className="w-5 h-5" />
            <span>Designed for seamless and discreet use during interviews and exams</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shortcuts;
