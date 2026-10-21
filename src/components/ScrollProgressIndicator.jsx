import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const sectionsList = [
  { id: 'home', label: 'HERO', num: '01' },
  { id: 'projects', label: 'PROJECTS', num: '02' },
  { id: 'pipeline', label: 'METHODOLOGY', num: '03' },
  { id: 'stack', label: 'CONSTELLATION', num: '04' },
  { id: 'skills', label: 'SKILLS', num: '05' },
  { id: 'experience', label: 'EXPERIENCE', num: '06' },
  { id: 'about', label: 'ABOUT', num: '07' },
  { id: 'certifications', label: 'CERTIFICATES', num: '08' },
  { id: 'publications', label: 'RESEARCH', num: '09' },
  { id: 'education', label: 'EDUCATION', num: '10' },
  { id: 'contact', label: 'CONTACT', num: '11' },
];

const ScrollProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState(sectionsList[0]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 280,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = sectionsList.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionsList[i].id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionsList[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 1. Thin top gradient scroll bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan origin-left pointer-events-none"
        style={{ scaleX, zIndex: 100 }}
      />

      {/* 2. Floating glass section pill (bottom right on desktop) */}
      <div className="fixed right-6 bottom-8 z-40 hidden xl:flex flex-col items-end gap-2 pointer-events-none select-none">
        <div className="px-3.5 py-1.5 rounded-full border border-indigo-200/60 bg-white/80 backdrop-blur-md shadow-elevation-1 flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-lab-accentViolet animate-pulse" />
          <span className="font-mono text-[11px] font-bold text-lab-accentIndigo">
            {activeSection.num} / 11
          </span>
          <span className="font-mono text-[11px] font-semibold text-lab-muted uppercase">
            • {activeSection.label}
          </span>
        </div>
      </div>
    </>
  );
};

export default ScrollProgressIndicator;
