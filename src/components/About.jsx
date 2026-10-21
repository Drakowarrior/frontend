import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Sparkles, GraduationCap, MapPin, Award } from 'lucide-react';
import TiltCard3D from './ui/TiltCard3D';
import { TIMELINE_JOURNEY } from '../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="section-anchor py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-lab-accentViolet" />
              <span className="text-xs font-mono tracking-widest text-lab-accentIndigo uppercase font-bold">
                07 // PROFILE & BACKGROUND
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-lab-ink">
              ABOUT <span className="text-gradient-hero">KARAN GARG</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-lab-muted max-w-md">
            AI Engineer and Full-Stack Builder pursuing B.Tech in Computer Science & Bioscience at Manipal University Jaipur.
          </p>
        </div>

        {/* 3D Portrait + Editorial Narrative & Stacked Glass Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 items-stretch">
          
          {/* Left Column: Compact 3D Portrait & Quick Facts */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <TiltCard3D maxTilt={9} scale={1.02} depth={26} className="w-full rounded-card">
              <div className="p-3 rounded-card border border-indigo-200/60 bg-white/80 backdrop-blur-xl shadow-glass flex flex-col items-center">
                <div className="relative w-full aspect-[4/5] rounded-[22px] overflow-hidden bg-gradient-to-tr from-purple-100 to-indigo-100">
                  <img
                    src={process.env.PUBLIC_URL + '/karan-portrait.jpg'}
                    alt="Karan Garg"
                    className="w-full h-full object-cover object-center filter saturate-[1.04]"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-indigo-950/20 to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-xl bg-white/85 backdrop-blur-md border border-white/70 shadow-sm flex items-center justify-between text-xs font-mono">
                    <span className="font-bold text-lab-ink">Manipal Univ Jaipur</span>
                    <span className="text-lab-accentIndigo font-bold">CGPA: 7.75</span>
                  </div>
                </div>

                <div className="w-full pt-4 pb-2 px-2 flex items-center justify-between text-xs font-mono text-lab-muted">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-lab-accentViolet" />
                    <span>Jaipur / Delhi, India</span>
                  </span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Available
                  </span>
                </div>
              </div>
            </TiltCard3D>
          </div>

          {/* Right Column: Editorial Bio and Stacked Quick Fact Cards */}
          <div className="lg:col-span-8 flex flex-col justify-between gap-6">
            
            {/* Main Editorial Bio Card */}
            <div className="p-6 sm:p-8 rounded-card border border-indigo-200/60 bg-white/80 backdrop-blur-xl shadow-glass">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-lab-accentViolet animate-pulse" />
                <span className="text-xs font-mono text-lab-accentIndigo tracking-widest uppercase font-bold">
                  ENGINEERING PHILOSOPHY
                </span>
              </div>

              <h3 className="font-display font-extrabold text-xl sm:text-2xl text-lab-ink mb-4 leading-snug">
                Architecting intelligence at the intersection of computing and real-world utility.
              </h3>

              <div className="space-y-3.5 text-xs sm:text-sm text-lab-muted leading-relaxed font-normal">
                <p>
                  I am an <strong className="text-lab-ink font-semibold">AI Engineer and Full-Stack Developer</strong> specializing in machine learning pipelines, LLM systems, and high-performance web applications. My foundation is built on Python, React.js, FastAPI, and scalable cloud architectures.
                </p>
                <p>
                  Pursuing my <strong className="text-lab-ink font-semibold">B.Tech in Computer Science and Bioscience</strong> at Manipal University Jaipur (2023–2027), I bring an interdisciplinary perspective to software engineering—combining data-driven algorithmic precision with human-centered product design.
                </p>
                <p>
                  From training neural networks and building Retrieval-Augmented Generation (RAG) pipelines to designing production-grade JWT-authenticated REST APIs, I focus on building systems that solve tangible problems with high performance and elegance.
                </p>
              </div>
            </div>

            {/* 3 Stacked Quick Fact Glass Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-2xl border border-indigo-200/60 bg-white/70 backdrop-blur-md shadow-elevation-1 hover:shadow-elevation-2 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-4 h-4 text-lab-accentViolet" />
                  <h4 className="font-display font-bold text-sm text-lab-ink">AI & Deep Learning</h4>
                </div>
                <p className="text-xs text-lab-muted leading-relaxed">
                  Transformers, LLM orchestration, vector similarity search, Computer Vision with YOLOv8/OpenCV, and predictive models.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-indigo-200/60 bg-white/70 backdrop-blur-md shadow-elevation-1 hover:shadow-elevation-2 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="w-4 h-4 text-lab-accentIndigo" />
                  <h4 className="font-display font-bold text-sm text-lab-ink">Full-Stack Systems</h4>
                </div>
                <p className="text-xs text-lab-muted leading-relaxed">
                  FastAPI, React.js, asynchronous endpoints, session management, secure auth flows, and MongoDB Atlas indexing.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-indigo-200/60 bg-white/70 backdrop-blur-md shadow-elevation-1 hover:shadow-elevation-2 transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-lab-accentCyan" />
                  <h4 className="font-display font-bold text-sm text-lab-ink">Product & Leadership</h4>
                </div>
                <p className="text-xs text-lab-muted leading-relaxed">
                  DevForge Club executive leadership, technical community workshops, and iterative user-focused product delivery.
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Career Progression Timeline: 2023 - 2027 */}
        <div className="p-6 sm:p-8 rounded-card border border-indigo-200/60 bg-white/80 backdrop-blur-xl shadow-glass">
          <div className="flex items-center gap-2.5 mb-6">
            <GraduationCap className="w-5 h-5 text-lab-accentViolet" />
            <h4 className="font-display font-bold text-base text-lab-ink">
              PROGRESSIVE JOURNEY // 2023 — 2027
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {TIMELINE_JOURNEY.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="p-4 rounded-2xl border border-indigo-100 bg-white shadow-sm flex flex-col justify-between hover:border-indigo-300 transition-all"
              >
                <div>
                  <span className="font-mono text-xl font-black text-gradient-hero">
                    {item.year}
                  </span>
                  <h5 className="font-mono text-xs font-bold text-lab-ink mt-1">
                    {item.milestone}
                  </h5>
                  <p className="text-[11px] font-mono text-lab-muted mt-2 leading-relaxed">
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