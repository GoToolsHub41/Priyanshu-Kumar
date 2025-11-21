import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { CircuitBoard, Cpu, Zap, ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-32 relative z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-full h-[500px] bg-[#3AA0FF]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-20 md:flex justify-between items-end"
        >
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
              Engineering <span className="text-[#3AA0FF]">Works</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Applying theoretical knowledge to build practical solutions in automation, power, and embedded systems.
            </p>
          </div>
          <div className="hidden md:block">
             <div className="px-4 py-2 border border-[#C9FF2F]/30 rounded-full text-[#C9FF2F] text-sm font-mono">
                SCROLL TO EXPLORE ↓
             </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group bg-[#0F172A]/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 hover:border-[#C9FF2F]/50 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_-10px_rgba(201,255,47,0.15)]"
            >
              {/* Decorative Circuit Lines BG */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
              
              <div className="p-8 relative z-10 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent border border-blue-500/20 text-[#3AA0FF] group-hover:text-white group-hover:border-[#3AA0FF] transition-all">
                    {idx % 2 === 0 ? <Cpu className="w-8 h-8" /> : <CircuitBoard className="w-8 h-8" />}
                  </div>
                  <div className="text-xs font-mono text-slate-500 border border-white/5 px-2 py-1 rounded">
                    PROJ-{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#C9FF2F] transition-colors flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
                </h3>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow">{project.description}</p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 text-[11px] uppercase tracking-wider rounded-md bg-white/5 text-slate-300 border border-white/5 font-bold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/5">
                    <h4 className="text-[10px] text-[#3AA0FF] font-bold mb-3 uppercase tracking-widest flex items-center gap-1">
                      <Zap className="w-3 h-3" /> Specifications
                    </h4>
                    <ul className="text-xs text-slate-400 font-mono space-y-2">
                      {project.specs.map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                           <span className="w-1.5 h-1.5 rounded-full bg-[#C9FF2F] shadow-[0_0_5px_#C9FF2F]" /> 
                           {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#3AA0FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;