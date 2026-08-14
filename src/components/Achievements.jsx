import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Trophy, GitPullRequest, Code2, Users, Flame } from 'lucide-react';
import Tilt3D from './ui/Tilt3D';
import { ACHIEVEMENTS } from '../data/portfolioData';

const Achievements = ({ theme }) => {
  const isDark = theme === 'dark';

  const icons = [
    <Code2 className="w-4 h-4 text-accent-purple" />,
    <Flame className="w-4 h-4 text-accent-purple dark:text-accent-cyan" />,
    <Users className="w-4 h-4 text-blue-500" />,
    <Trophy className="w-4 h-4 text-amber-500" />,
    <GitPullRequest className="w-4 h-4 text-emerald-500" />
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent-purple" />
              <span className="text-xs font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
                10 // EXTRA DIMENSION
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl tracking-tight text-gray-900 dark:text-white">
              ACTIVITIES & <span className="text-gradient dark:text-gradient">ACHIEVEMENTS</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Hackathons, open-source initiatives, student technical club governance, and engineering contributions.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
            >
              <Tilt3D maxTilt={3} scale={1.008} className="h-full">
                <div
                  className={`p-5 rounded-3xl border h-full flex flex-col justify-between ${
                    isDark
                      ? 'glass-card-dark border-white/10 bg-[#0c101d] hover:border-accent-purple/40'
                      : 'glass-card-light bg-white border-[#D8DCE5] hover:border-accent-purple/30 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-2 rounded-xl bg-accent-purple/10 border border-accent-purple/20">
                        {icons[idx] || <Sparkles className="w-4 h-4 text-accent-purple" />}
                      </div>
                      <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base text-gray-900 dark:text-white mb-1.5">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                      {item.desc}
                    </p>
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

export default Achievements;
