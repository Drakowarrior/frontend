import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Terminal, Users, Calendar, Zap } from 'lucide-react';
import Tilt3D from './ui/Tilt3D';
import { EXPERIENCES } from '../data/portfolioData';

const Experience = ({ theme }) => {
  const isDark = theme === 'dark';

  const icons = [
    <Terminal className="w-4 h-4 text-accent-purple dark:text-accent-cyan" />,
    <Briefcase className="w-4 h-4 text-blue-500" />,
    <Users className="w-4 h-4 text-emerald-500" />
  ];

  return (
    <section id="experience" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent-purple" />
              <span className="text-xs font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
                06 // CAREER TIMELINE
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
              EXPERIENCE & <span className="text-gradient dark:text-gradient">LEADERSHIP</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Industry roles, enterprise conversational AI engineering, full-stack implementations, and student club executive leadership.
          </p>
        </div>

        {/* Vertical Timeline - Tightened spacing */}
        <div className="relative border-l border-gray-300 dark:border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-8 sm:space-y-10">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative group"
            >
              {/* Timeline node icon on left rail */}
              <div className={`absolute -left-[33px] sm:-left-[43px] top-5 w-7 h-7 sm:w-8 sm:h-8 rounded-xl border flex items-center justify-center shadow-md transition-colors ${
                isDark
                  ? 'bg-[#06080d] border-white/20 group-hover:border-accent-cyan'
                  : 'bg-white border-gray-300 group-hover:border-accent-purple shadow-sm'
              }`}>
                {icons[idx] || <Briefcase size={14} className="text-accent-purple" />}
              </div>

              {/* Experience Card */}
              <Tilt3D maxTilt={2} scale={1.006}>
                <div
                  className={`p-5 sm:p-7 rounded-3xl border transition-all duration-300 ${
                    isDark
                      ? 'glass-card-dark border-white/10 bg-gradient-to-br from-[#0c101d] to-[#070912] hover:border-accent-purple/40'
                      : 'glass-card-light bg-white border-[#D8DCE5] hover:border-accent-purple/40 shadow-sm'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-accent-purple/15 text-accent-purple border border-accent-purple/25">
                          {exp.badge}
                        </span>
                        <span className="text-[11px] font-mono text-gray-500 dark:text-gray-400">
                          • {exp.type}
                        </span>
                      </div>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-gray-900 dark:text-white">
                        {exp.role}
                      </h3>
                      <h4 className="font-mono text-xs sm:text-sm font-bold text-accent-purple dark:text-accent-cyan">
                        {exp.company}
                      </h4>
                    </div>

                    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-xl border text-xs font-mono w-fit font-semibold ${
                      isDark ? 'border-white/10 bg-white/5 text-gray-300' : 'border-gray-200 bg-gray-50 text-gray-700'
                    }`}>
                      <Calendar size={12} className="text-accent-purple dark:text-accent-cyan" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal mb-4">
                    {exp.summary}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="space-y-1.5 pt-3 border-t border-gray-200 dark:border-white/10">
                    {exp.deliverables.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <Zap size={13} className="text-accent-purple dark:text-accent-cyan shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-gray-100 dark:border-white/5">
                    {exp.stack.map((item, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded-lg text-[11px] font-mono border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-700 dark:text-gray-400 font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;