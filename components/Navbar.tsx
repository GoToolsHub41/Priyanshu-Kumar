import React from 'react';
import { Zap } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-sm bg-black/20 border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 text-cyan-400">
          <Zap className="w-6 h-6 fill-current" />
          <span className="font-bold tracking-wider text-white font-mono text-lg">PRIYANSHU.EE</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-[#C9FF2F] transition-colors">About</a>
          <a href="#skills" className="hover:text-[#C9FF2F] transition-colors">Skills</a>
          <a href="#projects" className="hover:text-[#C9FF2F] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#C9FF2F] transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
