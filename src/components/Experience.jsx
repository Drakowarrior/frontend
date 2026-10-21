import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Terminal, Users, Calendar, Zap } from 'lucide-react';
import TiltCard3D from './ui/TiltCard3D';
import { EXPERIENCES } from '../data/portfolioData';

const Experience = () => {
  const [activeId, setActiveId] = useState(EXPERIENCES[0].id);

  const icons = [
    <Terminal className="w-4 h-4 text-lab-accentViolet" />,
    <Briefcase className="w-4 h-4 text-lab-accentIndigo" />,
    <Users className="w-4 h-4 text-emerald-600" />
  ];

  return (
    <section id="experience" className="section-anchor py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-lab-accentViolet" />
              <span className="text-xs font-mono tracking-widest text-lab-accentIndigo uppercase font-bold">
                06 // CAREER TIMELINE
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-lab-ink">
              EXPERIENCE & <span className="text-gradient-hero">LEADERSHIP</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-lab-muted max-w-md">
            Industry roles, enterprise conversational AI engineering, full-stack implementations, and student club executive leadership.
          </p>
        </div>

        {/* Vertical Timeline with Connected Gradient Spine */}
        <div className="relative ml-4 sm:ml-8 pl-8 sm:pl-10 space-y-10 sm:space-y-12">
          
          {/* Gradient Spine */}
          <div 
            className="absolute left-0 top-6 bottom-6 w-1 bg-gradient-to-b from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan rounded-full opacity-40 shadow-btn-glow pointer-events-none" 
            aria-hidden="true"
          />

          {EXPERIENCES.map((exp, idx) => {
            const isActive = activeId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => setActiveId(exp.id)}
                className="relative group"
              >
                {/* Timeline Node Icon on Gradient Spine */}
                <div className={`absolute -left-[45px] sm:-left-[53px] top-6 w-8 h-8 sm:w-9 sm:h-9 rounded-2xl border-2 flex items-center justify-center shadow-elevation-1 transition-all duration-300 z-20 ${
                  isActive
                    ? 'bg-white border-indigo-400 scale-110 shadow-btn-glow'
                    : 'bg-white/90 border-indigo-200'
                }`}>
                  {icons[idx] || <Briefcase size={14} className="text-lab-accentViolet" />}
                </div>

                {/* Experience Card with Tilt & Parallax Depth */}
                <TiltCard3D maxTilt={6} scale={1.01} depth={24} className="w-full rounded-card">
                  <div
                    className={`p-6 sm:p-8 rounded-card border transition-all duration-300 ${
                      isActive
                        ? 'border-indigo-300/80 bg-white/90 backdrop-blur-2xl shadow-glass-hover'
                        : 'border-indigo-200/50 bg-white/75 backdrop-blur-xl shadow-glass hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-lab-accentIndigo border border-indigo-200/60">
                            {exp.badge}
                          </span>
                          <span className="text-xs font-mono text-lab-muted">
                            • {exp.type}
                          </span>
                        </div>
                        <h3 className="font-display font-extrabold text-xl sm:text-2xl text-lab-ink tracking-tight">
                          {exp.role}
                        </h3>
                        <h4 className="font-mono text-xs sm:text-sm font-bold text-lab-accentIndigo mt-0.5">
                          {exp.company}
                        </h4>
                      </div>

                      <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200/60 bg-indigo-50/70 text-xs font-mono font-semibold text-lab-ink w-fit shadow-sm">
                        <Calendar size={13} className="text-lab-accentViolet" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-lab-muted leading-relaxed font-normal mb-5">
                      {exp.summary}
                    </p>

                    {/* Deliverables Bullet List */}
                    <div className="space-y-2 pt-4 border-t border-indigo-100">
                      {exp.deliverables.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-lab-ink leading-relaxed">
                          <Zap size={14} className="text-lab-accentViolet shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-indigo-50">
                      {exp.stack.map((item, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono border border-indigo-100 bg-indigo-50/50 text-lab-muted font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Experience;