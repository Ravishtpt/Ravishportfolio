
'use client';

import CircuitCanvas from './CircuitCanvas';
import { MotionCurve } from './MotionCurve';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ee-dark via-ee-panel to-ee-dark" />
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ee-cyan/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ee-copper/10 rounded-full blur-[120px] pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* STATUS */}
        <div className="mb-8 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ee-cyan animate-pulse" />
          <span className="text-ee-cyan text-sm font-mono tracking-widest">
            Think. Design. Innovate.
          </span>
        </div>

        {/* NAME - TOP */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight leading-[1.1]"
        >
          Ravish M K
        </motion.h1>

        {/* DESIGNATION - BELOW NAME */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-lg md:text-2xl font-medium text-ee-cyan mb-8"
        >
          Diploma Electrical Engineer
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-ee-slate mb-10 max-w-2xl leading-relaxed"
        >
          Creative and proactive circuit designer specializing in circuit
          design and analysis. Final-year diploma student in Electrical &
          Electronics Engineering building IoT and hardware projects.
        </motion.p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-white text-ee-dark font-semibold rounded-lg overflow-hidden transition-all hover:bg-ee-cyan hover:text-ee-dark"
          >
            <span className="relative z-10">View Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>

          <a
            href="#contact"
            className="group relative px-8 py-4 bg-transparent text-white border border-ee-border/60 rounded-lg hover:bg-ee-cyan/10 hover:border-ee-cyan/50 transition-all"
          >
            <span className="relative z-10">Contact Me</span>
          </a>
        </div>

        {/* CIRCUIT ANIMATION */}
        <div className="relative z-10 w-full max-w-4xl">
          <CircuitCanvas className="w-full h-[400px] md:h-[520px] rounded-2xl border border-ee-border/50 shadow-2xl shadow-ee-cyan/10" />
        </div>

        {/* BOTTOM SIGNAL */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex items-center justify-center gap-2 text-ee-slate/60 text-sm"
        >
          <MotionCurve color={0x00d4ff} width={120} height={3} />
          <span className="font-mono text-xs uppercase tracking-widest">
            signal active
          </span>
          <MotionCurve color={0x00d4ff} width={120} height={3} />
        </motion.div>

      </div>
    </section>
  );
}
