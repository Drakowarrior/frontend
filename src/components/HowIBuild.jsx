import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, Search, Database, Cpu, Server, 
  Layout, Cloud, Layers, ShieldCheck, Zap
} from 'lucide-react';
import { HOW_I_BUILD_PIPELINE } from '../data/portfolioData';

const HowIBuild = () => {
  const icons = [
    <Lightbulb className="w-5 h-5 text-amber-500" />,
    <Search className="w-5 h-5 text-lab-accentIndigo" />,
    <Database className="w-5 h-5 text-emerald-500" />,
    <Cpu className="w-5 h-5 text-lab-accentViolet" />,
    <Server className="w-5 h-5 text-blue-500" />,
    <Layout className="w-5 h-5 text-pink-500" />,
    <Cloud className="w-5 h-5 text-lab-accentCyan" />
  ];

  const pillars = [
    {
      title: "AI & Model Intelligence",
      desc: "Architecting LLMs, fine-tuning neural networks, prompt engineering, and building vector RAG pipelines.",
      accent: "text-lab-accentViolet",
      badge: "PILLAR // 01"
    },
    {
      title: "Full-Stack Robustness",
      desc: "FastAPI & Node.js backend microservices, JWT session authorization, and MongoDB schema optimization.",
      accent: "text-lab-accentIndigo",
      badge: "PILLAR // 02"
    },
    {
      title: "Human-Centered UX",
      desc: "Designing responsive, accessible React interfaces with micro-interactions and streaming latency counters.",
      accent: "text-lab-accentCyan",
      badge: "PILLAR // 03"
    },
    {
      title: "Cloud CI/CD & Scaling",
      desc: "Containerizing services with Docker, deploying to Vercel/Render, and maintaining high availability.",
      accent: "text-emerald-600",
      badge: "PILLAR // 04"
    }
  ];

  return (
    <section id="pipeline" className="section-anchor py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-lab-accentViolet" />
              <span className="text-xs font-mono tracking-widest text-lab-accentIndigo uppercase font-bold">
                03 // ENGINEERING METHODOLOGY
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-lab-ink">
              HOW I <span className="text-gradient-hero">BUILD</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-lab-muted max-w-md">
            Bridging cutting-edge Machine Learning and high-concurrency web architecture through a disciplined 7-stage 3D sequence.
          </p>
        </div>

        {/* 3D Stepped Timeline with Vertical Glowing Spine */}
        <div className="relative mb-20">
          
          {/* Vertical Glowing Line */}
          <div 
            className="absolute left-6 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan rounded-full opacity-35 shadow-cyan-glow pointer-events-none" 
            aria-hidden="true"
          />

          <div className="space-y-10 sm:space-y-12">
            {HOW_I_BUILD_PIPELINE.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, rotateX: 14, y: 32 }}
                  whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-row`}
                >
                  {/* Glowing Node on Spine */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-indigo-400 shadow-elevation-1 flex items-center justify-center z-20">
                    <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-lab-accentViolet to-lab-accentCyan" />
                  </div>

                  {/* Step Card Content */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="p-6 sm:p-7 rounded-card border border-indigo-200/60 bg-white/80 backdrop-blur-xl shadow-glass hover:shadow-glass-hover hover:border-indigo-300 transition-all duration-300 group">
                      
                      {/* Step Header */}
                      <div className="flex items-center justify-between gap-3 mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-100 shadow-sm">
                            {icons[idx]}
                          </div>
                          <div>
                            <span className="font-mono text-[10px] font-bold text-lab-accentIndigo tracking-widest uppercase">
                              STAGE {step.step} // {step.phase}
                            </span>
                            <h3 className="font-display font-extrabold text-base sm:text-lg text-lab-ink group-hover:text-lab-accentIndigo transition-colors">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <span className="font-mono text-xs font-black text-indigo-300">
                          #{step.step}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-lab-muted leading-relaxed font-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-card border border-indigo-200/60 bg-white/70 backdrop-blur-md shadow-elevation-1 hover:shadow-elevation-2 hover:border-indigo-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className={`text-[10px] font-mono font-bold tracking-wider uppercase ${pillar.accent}`}>
                  {pillar.badge}
                </span>
                <h4 className="font-display font-bold text-base text-lab-ink mt-2 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-lab-muted font-normal leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowIBuild;
