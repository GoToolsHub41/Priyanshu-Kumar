import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { Zap } from 'lucide-react';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">Technical <span className="text-[#C9FF2F]">Arsenal</span></h2>
          <div className="flex items-center gap-4">
             <div className="h-1 w-24 bg-gradient-to-r from-[#3AA0FF] to-[#C9FF2F] rounded-full" />
             <div className="text-sm font-mono text-slate-500">PROFICIENCY MATRIX</div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative p-6 rounded-2xl bg-[#0F172A]/40 backdrop-blur-xl border border-white/10 hover:border-[#3AA0FF]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(58,160,255,0.2)]"
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-[#3AA0FF]/10 text-[#3AA0FF] group-hover:text-[#C9FF2F] transition-colors">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-5 relative z-10">
                {category.skills.map((skill, sIdx) => (
                  <div key={sIdx}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-slate-300 font-mono tracking-tight group-hover:text-white transition-colors">{skill.name}</span>
                      <span className="text-[#C9FF2F] font-bold text-xs bg-[#C9FF2F]/10 px-2 py-0.5 rounded">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden border border-white/5">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 + sIdx * 0.1 }}
                        className="h-full bg-gradient-to-r from-[#3AA0FF] to-[#C9FF2F] shadow-[0_0_10px_rgba(58,160,255,0.5)]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;