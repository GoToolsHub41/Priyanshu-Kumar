import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-20 z-10 pointer-events-none">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#C9FF2F]/30 bg-[#C9FF2F]/5 text-[#C9FF2F] text-xs font-mono mb-8 backdrop-blur-md shadow-[0_0_15px_-5px_rgba(201,255,47,0.3)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C9FF2F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C9FF2F]"></span>
            </span>
            Available for Opportunities
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-none text-white mb-6 tracking-tight">
            Pure <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              Energy
            </span>
          </h1>
          
          <div className="pl-2 mb-8 border-l-4 border-[#C9FF2F] ml-1">
            <p className="text-slate-300 text-xl md:text-2xl font-light mb-2">
              I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>
            </p>
            <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
              Engineering high-voltage systems & smart automation. 
              <br/>
              <span className="text-[#3AA0FF] font-medium">Making electricity smart.</span>
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a 
              href="#projects"
              className="px-8 py-4 bg-white text-black hover:bg-[#C9FF2F] rounded-full font-bold tracking-wide transition-all flex items-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(201,255,47,0.6)] hover:-translate-y-1"
            >
              Explore Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 border border-white/20 hover:border-white text-white rounded-full font-medium tracking-wide transition-all flex items-center gap-2 backdrop-blur-md hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>
          
          <div className="mt-16 flex gap-12 border-t border-white/10 pt-8">
            <div>
              <div className="text-4xl font-bold text-white font-mono tracking-tighter">3rd</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Sem</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white font-mono tracking-tighter">10+</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest mt-1">Projects</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;