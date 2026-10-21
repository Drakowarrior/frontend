import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowUpRight, Bot, Database, 
  ArrowRight, Zap, Code, ExternalLink, Clock
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import TiltCard3D from './ui/TiltCard3D';
import ProjectModal from './ProjectModal';
import { FEATURED_PROJECTS } from '../data/portfolioData';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  return (
    <section id="projects" className="section-anchor py-12 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-lab-accentViolet" />
              <span className="text-xs font-mono tracking-widest text-lab-accentIndigo uppercase font-bold">
                02 // FEATURED SYSTEMS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-lab-ink">
              INTELLIGENT <span className="text-gradient-hero">WORK</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-lab-muted max-w-md">
            Production-grade AI architectures, full-stack systems, and retrieval engines engineered for high reliability.
          </p>
        </div>

        {/* Projects Showcase Stream */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* PROJECT 01: SARVA AI */}
          <div className="project-card-interactive group" data-cursor="view">
            <TiltCard3D maxTilt={7} scale={1.01} depth={32} className="w-full rounded-card">
              <div className="p-6 sm:p-9 lg:p-11 rounded-card border border-indigo-200/50 bg-white/75 backdrop-blur-xl shadow-glass transition-all duration-300 group-hover:shadow-glass-hover group-hover:border-indigo-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Metadata & Details */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-lab-accentIndigo border border-indigo-200/70">
                          PROJECT // 01
                        </span>
                        <span className="font-mono text-xs text-emerald-700 flex items-center gap-1.5 font-bold bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                          Live & Deployed
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-lab-ink tracking-tight">
                        SARVA AI
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-lab-accentIndigo tracking-wider mt-1 uppercase font-bold">
                        FULL-STACK ENTERPRISE AI ASSISTANT
                      </p>

                      <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-lab-muted">
                        A full-stack AI assistant engineered for intelligent conversations, secure JWT authentication, session management, and scalable FastAPI backend services with MongoDB Atlas.
                      </p>

                      {/* Tech Stack Chips Lifted on translateZ */}
                      <div 
                        style={{ transform: 'translateZ(26px)' }}
                        className="flex flex-wrap gap-2 mt-6"
                      >
                        {FEATURED_PROJECTS[0].stack.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-mono border border-indigo-200/60 bg-white/90 text-lab-ink font-semibold shadow-sm transition-transform hover:scale-105"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="mt-6 space-y-2">
                        {FEATURED_PROJECTS[0].highlights.slice(0, 3).map((hl, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-xs font-mono text-lab-muted font-medium">
                            <Zap size={13} className="text-lab-accentViolet shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 pt-6 border-t border-indigo-100 flex flex-wrap items-center gap-3">
                      <a
                        href={FEATURED_PROJECTS[0].liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-btn font-mono text-xs font-bold text-white bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan shadow-btn-glow flex items-center gap-2 hover:scale-[1.03] transition-all"
                      >
                        <span>LIVE DEMO</span>
                        <ArrowUpRight size={14} />
                      </a>
                      <a
                        href={FEATURED_PROJECTS[0].github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-btn font-mono text-xs font-bold border border-indigo-200/70 bg-white text-lab-ink hover:border-indigo-400 hover:bg-indigo-50/50 flex items-center gap-2 transition-all shadow-sm"
                      >
                        <FaGithub size={14} />
                        <span>CODE</span>
                      </a>
                      <button
                        onClick={() => navigate('/projects/sarva-ai')}
                        className="px-4 py-2.5 rounded-btn font-mono text-xs font-bold text-lab-accentIndigo hover:bg-indigo-50 border border-transparent hover:border-indigo-200 transition-all flex items-center gap-1.5 ml-auto cursor-pointer"
                      >
                        <span>CASE STUDY</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Simulated Interactive AI SaaS Interface */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl border border-indigo-200/70 bg-gradient-to-b from-white to-indigo-50/40 p-4 sm:p-5 shadow-elevation-2 overflow-hidden font-mono text-xs">
                      {/* Window Header */}
                      <div className="flex items-center justify-between pb-3 border-b border-indigo-100 mb-3.5">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-rose-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                          <span className="text-[11px] text-lab-muted ml-2 font-bold">sarva-ai-platform.io</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold border border-emerald-200">
                          JWT AUTH // VERIFIED
                        </span>
                      </div>

                      {/* Mockup Chat Stream */}
                      <div className="space-y-3 mb-4">
                        <div className="flex items-start gap-2 justify-end">
                          <div className="bg-indigo-100/80 border border-indigo-200 text-lab-ink p-3 rounded-2xl rounded-tr-sm max-w-[85%] shadow-sm">
                            <p className="text-xs">Summarize the recent multi-session context and prepare vector embeddings for indexing.</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-lab-accentViolet to-lab-accentCyan flex items-center justify-center shrink-0 shadow-sm">
                            <Bot size={14} className="text-white" />
                          </div>
                          <div className="p-3 rounded-2xl rounded-tl-sm max-w-[85%] space-y-1.5 bg-white border border-indigo-100 text-lab-ink shadow-sm">
                            <p className="text-xs leading-relaxed">
                              <span className="text-lab-accentIndigo font-bold">SARVA Engine:</span> Multi-session state verified via JWT tokens. Context vectorized and indexed into MongoDB Atlas in 24ms.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Input Bar Mock */}
                      <div className="p-2.5 rounded-xl border border-indigo-200/80 bg-white flex items-center justify-between text-lab-muted shadow-sm">
                        <span>Ask SARVA Assistant or attach documents...</span>
                        <div className="w-7 h-7 rounded-lg bg-gradient-to-r from-lab-accentViolet to-lab-accentIndigo flex items-center justify-center text-white shadow-sm">
                          <ArrowRight size={13} />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </TiltCard3D>
          </div>

          {/* PROJECT 02: MedRAG */}
          <div className="project-card-interactive group" data-cursor="view">
            <TiltCard3D maxTilt={7} scale={1.01} depth={32} className="w-full rounded-card">
              <div className="p-6 sm:p-9 lg:p-11 rounded-card border border-indigo-200/50 bg-white/75 backdrop-blur-xl shadow-glass transition-all duration-300 group-hover:shadow-glass-hover group-hover:border-indigo-300">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  
                  {/* Left Column: Metadata & Details */}
                  <div className="lg:col-span-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-cyan-100 text-lab-accentCyan border border-cyan-200/70">
                          PROJECT // 02
                        </span>
                        <span className="font-mono text-xs text-amber-700 flex items-center gap-1.5 font-bold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                          <Clock size={12} className="animate-spin text-amber-600" />
                          Under Deployment
                        </span>
                      </div>

                      <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-lab-ink tracking-tight">
                        MedRAG
                      </h3>
                      <p className="font-mono text-xs sm:text-sm text-lab-accentIndigo tracking-wider mt-1 uppercase font-bold">
                        RETRIEVAL-AUGMENTED MEDICAL AI ASSISTANT
                      </p>

                      <p className="mt-4 text-sm sm:text-base font-normal leading-relaxed text-lab-muted">
                        An AI-powered medical assistant using Retrieval-Augmented Generation (RAG) to provide grounded, context-aware responses through high-dimensional semantic document retrieval.
                      </p>

                      {/* Tech Stack Chips Lifted on translateZ */}
                      <div 
                        style={{ transform: 'translateZ(26px)' }}
                        className="flex flex-wrap gap-2 mt-6"
                      >
                        {FEATURED_PROJECTS[1].stack.map((item, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-full text-xs font-mono border border-indigo-200/60 bg-white/90 text-lab-ink font-semibold shadow-sm transition-transform hover:scale-105"
                          >
                            {item}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <div className="mt-6 space-y-2">
                        {FEATURED_PROJECTS[1].highlights.slice(0, 3).map((hl, idx) => (
                          <div key={idx} className="flex items-center gap-2.5 text-xs font-mono text-lab-muted font-medium">
                            <Zap size={13} className="text-lab-accentCyan shrink-0" />
                            <span>{hl}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 pt-6 border-t border-indigo-100 flex flex-wrap items-center gap-3">
                      <div className="px-4 py-2.5 rounded-btn font-mono text-xs font-bold border border-amber-200 bg-amber-50 text-amber-800 flex items-center gap-2">
                        <Clock size={14} />
                        <span>REPOSITORY COMING SOON</span>
                      </div>
                      <button
                        onClick={() => navigate('/projects/medrag')}
                        className="px-4 py-2.5 rounded-btn font-mono text-xs font-bold text-lab-accentIndigo hover:bg-indigo-50 border border-transparent hover:border-indigo-200 transition-all flex items-center gap-1.5 ml-auto cursor-pointer"
                      >
                        <span>ARCHITECTURE STUDY</span>
                        <ArrowRight size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: RAG Vector Pipeline Visualization */}
                  <div className="lg:col-span-6">
                    <div className="rounded-2xl border border-indigo-200/70 bg-gradient-to-b from-white to-cyan-50/40 p-5 sm:p-6 shadow-elevation-2 overflow-hidden font-mono text-xs">
                      <div className="flex items-center justify-between pb-3 border-b border-indigo-100 mb-4">
                        <div className="flex items-center gap-2">
                          <Database size={15} className="text-lab-accentIndigo" />
                          <span className="font-bold text-lab-ink">RAG RETRIEVAL PIPELINE</span>
                        </div>
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-800 text-[10px] font-bold border border-cyan-200">
                          COSINE SIMILARITY
                        </span>
                      </div>

                      <div className="space-y-3">
                        <div className="p-3 rounded-xl bg-white border border-indigo-100 shadow-sm flex items-center justify-between">
                          <span className="text-lab-muted">1. Clinical PDF Corpus</span>
                          <span className="font-bold text-lab-accentIndigo">PubMed & Guidelines</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-indigo-100 shadow-sm flex items-center justify-between">
                          <span className="text-lab-muted">2. Dense Token Chunking</span>
                          <span className="font-bold text-lab-accentViolet">Overlap Tokenizer</span>
                        </div>
                        <div className="p-3 rounded-xl bg-white border border-indigo-100 shadow-sm flex items-center justify-between">
                          <span className="text-lab-muted">3. Vector Search Index</span>
                          <span className="font-bold text-lab-accentCyan">Dense Embeddings</span>
                        </div>
                        <div className="p-3 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border border-indigo-200 shadow-sm flex items-center justify-between">
                          <span className="text-lab-ink font-semibold">4. Grounded Synthesis</span>
                          <span className="font-bold text-emerald-600">Zero Hallucinations</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </TiltCard3D>
          </div>

        </div>

        {/* Modal if opened */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
};

export default Projects;
