import React from 'react';
import { motion } from 'framer-motion';
import { IDENTITY_STATEMENT } from '../data/portfolioData';

const IdentityStatement = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="section-anchor py-14 sm:py-20 px-4 sm:px-6 relative z-10 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-8 bg-lab-accentViolet" />
          <span className="text-xs font-mono tracking-widest text-lab-accentIndigo uppercase font-bold">
            01 // CORE PHILOSOPHY
          </span>
        </div>

        {/* Large Editorial Statement */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="space-y-4 sm:space-y-6 md:space-y-8"
        >
          {IDENTITY_STATEMENT.lines.map((line, index) => (
            <motion.div
              key={index}
              variants={lineVariants}
              className="relative"
            >
              <h2 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[62px] tracking-tight leading-[1.28] sm:leading-[1.32] md:leading-[1.35] select-none break-words">
                {index === 0 && (
                  <span className="text-[#4B5380] font-bold inline-block pt-1 pb-2">
                    {line}
                  </span>
                )}
                {index === 1 && (
                  <span className="font-black bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#06B6D4] bg-clip-text text-transparent inline-block pt-1 pb-2 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                    {line}
                  </span>
                )}
                {index === 2 && (
                  <span className="text-[#12142A] font-black inline-block pt-1 pb-2">
                    {line}
                  </span>
                )}
                {index === 3 && (
                  <span className="font-black bg-gradient-to-r from-[#4F46E5] via-[#8B5CF6] to-[#0EA5E9] bg-clip-text text-transparent inline-block pt-1 pb-2 [box-decoration-break:clone] [-webkit-box-decoration-break:clone]">
                    {line}
                  </span>
                )}
              </h2>
            </motion.div>
          ))}
        </motion.div>

        {/* Author Signoff Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-6 border-t border-indigo-100 flex flex-wrap items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-lab-accentViolet animate-pulse" />
            <span className="text-xs font-mono text-lab-ink uppercase tracking-wider font-bold">
              {IDENTITY_STATEMENT.quoteRole}
            </span>
          </div>
          <span className="text-xs font-mono text-lab-accentIndigo tracking-widest uppercase font-bold">
            [ KARAN GARG • PORTFOLIO 2026 ]
          </span>
        </motion.div>

      </div>
    </section>
  );
};

export default IdentityStatement;
