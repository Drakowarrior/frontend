import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code2, Users, Flame, GitPullRequest, Sparkles } from 'lucide-react';
import TiltCard3D from './ui/TiltCard3D';
import CountUp from './ui/CountUp';
import { ACHIEVEMENTS } from '../data/portfolioData';

const Achievements = () => {
  const icons = [
    <Code2 className="w-5 h-5 text-lab-accentViolet" />,
    <Flame className="w-5 h-5 text-lab-accentIndigo" />,
    <Users className="w-5 h-5 text-blue-500" />,
    <Trophy className="w-5 h-5 text-amber-500" />,
    <GitPullRequest className="w-5 h-5 text-emerald-500" />
  ];

  const statMetrics = [
    { label: "Intelligent Systems", value: 12, suffix: "+", desc: "Production & Research Prototypes" },
    { label: "Industry Internships", value: 2, suffix: "", desc: "IGT Solutions & Cognifyz" },
    { label: "Springer Research", value: 1, suffix: "", desc: "Peer-Reviewed Article 556" },
    { label: "Hackathons / Contests", value: 4, suffix: "+", desc: "Smart India & EY Tech" },
    { label: "Code Commits", value: 150, suffix: "+", desc: "Open-source GitHub contributions" }
  ];

  return (
    <section className="section-anchor py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-lab-accentViolet" />
              <span className="text-xs font-mono tracking-widest text-lab-accentIndigo uppercase font-bold">
                10 // EXTRA DIMENSION
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-lab-ink">
              ACTIVITIES & <span className="text-gradient-hero">ACHIEVEMENTS</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-lab-muted max-w-md">
            Hackathons, open-source initiatives, student technical club governance, and high-impact engineering milestones.
          </p>
        </div>

        {/* Top Animated Count-Up Milestone Stat Tiles with Soft Shimmer Sweep */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {statMetrics.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="relative p-5 rounded-card border border-indigo-200/60 bg-white/80 backdrop-blur-md shadow-glass overflow-hidden group hover:border-indigo-300 transition-all"
            >
              {/* Soft Shimmer Sweep Effect */}
              <div 
                className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-light bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" 
                aria-hidden="true" 
              />

              <div className="font-display font-black text-3xl sm:text-4xl text-gradient-hero mb-1">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </div>
              <h4 className="font-mono text-xs font-bold text-lab-ink leading-tight">
                {stat.label}
              </h4>
              <p className="text-[10px] font-mono text-lab-muted mt-1 leading-normal">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ACHIEVEMENTS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <TiltCard3D maxTilt={6} scale={1.01} depth={20} className="h-full rounded-card">
                <div className="p-6 rounded-card border border-indigo-200/60 bg-white/75 backdrop-blur-xl shadow-glass h-full flex flex-col justify-between hover:border-indigo-300 transition-all duration-300 group">
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-100 shadow-sm">
                        {icons[idx] || <Sparkles className="w-5 h-5 text-lab-accentViolet" />}
                      </div>
                      <span className="text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-lab-accentIndigo border border-indigo-200">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-lab-ink group-hover:text-lab-accentIndigo transition-colors mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-lab-muted leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </TiltCard3D>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
