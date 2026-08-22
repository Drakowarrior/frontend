import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowUpRight, Bot, Database, 
  Cpu, FileText, ArrowRight, Zap 
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import Tilt3D from './ui/Tilt3D';
import ProjectModal from './ProjectModal';
import { FEATURED_PROJECTS } from '../data/portfolioData';

const Projects = ({ theme }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  const isDark = theme === 'dark';

  return (
    <section id="projects" className="section-anchor py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">


        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent-purple" />
              <span className="text-xs font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
                02 // FEATURED SYSTEMS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
              INTELLIGENT <span className="text-gradient dark:text-gradient">WORK</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Production-grade AI architectures, full-stack systems, and retrieval engines engineered for high reliability.
          </p>
        </div>

        {/* Projects Showcase Stream - Tightened gaps */}
        <div className="space-y-10 sm:space-y-14">
          
          {/* PROJECT 01: SARVA AI */}
          <div className="project-card-interactive" data-cursor="view">
            <Tilt3D maxTilt={2.5} scale={1.008} className="w-full">
              <div
                className={`p-6 sm:p-8 lg:p-10 rounded-3xl border transition-all duration-300 ${
                  isDark
                    ? 'glass-card-dark border-white/10 bg-gradient-to-br from-[#0c101d] via-[#0a0d18] to-[#070911] shadow-xl'
                    : 'glass-card-light bg-white border-[#D8DCE5] shadow-lg'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                  
                  {/* Left Column: Metadata & Details */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-accent-purple/15 text-accent-purple border border-accent-purple/30">
                          PROJECT // 01
                        </span>
                        <span className="font-mono text-xs text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5 font-bold">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Live & Deployed
                        </span>
                      </div>

                      <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 dark:text-white tracking-tight">
                        SARVA AI
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-accent-purple dark:text-accent-cyan tracking-wider mt-0.5 uppercase font-bold">
                        FULL-STACK ENTERPRISE AI ASSISTANT
                      </p>

                      <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-gray-700 dark:text-gray-300">
                        A full-stack AI assistant engineered for intelligent conversations, secure JWT authentication, session management, and scalable FastAPI backend services with MongoDB Atlas.
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {FEATURED_PROJECTS[0].stack.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-lg text-xs font-mono border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-gray-300 font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="mt-5 space-y-1.5">
                        {FEATURED_PROJECTS[0].highlights.slice(0, 3).map((hl, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400">
                            <Zap size={13} className="text-accent-purple shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 pt-5 border-t border-gray-200 dark:border-white/10 flex flex-wrap items-center gap-3">
                      <a
                        href={FEATURED_PROJECTS[0].liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-accent-purple to-accent-cyan shadow-glow-purple flex items-center gap-2 hover:scale-[1.03] transition-all"
                      >
                        <span>LIVE DEMO</span>
                        <ArrowUpRight size={14} />
                      </a>
                      <a
                        href={FEATURED_PROJECTS[0].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`px-4 py-2 rounded-xl font-mono text-xs font-bold border flex items-center gap-2 transition-all ${
                          isDark
                            ? 'border-white/15 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                            : 'border-[#D8DCE5] bg-white text-gray-800 hover:border-accent-purple'
                        }`}
                      >
                        <FaGithub size={14} />
                        <span>CODE</span>
                      </a>
                      <button
                        onClick={() => navigate('/projects/sarva-ai')}
                        className="px-3 py-2 rounded-xl font-mono text-xs font-bold text-accent-purple dark:text-accent-cyan hover:underline flex items-center gap-1.5 ml-auto"
                      >
                        <span>CASE STUDY</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Simulated Interactive AI SaaS Interface */}
                  <div className="lg:col-span-6">
                    <div className={`rounded-2xl border p-4 sm:p-5 shadow-lg overflow-hidden font-mono text-xs ${
                      isDark ? 'border-white/15 bg-[#080b13]' : 'border-[#D8DCE5] bg-gray-50'
                    }`}>
                      {/* Window Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-gray-200 dark:border-white/10 mb-3">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          <span className="text-[11px] text-gray-500 dark:text-gray-400 ml-2 font-bold">sarva-ai-system.io</span>
                        </div>
                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                          JWT AUTH // VERIFIED
                        </span>
                      </div>

                      {/* Mockup Chat Stream */}
                      <div className="space-y-2.5 mb-3">
                        <div className="flex items-start gap-2 justify-end">
                          <div className="bg-accent-purple/20 border border-accent-purple/30 text-gray-800 dark:text-gray-200 p-2.5 rounded-2xl rounded-tr-sm max-w-[85%]">
                            <p className="text-xs">Summarize the recent multi-session context and prepare vector embeddings for indexing.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center shrink-0">
                            <Bot size={14} className="text-white" />
                          </div>
                          <div className={`p-2.5 rounded-2xl rounded-tl-sm max-w-[85%] space-y-1.5 border ${
                            isDark ? 'bg-white/5 border-white/10 text-gray-300' : 'bg-white border-gray-200 text-gray-800 shadow-sm'
                          }`}>
                            <p className="text-xs">
                              <span className="text-accent-purple dark:text-accent-cyan font-bold">SARVA Engine:</span> Multi-session state verified via JWT tokens. Context vectorized and indexed into MongoDB Atlas in 24ms.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Input Bar Mock */}
                      <div className={`p-2 rounded-xl border flex items-center justify-between ${
                        isDark ? 'bg-white/5 border-white/10 text-gray-400' : 'bg-white border-gray-200 text-gray-500 shadow-sm'
                      }`}>
                        <span>Ask SARVA Assistant or attach documents...</span>
                        <div className="w-6 h-6 rounded-lg bg-accent-purple flex items-center justify-center text-white">
                          <ArrowRight size={12} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Tilt3D>
          </div>

          {/* PROJECT 02: MedRAG */}
          <div className="project-card-interactive" data-cursor="view">
            <Tilt3D maxTilt={2.5} scale={1.008} className="w-full">
              <div
                className={`p-6 sm:p-8 lg:p-10 rounded-3xl border transition-all duration-300 ${
                  isDark
                    ? 'glass-card-dark border-white/10 bg-gradient-to-br from-[#0c101d] via-[#0a0d18] to-[#070911] shadow-xl'
                    : 'glass-card-light bg-white border-[#D8DCE5] shadow-lg'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
                  
                  {/* Left Column: Metadata & Details */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                          PROJECT // 02
                        </span>
                        <span className="font-mono text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1.5 font-bold">
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                          Under Deployment
                        </span>
                      </div>

                      <h3 className="font-display font-black text-2xl sm:text-3xl text-gray-900 dark:text-white tracking-tight">
                        MedRAG
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-accent-purple dark:text-accent-cyan tracking-wider mt-0.5 uppercase font-bold">
                        RETRIEVAL-AUGMENTED MEDICAL AI ASSISTANT
                      </p>

                      <p className="mt-4 text-xs sm:text-sm font-normal leading-relaxed text-gray-700 dark:text-gray-300">
                        An AI-powered medical assistant using Retrieval-Augmented Generation (RAG) to provide grounded, context-aware responses through high-dimensional semantic document retrieval.
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 mt-5">
                        {FEATURED_PROJECTS[1].stack.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-0.5 rounded-lg text-xs font-mono border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-gray-300 font-medium"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="mt-5 space-y-1.5">
                        {FEATURED_PROJECTS[1].highlights.slice(0, 3).map((hl, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs font-mono text-gray-600 dark:text-gray-400">
                            <Zap size={13} className="text-accent-purple dark:text-accent-cyan shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-6 pt-5 border-t border-gray-200 dark:border-white/10 flex flex-wrap items-center gap-3">
                      <span className="px-4 py-2 rounded-xl font-mono text-xs font-bold bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 flex items-center gap-2">
                        <span>PLATFORM COMING SOON</span>
                      </span>
                      {FEATURED_PROJECTS[1].github ? (
                        <a
                          href={FEATURED_PROJECTS[1].github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2 rounded-xl font-mono text-xs font-bold border flex items-center gap-2 transition-all ${
                            isDark
                              ? 'border-white/15 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                              : 'border-[#D8DCE5] bg-white text-gray-800 hover:border-accent-purple'
                          }`}
                        >
                          <FaGithub size={14} />
                          <span>GITHUB</span>
                        </a>
                      ) : (
                        <span
                          className={`px-4 py-2 rounded-xl font-mono text-xs font-bold border flex items-center gap-2 cursor-not-allowed opacity-75 ${
                            isDark
                              ? 'border-white/10 bg-white/5 text-gray-400'
                              : 'border-gray-200 bg-gray-100 text-gray-500'
                          }`}
                          title="MedRAG private repository undergoing compliance sanitization"
                        >
                          <FaGithub size={14} />
                          <span>REPO COMING SOON</span>
                        </span>
                      )}
                      <button
                        onClick={() => navigate('/projects/medrag')}
                        className="px-3 py-2 rounded-xl font-mono text-xs font-bold text-accent-purple dark:text-accent-cyan hover:underline flex items-center gap-1.5 ml-auto"
                      >
                        <span>CASE STUDY</span>
                        <ArrowRight size={13} />
                      </button>

                    </div>
                  </div>

                  {/* Right Column: Abstract RAG Pipeline Visualization */}
                  <div className="lg:col-span-6">
                    <div className={`rounded-2xl border p-4 sm:p-5 shadow-lg font-mono text-xs ${
                      isDark ? 'border-white/15 bg-[#080b13]' : 'border-[#D8DCE5] bg-gray-50'
                    }`}>
                      <div className="flex items-center justify-between pb-2.5 border-b border-gray-200 dark:border-white/10 mb-4">
                        <span className="text-[11px] font-bold text-accent-purple dark:text-accent-cyan tracking-wider">
                          // RAG VECTOR PIPELINE
                        </span>
                        <span className="text-[10px] text-gray-500">SEMANTIC RETRIEVAL</span>
                      </div>

                      {/* Step-by-step diagram */}
                      <div className="space-y-2">
                        <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                          isDark ? 'border-white/10 bg-white/[0.03]' : 'border-gray-200 bg-white shadow-sm'
                        }`}>
                          <div className="flex items-center gap-2">
                            <FileText size={15} className="text-accent-purple" />
                            <span className="text-gray-900 dark:text-gray-200 font-semibold">1. Biomedical Docs</span>
                          </div>
                          <span className="text-[10px] text-gray-500">Corpus</span>
                        </div>

                        <div className={`p-2.5 rounded-xl border flex items-center justify-between ${
                          isDark ? 'border-white/10 bg-white/[0.03]' : 'border-gray-200 bg-white shadow-sm'
                        }`}>
                          <div className="flex items-center gap-2">
                            <Cpu size={15} className="text-accent-purple" />
                            <span className="text-gray-900 dark:text-gray-200 font-semibold">2. Dense Embeddings</span>
                          </div>
                          <span className="text-[10px] text-gray-500">Vector Space</span>
                        </div>

                        <div className="p-2.5 rounded-xl border border-accent-cyan/40 bg-accent-cyan/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Database size={15} className="text-accent-cyan" />
                            <span className="text-gray-900 dark:text-white font-bold">3. Vector Similarity Search</span>
                          </div>
                          <span className="text-[10px] text-accent-cyan font-bold">Cosine Top-K</span>
                        </div>

                        <div className="p-2.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Bot size={15} className="text-emerald-600 dark:text-emerald-400" />
                            <span className="text-gray-900 dark:text-white font-bold">4. Grounded LLM Response</span>
                          </div>
                          <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold">Zero Hallucination</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Tilt3D>
          </div>

        </div>
      </div>

      {/* Deep-Dive Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        theme={theme}
      />
    </section>
  );
};

export default Projects;
