import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Sparkles, GraduationCap } from 'lucide-react';
import Tilt3D from './ui/Tilt3D';
import { TIMELINE_JOURNEY } from '../data/portfolioData';

const About = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="about" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent-purple" />
              <span className="text-xs font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
                07 // PROFILE & BACKGROUND
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
              ABOUT <span className="text-gradient dark:text-gradient">KARAN GARG</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md">
            AI Engineer and Full-Stack Builder pursuing B.Tech in Computer Science & Bioscience at Manipal University Jaipur.
          </p>
        </div>

        {/* Editorial Narrative & Capabilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12 items-stretch">
          
          {/* Main Editorial Bio */}
          <div className="lg:col-span-7">
            <Tilt3D maxTilt={2.5} scale={1.008} className="h-full">
              <div
                className={`p-6 sm:p-8 rounded-3xl border h-full flex flex-col justify-between ${
                  isDark
                    ? 'glass-card-dark border-white/10 bg-gradient-to-br from-[#0c101d] to-[#080a13]'
                    : 'glass-card-light bg-white border-[#D8DCE5] shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-accent-purple" />
                    <span className="text-[10px] font-mono text-accent-purple dark:text-accent-cyan tracking-widest uppercase font-bold">
                      ENGINEERING PHILOSOPHY
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl sm:text-2xl text-gray-900 dark:text-white mb-4 leading-snug">
                    Architecting intelligence at the intersection of computing and real-world utility.
                  </h3>

                  <div className="space-y-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
                    <p>
                      I am an <strong className="text-gray-900 dark:text-white font-semibold">AI Engineer and Full-Stack Developer</strong> specializing in machine learning pipelines, LLM systems, and high-performance web applications. My foundation is built on Python, React.js, FastAPI, and scalable cloud architectures.
                    </p>
                    <p>
                      Pursuing my <strong className="text-gray-900 dark:text-white font-semibold">B.Tech in Computer Science and Bioscience</strong> at Manipal University Jaipur (2023–2027), I bring an interdisciplinary perspective to software engineering—combining data-driven algorithmic precision with human-centered product design.
                    </p>
                    <p>
                      From training neural networks and building Retrieval-Augmented Generation (RAG) pipelines to designing production-grade JWT-authenticated REST APIs, I focus on building systems that solve tangible problems with high performance and elegance.
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-gray-600 dark:text-gray-400 font-semibold">
                  <span>CGPA: 7.75 / 10.0</span>
                  <span className="text-accent-purple dark:text-accent-cyan">Manipal University Jaipur</span>
                </div>
              </div>
            </Tilt3D>
          </div>

          {/* Core Focus Cards on Right */}
          <div className="lg:col-span-5 space-y-3 flex flex-col justify-between">
            <div className={`p-5 rounded-3xl border ${isDark ? 'glass-card-dark border-white/10 bg-[#0a0d18]' : 'glass-card-light bg-white border-[#D8DCE5] shadow-sm'}`}>
              <div className="flex items-center gap-2.5 mb-1.5">
                <Brain className="w-4 h-4 text-accent-purple" />
                <h4 className="font-display font-bold text-base text-gray-900 dark:text-white">AI & Deep Learning</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                Transformers, LLM orchestration, vector similarity search, Computer Vision with YOLOv8/OpenCV, and predictive models.
              </p>
            </div>

            <div className={`p-5 rounded-3xl border ${isDark ? 'glass-card-dark border-white/10 bg-[#0a0d18]' : 'glass-card-light bg-white border-[#D8DCE5] shadow-sm'}`}>
              <div className="flex items-center gap-2.5 mb-1.5">
                <Code className="w-4 h-4 text-blue-500" />
                <h4 className="font-display font-bold text-base text-gray-900 dark:text-white">Full-Stack Systems</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                FastAPI, React.js, asynchronous endpoints, session management, secure auth flows, and MongoDB Atlas indexing.
              </p>
            </div>

            <div className={`p-5 rounded-3xl border ${isDark ? 'glass-card-dark border-white/10 bg-[#0a0d18]' : 'glass-card-light bg-white border-[#D8DCE5] shadow-sm'}`}>
              <div className="flex items-center gap-2.5 mb-1.5">
                <Sparkles className="w-4 h-4 text-accent-cyan" />
                <h4 className="font-display font-bold text-base text-gray-900 dark:text-white">Product & Leadership</h4>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                DevForge Club executive leadership, technical community workshops, and iterative user-focused product delivery.
              </p>
            </div>
          </div>

        </div>

        {/* Career Progression Timeline: 2023 - 2027 */}
        <div className={`p-6 sm:p-8 rounded-3xl border ${
          isDark
            ? 'border-white/10 bg-gradient-to-br from-[#0c101d]/60 to-[#070912]/60'
            : 'border-[#D8DCE5] bg-white shadow-sm'
        }`}>
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-4 h-4 text-accent-purple dark:text-accent-cyan" />
            <h4 className="font-display font-bold text-base text-gray-900 dark:text-white">
              PROGRESSIVE JOURNEY // 2023 — 2027
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {TIMELINE_JOURNEY.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className={`p-3.5 rounded-2xl border flex flex-col justify-between ${
                  isDark ? 'border-white/10 bg-white/[0.02]' : 'border-gray-200 bg-gray-50/70'
                }`}
              >
                <div>
                  <span className="font-mono text-lg font-black text-gradient dark:text-gradient">
                    {item.year}
                  </span>
                  <h5 className="font-mono text-xs font-bold text-gray-900 dark:text-white mt-1">
                    {item.milestone}
                  </h5>
                  <p className="text-[11px] font-mono text-gray-600 dark:text-gray-400 mt-1.5 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;