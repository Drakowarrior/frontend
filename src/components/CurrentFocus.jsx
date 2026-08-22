import React from 'react';
import { motion } from 'framer-motion';
import { CURRENT_FOCUS } from '../data/portfolioData';

const CurrentFocus = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className="section-anchor py-4 sm:py-6 px-4 sm:px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">


        <div
          className={`p-5 sm:p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
            isDark
              ? 'glass-card-dark border-accent-purple/25 bg-gradient-to-r from-[#0c101d] via-[#0e1424] to-[#0c101d]'
              : 'glass-card-light bg-white border-[#D8DCE5] shadow-sm'
          }`}
        >
          {/* Subtle Ambient light inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            
            {/* Live Status indicator */}
            <div className="flex items-start gap-3.5 shrink-0">
              <div className="relative mt-1">
                <span className="flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                    ACTIVE STATUS
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-[10px] font-mono tracking-wider text-gray-600 dark:text-gray-400">
                    REAL-TIME
                  </span>
                </div>
                <h3 className="font-display font-black text-lg sm:text-xl text-gray-900 dark:text-white mt-0.5">
                  CURRENTLY BUILDING
                </h3>
              </div>
            </div>

            {/* Live Focus Tags */}
            <div className="flex flex-wrap items-center gap-2 max-w-2xl">
              {CURRENT_FOCUS.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 border transition-all duration-300 ${
                    isDark
                      ? 'border-white/10 bg-white/5 text-gray-200 hover:border-accent-purple/50 hover:bg-accent-purple/10'
                      : 'border-[#D8DCE5] bg-gray-50 text-[#090A0F] hover:border-accent-purple shadow-sm'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-purple dark:bg-accent-cyan" />
                  <span className="font-bold">{item.label}</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 hidden sm:inline">[{item.tag}]</span>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
