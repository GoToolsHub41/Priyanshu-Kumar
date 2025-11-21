import React from 'react';
import Navbar from './components/Navbar';
import Scene from './components/Scene';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Certificates from './components/Certificates';

const App: React.FC = () => {
  return (
    <main className="bg-[#020617] text-slate-200 selection:bg-[#C9FF2F] selection:text-black overflow-hidden">
      <Navbar />
      
      {/* 3D Background Scene */}
      <Scene />
      
      {/* Content Sections */}
      <div className="relative">
        <Hero />
        
        <div className="relative z-10 bg-[#020617]">
            {/* About / Timeline could go here, merging with Hero for flow */}
            <div id="about" className="py-20 px-6 max-w-4xl mx-auto text-center">
              <h2 className="text-sm font-mono text-[#C9FF2F] mb-4">ABOUT ME</h2>
              <p className="text-2xl md:text-3xl font-light text-slate-300 leading-relaxed">
                I am an aspiring Electrical Engineer passionate about the intersection of <span className="text-white font-semibold">Power Systems</span> and <span className="text-white font-semibold">Smart Technologies</span>. From wiring circuits to coding PLCs, I love making things move.
              </p>
            </div>
        </div>

        <Skills />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
