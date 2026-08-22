import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Cpu, Database, Network, Sparkles } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import Magnetic from './ui/Magnetic';
import { PERSONAL_INFO } from '../data/portfolioData';

const Hero = ({ theme }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const isDark = theme === 'dark';
  const roles = useMemo(() => PERSONAL_INFO.roles, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const navOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="section-anchor relative z-10 min-h-[85vh] flex items-center justify-center pt-32 sm:pt-40 lg:pt-44 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >



      <div className="max-w-5xl w-full mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Status Badges */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-2 mb-6"
          >
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-mono tracking-widest uppercase font-bold ${
              isDark
                ? 'border-accent-purple/30 bg-accent-purple/10 text-accent-cyan shadow-glow-purple/20'
                : 'border-accent-purple/30 bg-purple-50 text-accent-purple shadow-sm'
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>AI ENGINEER • FULL-STACK DEVELOPER</span>
            </div>

            <a
              href="#publications"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#publications')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-wider uppercase font-bold transition-all hover:scale-105 ${
                isDark
                  ? 'border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan hover:border-accent-cyan'
                  : 'border-accent-purple/30 bg-indigo-50 text-accent-purple hover:border-accent-purple shadow-sm'
              }`}
            >
              <Sparkles size={12} className="text-accent-purple dark:text-accent-cyan" />
              <span>PUBLISHED IN SPRINGER 2026 ↗</span>
            </a>
          </motion.div>

          {/* Prominent Name Header with Kinetic Responsive Scaling */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-[clamp(3.5rem,10vw,7.5rem)] tracking-tight leading-[0.96] text-gray-900 dark:text-white select-none"
          >
            KARAN <span className="text-gradient dark:text-gradient">GARG</span>
          </motion.h1>


          {/* Core Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-4"
          >
            <h2 className="font-display font-extrabold text-xl sm:text-2xl md:text-3xl tracking-tight text-gray-800 dark:text-gray-200">
              BUILDING INTELLIGENT SYSTEMS FOR THE REAL WORLD.
            </h2>
          </motion.div>

          {/* Animated Role Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-4 flex items-center justify-center gap-2 h-8"
          >
            <span className="font-mono text-xs sm:text-sm text-gray-700 dark:text-gray-400 font-semibold uppercase tracking-wider">
              Specialized in
            </span>
            <div className="relative inline-block overflow-hidden h-7">
              <AnimatePresence mode="wait">
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ y: 18, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -18, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="font-mono text-xs sm:text-sm font-bold px-3 py-0.5 rounded-lg bg-accent-purple/15 dark:bg-accent-purple/20 border border-accent-purple/40 text-accent-purple dark:text-accent-cyan inline-block"
                >
                  {roles[roleIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Bio Statement */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-5 text-base sm:text-lg font-medium leading-relaxed max-w-2xl text-gray-800 dark:text-gray-300"
          >
            Architecting scalable AI applications, LLM systems, and high-performance full-stack web platforms with Python, FastAPI, React, and Machine Learning.
          </motion.p>

          {/* Action CTAs - Clean, balanced 2-button layout */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 w-full"
          >
            {/* 1. Primary CTA: VIEW MY WORK */}
            <Magnetic range={45} strength={0.35}>
              <button
                onClick={() => scrollToSection('#projects')}
                className="px-8 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-bold tracking-wider text-white bg-gradient-to-r from-accent-purple via-accent-violet to-accent-cyan shadow-glow-purple hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2 group"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>
            </Magnetic>

            {/* 2. Secondary CTA: LET'S TALK */}
            <Magnetic range={45} strength={0.35}>
              <button
                onClick={() => scrollToSection('#contact')}
                className={`px-8 py-3.5 rounded-2xl font-mono text-xs sm:text-sm font-bold tracking-wider transition-all flex items-center gap-2 border ${
                  isDark
                    ? 'border-white/15 bg-white/5 text-gray-100 hover:text-white hover:bg-white/10 hover:border-white/30'
                    : 'border-[#D8DCE5] bg-white text-[#090A0F] hover:border-accent-purple shadow-sm'
                }`}
              >
                <span>LET'S TALK</span>
                <ArrowUpRight size={15} />
              </button>
            </Magnetic>
          </motion.div>

          {/* Social Quick Links & Proof Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 pt-6 border-t border-gray-200 dark:border-white/10 w-full flex flex-wrap items-center justify-between gap-4"
          >
            {/* Social handles */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-gray-600 dark:text-gray-400 uppercase font-bold">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl border transition-colors ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-gray-200 hover:text-white hover:border-accent-purple/50'
                    : 'border-[#D8DCE5] bg-white text-[#090A0F] hover:border-accent-purple shadow-sm'
                }`}
                aria-label="GitHub"
              >
                <FaGithub size={14} />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 rounded-xl border transition-colors ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-gray-200 hover:text-white hover:border-accent-blue/50'
                    : 'border-[#D8DCE5] bg-white text-[#090A0F] hover:border-[#4F46E5] shadow-sm'
                }`}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={14} />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className={`p-2 rounded-xl border transition-colors ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-gray-200 hover:text-white hover:border-accent-cyan/50'
                    : 'border-[#D8DCE5] bg-white text-[#090A0F] hover:border-accent-purple shadow-sm'
                }`}
                aria-label="Email"
              >
                <FaEnvelope size={14} />
              </a>
            </div>

            {/* Quick architectural badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border text-xs font-mono font-bold ${
                isDark ? 'border-white/10 bg-white/5 text-gray-200' : 'border-[#D8DCE5] bg-white text-[#090A0F] shadow-sm'
              }`}>
                <Cpu size={12} className="text-accent-purple" />
                <span>LLM Architectures</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border text-xs font-mono font-bold ${
                isDark ? 'border-white/10 bg-white/5 text-gray-200' : 'border-[#D8DCE5] bg-white text-[#090A0F] shadow-sm'
              }`}>
                <Network size={12} className="text-accent-cyan" />
                <span>FastAPI + React</span>
              </div>
              <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border text-xs font-mono font-bold ${
                isDark ? 'border-white/10 bg-white/5 text-gray-200' : 'border-[#D8DCE5] bg-white text-[#090A0F] shadow-sm'
              }`}>
                <Database size={12} className="text-emerald-500" />
                <span>Vector RAG</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;