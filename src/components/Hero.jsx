import React, { useState, useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Sparkles, Terminal } from 'lucide-react';
import TiltCard3D from './ui/TiltCard3D';
import Magnetic, { MagneticButton } from './ui/Magnetic';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SITE_CONFIG } from '../config/siteConfig';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const roles = useMemo(() => PERSONAL_INFO.roles, []);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches ||
                    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsTouchDevice(isTouch);

    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeOpen = () => {
    window.open(process.env.PUBLIC_URL + SITE_CONFIG.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="home"
      className="section-anchor relative z-10 min-h-[92vh] flex items-center justify-center pt-28 sm:pt-36 lg:pt-36 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Mobile First: Portrait shown on top for mobile, right for desktop */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center relative">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] flex items-center justify-center">
              
              {/* 1. Violet-to-cyan blurred back-glow */}
              <div 
                className="absolute inset-2 rounded-card bg-gradient-to-tr from-lab-accentViolet/35 via-lab-accentIndigo/30 to-lab-accentCyan/35 blur-3xl pointer-events-none -z-10 animate-pulse-soft"
                aria-hidden="true" 
              />

              {/* 2. Rotating dashed orbit rings behind card at different depths */}
              <div 
                className="absolute w-[115%] h-[115%] rounded-full border-2 border-dashed border-indigo-300/40 pointer-events-none -z-10 animate-orbit-spin"
                aria-hidden="true"
              />
              <div 
                className="absolute w-[130%] h-[130%] rounded-full border border-dashed border-cyan-300/35 pointer-events-none -z-10 animate-orbit-spin-reverse"
                aria-hidden="true"
              />

              {/* 3. Floating glass chips orbiting at different Z depths */}
              {/* Chip 1: React · FastAPI */}
              <motion.div
                animate={isTouchDevice ? { y: [0, -8, 0] } : { y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-3 -left-4 sm:-left-8 z-30 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-indigo-200/60 shadow-elevation-1 flex items-center gap-2 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-lab-accentViolet" />
                <span className="font-mono text-[11px] font-bold text-lab-ink tracking-tight">
                  React · FastAPI
                </span>
              </motion.div>

              {/* Chip 2: LLM · RAG */}
              <motion.div
                animate={isTouchDevice ? { y: [0, 8, 0] } : { y: [0, 11, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/4 -right-4 sm:-right-8 z-30 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-cyan-200/60 shadow-elevation-1 flex items-center gap-2 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-lab-accentCyan" />
                <span className="font-mono text-[11px] font-bold text-lab-ink tracking-tight">
                  LLM · RAG
                </span>
              </motion.div>

              {/* Chip 3: YOLOv8 · OpenCV */}
              <motion.div
                animate={isTouchDevice ? { y: [0, -7, 0] } : { y: [0, -9, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-16 -left-3 sm:-left-6 z-30 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-purple-200/60 shadow-elevation-1 flex items-center gap-2 pointer-events-none"
              >
                <span className="w-2 h-2 rounded-full bg-lab-accentIndigo" />
                <span className="font-mono text-[11px] font-bold text-lab-ink tracking-tight">
                  YOLOv8 · OpenCV
                </span>
              </motion.div>

              {/* Chip 4: Springer 2026 */}
              <motion.div
                animate={isTouchDevice ? { y: [0, 9, 0] } : { y: [0, 12, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute -bottom-3 -right-2 sm:-right-6 z-30 px-3.5 py-1.5 rounded-full bg-white/85 backdrop-blur-md border border-indigo-200/70 shadow-elevation-1 flex items-center gap-2 pointer-events-none"
              >
                <Sparkles size={12} className="text-lab-accentViolet" />
                <span className="font-mono text-[11px] font-bold text-lab-accentIndigo tracking-tight">
                  Springer 2026
                </span>
              </motion.div>

              {/* 4. Rounded 3D Portrait Card */}
              <TiltCard3D
                maxTilt={10}
                scale={1.02}
                depth={28}
                className={`w-full h-full rounded-card border border-indigo-200/50 shadow-glass overflow-hidden bg-white/60 p-2 sm:p-2.5 ${
                  isTouchDevice ? 'animate-float-slow' : ''
                }`}
              >
                <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-gradient-to-b from-indigo-50 to-purple-50">
                  <img
                    src={process.env.PUBLIC_URL + '/karan-portrait.jpg'}
                    alt="Karan Garg - AI Engineer & Full-Stack Developer"
                    className="w-full h-full object-cover object-center filter saturate-[1.03] contrast-[1.02] select-none pointer-events-none"
                    loading="eager"
                  />
                  
                  {/* Frosted subtle bottom vignette */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-indigo-950/25 to-transparent pointer-events-none" />

                  {/* 5. Glass Name Plate Floating in front of photo */}
                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-elevation-2 flex items-center justify-between">
                    <div>
                      <h3 className="font-display font-extrabold text-sm text-lab-ink tracking-tight">
                        Karan Garg
                      </h3>
                      <p className="font-mono text-[10px] text-lab-muted font-medium">
                        AI Engineer & Full-Stack Dev
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-[9px] font-bold text-emerald-700 tracking-wider">
                        ACTIVE
                      </span>
                    </div>
                  </div>
                </div>
              </TiltCard3D>
            </div>
          </div>

          {/* Left / Text Content Column */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Pill: Pulsing green dot */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-indigo-200/60 bg-white/80 backdrop-blur-md shadow-elevation-1 mb-6"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="font-mono text-xs font-semibold text-lab-ink tracking-wide">
                Open to AI Engineer & Full-Stack roles
              </span>
            </motion.div>

            {/* Giant Name with Masked Line-by-Line Reveal on Load */}
            <div className="overflow-hidden mb-3">
              <motion.h1
                initial={{ y: "115%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="hero-giant-title text-lab-ink select-none"
              >
                KARAN <span className="text-gradient-hero">GARG</span>
              </motion.h1>
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mb-4"
            >
              <h2 className="font-display font-extrabold text-lg sm:text-2xl md:text-3xl tracking-tight text-lab-ink">
                {PERSONAL_INFO.tagline}
              </h2>
            </motion.div>

            {/* Dynamic Role Switcher */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="flex items-center gap-2.5 h-8 mb-5"
            >
              <span className="font-mono text-xs sm:text-sm text-lab-muted font-medium uppercase tracking-wider">
                Specialized in
              </span>
              <div className="relative inline-block overflow-hidden h-7">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roles[roleIndex]}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="font-mono text-xs sm:text-sm font-bold px-3 py-1 rounded-lg bg-indigo-100/70 border border-indigo-200/70 text-lab-accentIndigo inline-block"
                  >
                    {roles[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Bio Statement */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              className="text-base sm:text-lg font-normal leading-relaxed text-lab-muted max-w-xl mb-8"
            >
              Architecting scalable AI applications, LLM systems, and high-performance full-stack web platforms with Python, FastAPI, React, and Machine Learning.
            </motion.p>

            {/* CTAs: "View projects" (gradient magnetic) and "Résumé" (glass magnetic) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.44 }}
              className="flex flex-wrap items-center gap-4 w-full mb-10"
            >
              {/* Primary CTA: View projects */}
              <MagneticButton
                variant="primary"
                onClick={() => scrollToSection('#projects')}
                icon={<ArrowRight size={16} />}
              >
                <span>VIEW PROJECTS</span>
              </MagneticButton>

              {/* Secondary CTA: Résumé */}
              <MagneticButton
                variant="glass"
                onClick={handleResumeOpen}
                icon={<ArrowUpRight size={16} />}
              >
                <span>RÉSUMÉ</span>
              </MagneticButton>
            </motion.div>

            {/* Supporting Peer-Reviewed Banner Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-3 pt-6 border-t border-indigo-100/80 w-full"
            >
              <a
                href="#publications"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#publications');
                }}
                className="group inline-flex items-center gap-2 text-xs font-mono font-semibold text-lab-muted hover:text-lab-accentIndigo transition-colors"
              >
                <div className="w-5 h-5 rounded-md bg-purple-100 flex items-center justify-center text-lab-accentViolet">
                  <Terminal size={12} />
                </div>
                <span>Discover Computing • Springer 2026 Co-Author</span>
                <ArrowRight size={12} className="transition-transform group-hover:translate-x-1 text-lab-accentIndigo" />
              </a>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;