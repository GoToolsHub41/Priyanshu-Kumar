import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { Mail, MapPin, School } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative z-10 bg-[#020617]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl p-8 md:p-12 border border-white/10 overflow-hidden relative"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-[#3AA0FF] rounded-full mix-blend-screen filter blur-[100px] opacity-20 pointer-events-none" />

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Let's <span className="text-[#C9FF2F]">Connect</span></h2>
              <p className="text-slate-400 mb-8">
                I am currently looking for internships and opportunities in Electrical Engineering, Automation, and Embedded Systems.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/5 text-[#3AA0FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-[#C9FF2F] transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/5 text-[#3AA0FF]">
                    <School className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Education</h3>
                    <p className="text-slate-400 text-sm">{PERSONAL_INFO.education}</p>
                    <p className="text-slate-500 text-xs mt-1">{PERSONAL_INFO.college}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-white/5 text-[#3AA0FF]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Location</h3>
                    <p className="text-slate-400">Manikpur, Uttar Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-slate-400 text-sm mb-2 font-mono">NAME</label>
                <input type="text" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-[#3AA0FF] focus:outline-none focus:ring-1 focus:ring-[#3AA0FF] transition-all" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2 font-mono">EMAIL</label>
                <input type="email" className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-[#3AA0FF] focus:outline-none focus:ring-1 focus:ring-[#3AA0FF] transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-slate-400 text-sm mb-2 font-mono">MESSAGE</label>
                <textarea rows={4} className="w-full bg-black/30 border border-white/10 rounded-lg p-3 text-white focus:border-[#3AA0FF] focus:outline-none focus:ring-1 focus:ring-[#3AA0FF] transition-all" placeholder="Discuss a project or opportunity..."></textarea>
              </div>
              <button className="w-full py-3 bg-[#3AA0FF] hover:bg-blue-600 text-white font-bold rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
