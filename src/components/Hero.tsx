
'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-x-clip pt-24 pb-12"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-ee-dark via-ee-panel to-ee-dark" />

      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ee-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ee-copper/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col items-center text-center">

        {/* TOP TAGLINE */}
        <div className="mb-6 sm:mb-8 flex items-center justify-center gap-2">
          <span className="w-2 h-2 rounded-full bg-ee-cyan animate-pulse shrink-0" />
          <span className="text-ee-cyan text-xs sm:text-sm font-mono tracking-widest">
            Think. Design. Innovate.
          </span>
        </div>

        {/* NAME */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight leading-tight"
        >
          Ravish M K
        </motion.h1>

        {/* DESIGNATION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-base sm:text-lg md:text-2xl font-medium text-ee-cyan mb-6 sm:mb-8"
        >
          Diploma Electrical Engineer
        </motion.p>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-2xl text-base sm:text-lg md:text-xl text-ee-slate mb-8 sm:mb-10 leading-relaxed px-1"
        >
          Creative and proactive circuit designer specializing in circuit
          design and analysis. Final-year diploma student in Electrical &
          Electronics Engineering building IoT and hardware projects.
        </motion.p>

        {/* BUTTONS */}
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16">
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
      </div>
    </section>
  );
}
