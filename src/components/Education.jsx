import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, Landmark, Sparkles } from 'lucide-react';
import TiltCard3D from './ui/TiltCard3D';
import { EDUCATION_HISTORY } from '../data/portfolioData';

const Education = () => {
  const btech = EDUCATION_HISTORY[0];
  const schoolXII = EDUCATION_HISTORY[1];
  const schoolX = EDUCATION_HISTORY[2];

  return (
    <section id="education" className="section-anchor py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-lab-accentViolet" />
              <span className="text-xs font-mono tracking-widest text-lab-accentIndigo uppercase font-bold">
                09 // ACADEMIC FOUNDATION
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-lab-ink">
              ACADEMIC <span className="text-gradient-hero">FOUNDATION</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-lab-muted max-w-md">
            Computer science, bioscience, computational engineering, and rigorous foundational science training.
          </p>
        </div>

        {/* Two Refined University Crest Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: University Crest Primary Degree (Manipal University Jaipur) */}
          <div className="lg:col-span-7">
            <TiltCard3D maxTilt={6} scale={1.01} depth={26} className="h-full rounded-card">
              <div className="p-8 sm:p-10 rounded-card border-2 border-indigo-200/80 bg-white/85 backdrop-blur-xl shadow-glass h-full flex flex-col justify-between relative overflow-hidden group">
                
                {/* Subtle Watermark Crest Background */}
                <div 
                  className="absolute -right-8 -bottom-8 w-60 h-60 rounded-full bg-indigo-100/30 flex items-center justify-center pointer-events-none opacity-40 group-hover:scale-110 transition-transform duration-700"
                  aria-hidden="true"
                >
                  <Landmark size={140} className="text-indigo-300" />
                </div>

                <div>
                  {/* Crest Header */}
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3.5">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-100 to-indigo-100 border-2 border-indigo-200/70 shadow-sm flex items-center justify-center text-lab-accentViolet">
                        <Landmark size={26} />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono text-lab-accentIndigo uppercase tracking-widest font-bold block">
                          UNDERGRADUATE DEGREE
                        </span>
                        <h4 className="font-display font-extrabold text-lg text-lab-ink">
                          {btech.institution}
                        </h4>
                      </div>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-purple-100 to-indigo-100 border border-indigo-200 text-lab-accentIndigo font-mono text-xs font-bold shadow-sm">
                      {btech.score}
                    </div>
                  </div>

                  <h3 className="font-display font-black text-2xl sm:text-3xl text-lab-ink tracking-tight mb-2">
                    {btech.degree}
                  </h3>
                  <p className="font-mono text-xs font-bold text-lab-accentIndigo mb-6">
                    Session: {btech.period}
                  </p>

                  {/* Highlights / Coursework */}
                  <div className="space-y-3 pt-6 border-t border-indigo-100">
                    <span className="text-[11px] font-mono font-bold text-lab-muted uppercase tracking-widest block">
                      CORE RIGOR & INTERDISCIPLINARY COURSEWORK
                    </span>
                    {btech.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-lab-muted leading-relaxed">
                        <Sparkles size={14} className="text-lab-accentViolet shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-indigo-100/80 flex items-center justify-between text-xs font-mono text-lab-muted">
                  <span>Dean's List / Academic Distinction</span>
                  <span className="text-lab-accentIndigo font-semibold">2023 — 2027</span>
                </div>

              </div>
            </TiltCard3D>
          </div>

          {/* Card 2: Foundational Schooling & Academic Roots */}
          <div className="lg:col-span-5">
            <TiltCard3D maxTilt={6} scale={1.01} depth={26} className="h-full rounded-card">
              <div className="p-8 sm:p-10 rounded-card border-2 border-indigo-200/80 bg-white/85 backdrop-blur-xl shadow-glass h-full flex flex-col justify-between relative overflow-hidden group">
                
                {/* Subtle Watermark Icon */}
                <div 
                  className="absolute -right-6 -bottom-6 w-52 h-52 rounded-full bg-cyan-100/30 flex items-center justify-center pointer-events-none opacity-40 group-hover:scale-110 transition-transform duration-700"
                  aria-hidden="true"
                >
                  <GraduationCap size={120} className="text-cyan-300" />
                </div>

                <div>
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-100 to-indigo-100 border-2 border-cyan-200/70 shadow-sm flex items-center justify-center text-lab-accentCyan">
                      <GraduationCap size={26} />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-lab-accentCyan uppercase tracking-widest font-bold block">
                        FOUNDATIONAL HONORS
                      </span>
                      <h4 className="font-display font-extrabold text-lg text-lab-ink">
                        Secondary & Senior Education
                      </h4>
                    </div>
                  </div>

                  {/* Class XII */}
                  <div className="p-4 rounded-2xl border border-indigo-100 bg-white shadow-sm mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs font-bold text-lab-accentIndigo">{schoolXII.degree}</span>
                      <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {schoolXII.score}
                      </span>
                    </div>
                    <h5 className="font-display font-bold text-sm text-lab-ink">{schoolXII.institution}</h5>
                    <p className="font-mono text-[11px] text-lab-muted mt-1">{schoolXII.highlights[0]}</p>
                  </div>

                  {/* Class X */}
                  <div className="p-4 rounded-2xl border border-indigo-100 bg-white shadow-sm">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-mono text-xs font-bold text-lab-accentCyan">{schoolX.degree}</span>
                      <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                        {schoolX.score}
                      </span>
                    </div>
                    <h5 className="font-display font-bold text-sm text-lab-ink">{schoolX.institution}</h5>
                    <p className="font-mono text-[11px] text-lab-muted mt-1">{schoolX.highlights[0]}</p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-indigo-100/80 flex items-center justify-between text-xs font-mono text-lab-muted">
                  <span>Distinction in Mathematics & Sciences</span>
                  <span className="text-lab-accentCyan font-semibold">CBSE Board</span>
                </div>

              </div>
            </TiltCard3D>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Education;