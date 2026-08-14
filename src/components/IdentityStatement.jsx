import React from 'react';
import { motion } from 'framer-motion';
import { IDENTITY_STATEMENT } from '../data/portfolioData';

const IdentityStatement = ({ theme }) => {
  const isDark = theme === 'dark';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-accent-purple" />
          <span className="text-xs font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
            01 // CORE PHILOSOPHY
          </span>
        </div>

        {/* Large Editorial Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-2 sm:space-y-3"
        >
          {IDENTITY_STATEMENT.lines.map((line, index) => {
            const isHighlighted = index === 1 || index === 3;
            return (
              <motion.div
                key={index}
                variants={lineVariants}
                className="overflow-hidden"
              >
                <h2
                  className={`font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-tight leading-[1.14] ${
                    index === 0
                      ? 'text-gray-500 dark:text-gray-400 font-bold'
                      : isHighlighted
                      ? 'text-gradient dark:text-gradient'
                      : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {line}
                </h2>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Author signoff tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 pt-5 border-t border-gray-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-accent-purple animate-pulse" />
            <span className="text-xs font-mono text-gray-700 dark:text-gray-400 uppercase tracking-wider font-bold">
              {IDENTITY_STATEMENT.quoteRole}
            </span>
          </div>
          <span className="text-xs font-mono text-accent-purple dark:text-accent-cyan tracking-widest uppercase font-bold">
            [ KARAN GARG • PORTFOLIO 2026 ]
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default IdentityStatement;
