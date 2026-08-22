import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, ShieldCheck, Zap, Cpu, Award } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import Tilt3D from './ui/Tilt3D';
import Magnetic from './ui/Magnetic';
import CountUp from './ui/CountUp';
import { RESEARCH_PUBLICATIONS } from '../data/portfolioData';

const ResearchPublications = ({ theme }) => {
  const isDark = theme === 'dark';
  const pub = RESEARCH_PUBLICATIONS[0];

  return (
    <section id="publications" className="section-anchor py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      {/* Background Ambient Glow Accent */}

      <div className={`absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-accent-purple/10' : 'bg-purple-200/30'
      }`} />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent-purple" />
              <span className="text-xs font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
                08.5 // PUBLISHED RESEARCH
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
              RESEARCH & <span className="text-gradient dark:text-gradient">PUBLICATIONS</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Peer-reviewed scientific contributions bridging sustainable computing, green AI, and industrial digital defense.
          </p>
        </div>

        {/* Main Publication Showcase Hero Card */}
        <Tilt3D maxTilt={2} scale={1.006} className="w-full">
          <div
            className={`p-6 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden ${
              isDark
                ? 'glass-card-dark border-white/10 bg-gradient-to-br from-[#0c101d] via-[#090d18] to-[#060811] shadow-2xl'
                : 'glass-card-light bg-white border-[#D8DCE5] shadow-lg'
            }`}
          >
            {/* Top Badge Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple dark:text-accent-cyan border border-accent-purple/30 flex items-center gap-1.5">
                  <Award size={13} />
                  <span>{pub.badge}</span>
                </span>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">
                  • {pub.journal}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-gray-600 dark:text-gray-400">
                DOI: {pub.doi}
              </span>
            </div>

            {/* Title & One-Line Hook */}
            <div className="mb-8">
              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-white tracking-tight leading-snug">
                {pub.title}
              </h3>
              <p className="mt-3 font-mono text-xs sm:text-sm font-bold text-accent-purple dark:text-accent-cyan italic tracking-wide">
                "{pub.hook}"
              </p>
            </div>

            {/* 3 Hero Metric Counter Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {pub.metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`p-5 rounded-2xl border transition-all ${
                    isDark
                      ? 'border-white/10 bg-white/[0.03] hover:border-accent-purple/40'
                      : 'border-[#E4E4EA] bg-gray-50/70 hover:border-accent-purple shadow-sm'
                  }`}
                >
                  <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gradient dark:text-gradient mb-1">
                    <CountUp to={metric.value} decimals={1} suffix={metric.suffix} />
                  </div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-gray-900 dark:text-white">
                    {metric.label}
                  </h4>
                  <p className="text-[11px] font-mono text-gray-500 dark:text-gray-400 mt-1 leading-normal">
                    {metric.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Abstract Summary */}
            <div className="mb-8 p-5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
              <h4 className="text-xs font-mono font-bold text-gray-500 uppercase tracking-widest mb-2">
                ABSTRACT SUMMARY
              </h4>
              <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                {pub.abstract}
              </p>
            </div>

            {/* Co-Authors & Academic Affiliation */}
            <div className="pt-6 border-t border-gray-200 dark:border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-[11px] font-mono font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest block mb-2">
                  CO-AUTHORS & RESEARCH COLLABORATORS
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {pub.authors.map((author, aIdx) => (
                    <div key={aIdx} className="inline-flex items-center">
                      {author.url ? (
                        <a
                          href={author.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded-xl text-xs font-mono font-bold border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-800 dark:text-gray-200 hover:border-accent-purple hover:text-accent-purple dark:hover:text-accent-cyan flex items-center gap-1.5 transition-all"
                        >
                          <FaLinkedin size={12} className="text-[#0A66C2]" />
                          <span>{author.name}</span>
                          <span className="text-[10px] text-gray-400 font-normal">({author.role.split(' ')[0]})</span>
                        </a>
                      ) : (
                        <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-accent-purple/15 text-accent-purple border border-accent-purple/30">
                          {author.name} (Primary)
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Primary Action Button */}
              <div className="shrink-0">
                <Magnetic range={40} strength={0.35}>
                  <a
                    href={pub.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 rounded-2xl font-mono text-xs font-bold text-white bg-gradient-to-r from-accent-purple via-accent-violet to-accent-cyan shadow-glow-purple flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all group"
                  >
                    <BookOpen size={15} />
                    <span>READ THE PAPER</span>
                    <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Affiliation Note */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/5 text-[11px] font-mono text-gray-500 dark:text-gray-400">
              <span>{pub.affiliation}</span>
            </div>

          </div>
        </Tilt3D>

      </div>
    </section>
  );
};

export default ResearchPublications;
