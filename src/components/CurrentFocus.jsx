import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { CURRENT_FOCUS } from '../data/portfolioData';

const CurrentFocus = () => {
  return (
    <section className="section-anchor py-8 sm:py-10 px-4 sm:px-6 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="glass-panel p-6 sm:p-8 relative overflow-hidden">
          
          {/* Subtle Ambient Radial Wash */}
          <div 
            className="absolute -top-12 -right-12 w-72 h-72 bg-gradient-to-br from-purple-200/40 via-indigo-200/30 to-cyan-100/30 rounded-full blur-3xl pointer-events-none" 
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            
            {/* Live Status indicator */}
            <div className="flex items-start gap-4 shrink-0">
              <div className="relative mt-1">
                <span className="flex h-3.5 w-3.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold tracking-widest text-emerald-700 uppercase">
                    LIVE STATUS
                  </span>
                  <span className="text-indigo-200">•</span>
                  <span className="text-[11px] font-mono tracking-wider text-lab-muted">
                    REAL-TIME
                  </span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl text-lab-ink mt-0.5 tracking-tight flex items-center gap-2">
                  <span>CURRENTLY BUILDING</span>
                  <Sparkles size={16} className="text-lab-accentViolet animate-pulse" />
                </h3>
              </div>
            </div>

            {/* Floating Glass Tiles with Slow Vertical Drift */}
            <div className="flex flex-wrap items-center gap-3 max-w-2xl">
              {CURRENT_FOCUS.map((item, index) => {
                const driftDuration = 5 + (index % 3) * 1.5;
                const driftOffset = (index % 2 === 0 ? 1 : -1) * 6;

                return (
                  <motion.div
                    key={index}
                    animate={{ y: [0, driftOffset, 0] }}
                    transition={{
                      duration: driftDuration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.35,
                    }}
                    whileHover={{ scale: 1.05, y: -4 }}
                    className="px-4 py-2.5 rounded-2xl bg-white/80 backdrop-blur-md border border-indigo-200/60 shadow-elevation-1 hover:shadow-elevation-2 hover:border-indigo-300 transition-all flex items-center gap-2.5 cursor-pointer group"
                  >
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-lab-accentViolet to-lab-accentCyan" />
                    <span className="font-display font-bold text-xs sm:text-sm text-lab-ink group-hover:text-lab-accentIndigo transition-colors">
                      {item.label}
                    </span>
                    <span className="text-[10px] font-mono text-lab-muted font-medium bg-indigo-50/80 px-2 py-0.5 rounded-md border border-indigo-100">
                      {item.tag}
                    </span>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentFocus;
