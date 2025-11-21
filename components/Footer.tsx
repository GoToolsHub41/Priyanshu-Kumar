import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 bg-[#020617] border-t border-white/5 relative z-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-slate-500 text-sm mb-2 font-mono">
          &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.
        </p>
        <p className="text-slate-600 text-xs max-w-md mx-auto">
          {PERSONAL_INFO.footerText}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
