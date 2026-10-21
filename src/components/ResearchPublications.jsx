import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Award, Sparkles } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import TiltCard3D from './ui/TiltCard3D';
import Magnetic from './ui/Magnetic';
import CountUp from './ui/CountUp';
import { RESEARCH_PUBLICATIONS } from '../data/portfolioData';

const ResearchPublications = () => {
  const pub = RESEARCH_PUBLICATIONS[0];

  return (
    <section id="publications" className="section-anchor py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      {/* Background Ambient Glow Accent */}
      <div 
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-gradient-to-tr from-purple-200/40 via-indigo-200/30 to-cyan-100/30 blur-[130px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-lab-accentViolet" />
              <span className="text-xs font-mono tracking-widest text-lab-accentIndigo uppercase font-bold">
                08.5 // PUBLISHED RESEARCH
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-lab-ink">
              RESEARCH & <span className="text-gradient-hero">PUBLICATIONS</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-lab-muted max-w-md">
            Peer-reviewed scientific contributions bridging sustainable computing, green AI, and industrial digital defense.
          </p>
        </div>

        {/* Main Publication Showcase Hero Card - Floating Journal Cover Aesthetic */}
        <TiltCard3D maxTilt={6} scale={1.01} depth={30} className="w-full rounded-card">
          <div className="p-6 sm:p-10 lg:p-12 rounded-card border border-indigo-200/60 bg-white/80 backdrop-blur-xl shadow-glass transition-all duration-300 relative overflow-hidden">
            
            {/* Top Badge Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-indigo-100">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold px-3.5 py-1 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 text-lab-accentIndigo border border-indigo-200/70 flex items-center gap-1.5 shadow-sm">
                  <Award size={13} className="text-lab-accentViolet" />
                  <span>{pub.badge}</span>
                </span>
                <span className="font-mono text-xs text-lab-muted font-medium hidden sm:inline">
                  • {pub.journal}
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-lab-accentIndigo bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                DOI: {pub.doi}
              </span>
            </div>

            {/* Title & Hook */}
            <div className="mb-8">
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-lab-ink tracking-tight leading-snug">
                {pub.title}
              </h3>
              <p className="mt-3.5 font-mono text-xs sm:text-sm font-semibold text-lab-accentIndigo italic tracking-wide">
                "{pub.hook}"
              </p>
            </div>

            {/* 3 Animated Metric Counter Cards with translateZ */}
            <div 
              style={{ transform: 'translateZ(26px)' }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8"
            >
              {pub.metrics.map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-2xl border border-indigo-200/60 bg-white/90 backdrop-blur-md shadow-elevation-1 hover:shadow-elevation-2 hover:border-indigo-300 transition-all"
                >
                  <div className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-gradient-hero mb-1">
                    <CountUp to={metric.value} decimals={1} suffix={metric.suffix} />
                  </div>
                  <h4 className="font-mono text-xs font-bold uppercase tracking-wider text-lab-ink">
                    {metric.label}
                  </h4>
                  <p className="text-[11px] font-mono text-lab-muted mt-1 leading-normal">
                    {metric.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Abstract Summary */}
            <div className="mb-8 p-5 sm:p-6 rounded-2xl border border-indigo-100 bg-indigo-50/40">
              <h4 className="text-xs font-mono font-bold text-lab-accentIndigo uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Sparkles size={13} />
                <span>ABSTRACT SUMMARY</span>
              </h4>
              <p className="text-xs sm:text-sm text-lab-muted leading-relaxed font-normal">
                {pub.abstract}
              </p>
            </div>

            {/* Co-Authors & Primary Action Button */}
            <div className="pt-6 border-t border-indigo-100 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <span className="text-[11px] font-mono font-bold text-lab-muted uppercase tracking-widest block mb-2.5">
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
                          className="px-3 py-1.5 rounded-xl text-xs font-mono font-bold border border-indigo-200/70 bg-white text-lab-ink hover:border-indigo-400 hover:text-lab-accentIndigo flex items-center gap-1.5 transition-all shadow-sm"
                        >
                          <FaLinkedin size={13} className="text-[#0A66C2]" />
                          <span>{author.name}</span>
                          <span className="text-[10px] text-lab-muted font-normal">({author.role.split(' ')[0]})</span>
                        </a>
                      ) : (
                        <span className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold bg-indigo-100 text-lab-accentIndigo border border-indigo-200">
                          {author.name} (Primary Author)
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* DOI Action Button */}
              <div className="shrink-0">
                <Magnetic range={40} strength={0.35}>
                  <a
                    href={pub.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 rounded-btn font-mono text-xs font-bold text-white bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan shadow-btn-glow flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all group"
                  >
                    <BookOpen size={15} />
                    <span>READ THE PAPER (DOI)</span>
                    <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </Magnetic>
              </div>
            </div>

            {/* Affiliation Note */}
            <div className="mt-6 pt-4 border-t border-indigo-50 text-[11px] font-mono text-lab-muted">
              <span>{pub.affiliation}</span>
            </div>

          </div>
        </TiltCard3D>

      </div>
    </section>
  );
};

export default ResearchPublications;
