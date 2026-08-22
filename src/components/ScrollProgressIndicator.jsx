import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const sectionsList = [
  { id: 'home', label: 'HERO', num: '01' },
  { id: 'projects', label: 'PROJECTS', num: '02' },
  { id: 'pipeline', label: 'PIPELINE', num: '03' },
  { id: 'stack', label: 'STACK', num: '04' },
  { id: 'skills', label: 'SKILLS', num: '05' },
  { id: 'experience', label: 'EXPERIENCE', num: '06' },
  { id: 'about', label: 'ABOUT', num: '07' },
  { id: 'certifications', label: 'CERTIFICATIONS', num: '08' },
  { id: 'publications', label: 'RESEARCH', num: '09' },
  { id: 'contact', label: 'CONTACT', num: '10' },
];

const ScrollProgressIndicator = ({ theme }) => {
  const [activeSection, setActiveSection] = useState(sectionsList[0]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const scrollPos = window.scrollY + 160;

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
    <div className="fixed right-6 bottom-8 z-40 hidden xl:flex flex-col items-end gap-2 pointer-events-none select-none">
      <div className={`px-3 py-1.5 rounded-full border backdrop-blur-md transition-all flex items-center gap-2 ${
        isDark
          ? 'border-white/10 bg-[#0e0e15]/80 text-white shadow-xl'
          : 'border-[#E4E4EA] bg-white/90 text-[#111113] shadow-md'
      }`}>
        <span className="w-1.5 h-1.5 rounded-full bg-accent-purple animate-pulse" />
        <span className="font-mono text-[10px] font-bold text-accent-purple dark:text-accent-cyan">
          {activeSection.num} / 10
        </span>
        <span className="font-mono text-[10px] font-semibold text-gray-500 uppercase">
          • {activeSection.label}
        </span>
      </div>


      {/* Thin mini progress track */}
      <div className="w-24 h-[2px] bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-accent-purple to-accent-cyan"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </div>
  );
};

export default ScrollProgressIndicator;
