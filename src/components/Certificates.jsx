import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import TiltCard3D from './ui/TiltCard3D';
import Magnetic from './ui/Magnetic';
import { CERTIFICATIONS } from '../data/portfolioData';
import { SITE_CONFIG } from '../config/siteConfig';

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = CERTIFICATIONS.length;

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  return (
    <section id="certifications" className="section-anchor py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header with Global Google Drive CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-lab-accentViolet" />
              <span className="text-xs font-mono tracking-widest text-lab-accentIndigo uppercase font-bold">
                08 // VERIFIED CREDENTIALS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-lab-ink">
              INDUSTRY <span className="text-gradient-hero">CERTIFICATIONS</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-lab-muted mt-1 max-w-xl">
              Verified learning, deep learning models, and professional specializations presented in a 3D coverflow carousel.
            </p>
          </div>

          {/* Primary Google Drive CTA */}
          <div className="shrink-0">
            <Magnetic range={40} strength={0.35}>
              <a
                href={SITE_CONFIG.certificationsDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-btn font-mono text-xs font-bold text-white bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan shadow-btn-glow flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all group"
              >
                <span>VIEW ALL ON DRIVE</span>
                <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* 3D Draggable Coverflow Carousel Area */}
        <div className="relative py-8 select-none">
          
          {/* Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-lab-accentIndigo">
                {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <span className="text-xs font-mono text-lab-muted hidden sm:inline">
                • Drag horizontally or use arrow triggers
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                aria-label="Previous Certificate"
                className="w-10 h-10 rounded-full border border-indigo-200/70 bg-white/80 backdrop-blur-md text-lab-ink hover:bg-white hover:border-indigo-400 flex items-center justify-center shadow-sm cursor-pointer transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Certificate"
                className="w-10 h-10 rounded-full border border-indigo-200/70 bg-white/80 backdrop-blur-md text-lab-ink hover:bg-white hover:border-indigo-400 flex items-center justify-center shadow-sm cursor-pointer transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          {/* Coverflow Stage */}
          <div className="relative min-h-[380px] sm:min-h-[340px] flex items-center justify-center overflow-hidden px-4">
            <motion.div 
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (offset.x < -40 || swipe < -500) {
                  nextSlide();
                } else if (offset.x > 40 || swipe > 500) {
                  prevSlide();
                }
              }}
              className="w-full flex items-center justify-center cursor-grab active:cursor-grabbing"
            >
              {CERTIFICATIONS.map((cert, idx) => {
                // Calculate distance relative to current active index in circular buffer
                let offset = idx - currentIndex;
                if (offset < -Math.floor(total / 2)) offset += total;
                if (offset > Math.floor(total / 2)) offset -= total;

                // Only render items close to viewport center
                if (Math.abs(offset) > 2) return null;

                const isCenter = offset === 0;
                const xTranslate = offset * 260; // horizontal separation
                const rotateY = offset * -18; // 3D coverflow rotation
                const scale = isCenter ? 1.05 : 0.85;
                const opacity = isCenter ? 1 : 0.45;
                const zIndex = isCenter ? 30 : 20 - Math.abs(offset);

                return (
                  <motion.div
                    key={cert.id || idx}
                    animate={{
                      x: xTranslate,
                      scale,
                      opacity,
                      rotateY,
                      zIndex,
                    }}
                    transition={{ type: "spring", stiffness: 260, damping: 26 }}
                    style={{ perspective: 1200 }}
                    onClick={() => setCurrentIndex(idx)}
                    className="absolute w-full max-w-[340px] sm:max-w-[400px]"
                  >
                    <TiltCard3D maxTilt={isCenter ? 8 : 2} scale={1.01} depth={20} className="w-full rounded-card">
                      <div className={`p-6 sm:p-7 rounded-card border transition-all duration-300 flex flex-col justify-between min-h-[290px] ${
                        isCenter
                          ? 'border-indigo-300/90 bg-white/95 backdrop-blur-2xl shadow-glass'
                          : 'border-indigo-200/40 bg-white/70 backdrop-blur-md shadow-elevation-1'
                      }`}>
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-4">
                            <div className="p-2 rounded-xl bg-indigo-50 text-lab-accentViolet border border-indigo-100 shadow-sm">
                              <Award size={18} />
                            </div>
                            <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-100/70 text-lab-accentIndigo border border-indigo-200/50">
                              {cert.category}
                            </span>
                          </div>

                          <h3 className="font-display font-extrabold text-base sm:text-lg text-lab-ink leading-snug">
                            {cert.title}
                          </h3>
                          
                          {cert.description && (
                            <p className="mt-2.5 text-xs text-lab-muted leading-relaxed font-normal">
                              {cert.description}
                            </p>
                          )}
                        </div>

                        <div className="mt-6 pt-4 border-t border-indigo-100 flex items-center justify-between text-xs font-mono">
                          <span className="text-lab-ink font-bold">{cert.issuer}</span>
                          <span className="flex items-center gap-1.5 text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            <CheckCircle2 size={12} className="text-emerald-600" />
                            <span>VERIFIED</span>
                          </span>
                        </div>
                      </div>
                    </TiltCard3D>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Dot Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {CERTIFICATIONS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx
                    ? 'w-7 h-2 bg-gradient-to-r from-lab-accentViolet to-lab-accentCyan'
                    : 'w-2 h-2 bg-indigo-200 hover:bg-indigo-300'
                }`}
                aria-label={`Go to certificate ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Certificates;