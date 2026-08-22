import React from 'react';
import { motion } from 'framer-motion';
import { EDUCATION_HISTORY } from '../data/portfolioData';

const Education = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="education" className="section-anchor py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">

        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent-purple" />
              <span className="text-xs font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
                09 // ACADEMIC FOUNDATION
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-gray-900 dark:text-white">
              EDUCATION & <span className="text-gradient dark:text-gradient">COURSEWORK</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Computer science, bioscience, computational engineering, and foundational sciences.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EDUCATION_HISTORY.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <div
                className={`p-5 rounded-3xl border h-full flex flex-col justify-between ${
                  idx === 0
                    ? isDark
                      ? 'glass-card-dark border-accent-purple/30 bg-[#0c101d]'
                      : 'glass-card-light bg-white border-[#D8DCE5] shadow-sm'
                    : isDark
                    ? 'border-white/10 bg-white/[0.02]'
                    : 'border-[#D8DCE5] bg-white shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span className="font-mono text-xs text-accent-purple dark:text-accent-cyan font-bold">
                      {edu.period}
                    </span>
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200">
                      {edu.score}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-base text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="font-mono text-xs text-gray-600 dark:text-gray-400 mt-1 font-medium">
                    {edu.institution}
                  </h4>

                  {edu.highlights && (
                    <div className="mt-3 pt-2.5 border-t border-gray-200 dark:border-white/5 space-y-1 text-xs text-gray-600 dark:text-gray-400 font-mono">
                      {edu.highlights.map((item, hIdx) => (
                        <p key={hIdx} className="leading-relaxed">
                          • {item}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;