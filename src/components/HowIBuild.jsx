import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, Search, Database, Cpu, Server, 
  Layout, Cloud 
} from 'lucide-react';
import { HOW_I_BUILD_PIPELINE } from '../data/portfolioData';

const HowIBuild = ({ theme }) => {
  const [activeStep, setActiveStep] = useState(0);
  const isDark = theme === 'dark';

  const icons = [
    <Lightbulb className="w-4 h-4 text-amber-500" />,
    <Search className="w-4 h-4 text-accent-purple dark:text-accent-cyan" />,
    <Database className="w-4 h-4 text-emerald-500" />,
    <Cpu className="w-4 h-4 text-accent-purple" />,
    <Server className="w-4 h-4 text-blue-500" />,
    <Layout className="w-4 h-4 text-pink-500" />,
    <Cloud className="w-4 h-4 text-sky-500" />
  ];

  const pillars = [
    {
      title: "AI & Model Intelligence",
      desc: "Architecting LLMs, fine-tuning neural networks, prompt engineering, and building vector RAG pipelines.",
      colorDark: "from-purple-500/20 to-indigo-500/5",
      colorLight: "from-purple-50 to-white",
      borderDark: "border-purple-500/30",
      borderLight: "border-purple-200",
      accent: "text-accent-purple"
    },
    {
      title: "Full-Stack Robustness",
      desc: "FastAPI & Node.js backend microservices, JWT session authorization, and MongoDB schema optimization.",
      colorDark: "from-blue-500/20 to-cyan-500/5",
      colorLight: "from-blue-50 to-white",
      borderDark: "border-blue-500/30",
      borderLight: "border-blue-200",
      accent: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Human-Centered UX",
      desc: "Designing responsive, accessible React interfaces with micro-interactions and streaming latency counters.",
      colorDark: "from-cyan-500/20 to-emerald-500/5",
      colorLight: "from-cyan-50 to-white",
      borderDark: "border-cyan-500/30",
      borderLight: "border-cyan-200",
      accent: "text-cyan-600 dark:text-cyan-400"
    },
    {
      title: "Cloud CI/CD",
      desc: "Containerizing services with Docker, deploying to Vercel/Render, and maintaining high availability.",
      colorDark: "from-emerald-500/20 to-teal-500/5",
      colorLight: "from-emerald-50 to-white",
      borderDark: "border-emerald-500/30",
      borderLight: "border-emerald-200",
      accent: "text-emerald-600 dark:text-emerald-400"
    }
  ];

  return (
    <section id="pipeline" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent-purple" />
              <span className="text-xs font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
                03 // ENGINEERING METHODOLOGY
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
              HOW I <span className="text-gradient dark:text-gradient">BUILD</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Bridging cutting-edge Machine Learning and high-concurrency web architecture through a disciplined 7-stage lifecycle.
          </p>
        </div>

        {/* 7-Step Interactive Pipeline Stepper */}
        <div className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-4">
            {HOW_I_BUILD_PIPELINE.map((item, index) => {
              const isActive = activeStep === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`p-2.5 rounded-2xl border text-left transition-all duration-300 flex flex-col justify-between h-20 ${
                    isActive
                      ? 'border-accent-purple bg-accent-purple/15 text-accent-purple dark:text-white shadow-glow-purple scale-105 font-bold'
                      : isDark
                      ? 'border-white/10 bg-white/[0.02] text-gray-400 hover:border-white/20 hover:text-white'
                      : 'border-[#D8DCE5] bg-white text-gray-700 hover:border-gray-400 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] font-bold opacity-60">
                      {item.step}
                    </span>
                    {icons[index]}
                  </div>
                  <span className="font-mono text-[11px] font-bold tracking-wider uppercase truncate">
                    {item.phase}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-6 sm:p-7 rounded-3xl border ${
              isDark
                ? 'glass-card-dark border-accent-purple/30 bg-[#090d19]'
                : 'glass-card-light bg-white border-[#D8DCE5] shadow-sm'
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-accent-purple/15 border border-accent-purple/30">
                  {icons[activeStep]}
                </div>
                <div>
                  <span className="text-[10px] font-mono text-accent-purple dark:text-accent-cyan uppercase tracking-widest font-bold">
                    STAGE {HOW_I_BUILD_PIPELINE[activeStep].step} // {HOW_I_BUILD_PIPELINE[activeStep].phase}
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-gray-900 dark:text-white">
                    {HOW_I_BUILD_PIPELINE[activeStep].title}
                  </h3>
                </div>
              </div>
              <span className="font-mono text-xs text-gray-500 font-bold">
                [ 0{activeStep + 1} / 07 ]
              </span>
            </div>
            <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mt-2 font-normal">
              {HOW_I_BUILD_PIPELINE[activeStep].desc}
            </p>
          </motion.div>
        </div>

        {/* 4 Architectural Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-3xl border flex flex-col justify-between transition-all ${
                isDark
                  ? `bg-gradient-to-b ${pillar.colorDark} ${pillar.borderDark} glass-card-dark`
                  : `bg-gradient-to-b ${pillar.colorLight} ${pillar.borderLight} shadow-sm`
              }`}
            >
              <div>
                <span className={`text-[10px] font-mono font-bold tracking-wider uppercase ${pillar.accent}`}>
                  PILLAR // 0{idx + 1}
                </span>
                <h4 className="font-display font-bold text-base text-gray-900 dark:text-white mt-1.5 mb-2">
                  {pillar.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-300 font-normal leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowIBuild;
