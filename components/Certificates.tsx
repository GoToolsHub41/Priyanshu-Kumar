import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATES } from '../constants';
import { Award } from 'lucide-react';

const Certificates: React.FC = () => {
  return (
    <section className="py-24 relative z-10 bg-[#0B1121]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Certifications</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-[#1E293B]/50 backdrop-blur p-6 rounded-xl border border-white/5 flex items-start gap-4 hover:border-[#C9FF2F]/30 transition-colors"
            >
              <div className="p-3 bg-[#C9FF2F]/10 rounded-lg text-[#C9FF2F]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg leading-tight mb-1">{cert.name}</h3>
                <p className="text-[#3AA0FF] text-sm mb-2">{cert.issuer}</p>
                <div className="flex gap-3 text-xs text-slate-500 font-mono">
                  <span>{cert.date}</span>
                  <span>•</span>
                  <span>{cert.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
