import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, ArrowUpRight, Zap, Code
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const projectIndex = FEATURED_PROJECTS.findIndex((p) => p.id === id || p.slug === id);
  const project = projectIndex !== -1 ? FEATURED_PROJECTS[projectIndex] : FEATURED_PROJECTS[0];
  
  const nextProjectIndex = (projectIndex + 1) % FEATURED_PROJECTS.length;
  const nextProject = FEATURED_PROJECTS[nextProjectIndex];

  const [activeArchNode, setActiveArchNode] = useState(0);

  return (
    <div className="min-h-screen bg-lab-bg text-lab-ink relative selection:bg-indigo-500/20">
      
      {/* Fine Grain Texture Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <Navbar />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        
        {/* Back Link */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider border border-indigo-200/70 bg-white/80 backdrop-blur-md text-lab-ink hover:border-indigo-400 hover:text-lab-accentIndigo shadow-sm transition-all cursor-pointer"
          >
            <ArrowLeft size={14} />
            <span>BACK TO PORTFOLIO</span>
          </button>
        </div>

        {/* Project Hero Header */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-lab-accentIndigo border border-indigo-200">
              {project.category}
            </span>
            <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${
              project.liveDemo
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-amber-50 text-amber-800 border border-amber-200'
            }`}>
              {project.status}
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-lab-ink tracking-tight">
            {project.title}
          </h1>
          <p className="font-mono text-sm sm:text-lg font-bold text-lab-accentIndigo tracking-wider mt-2 uppercase">
            {project.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-btn font-mono text-xs font-bold text-white bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan shadow-btn-glow flex items-center gap-2 hover:scale-[1.02] transition-all"
              >
                <span>OPEN LIVE PLATFORM</span>
                <ArrowUpRight size={15} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-btn font-mono text-xs font-bold border border-indigo-200/70 bg-white text-lab-ink hover:border-indigo-400 shadow-sm flex items-center gap-2 transition-all"
              >
                <FaGithub size={15} />
                <span>GITHUB REPOSITORY</span>
              </a>
            )}
          </div>
        </div>

        {/* Overview, Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-8 p-8 rounded-card border border-indigo-200/60 bg-white/80 backdrop-blur-xl shadow-glass">
            <h2 className="font-display font-extrabold text-2xl text-lab-ink mb-4">
              Project Overview
            </h2>
            <p className="text-sm sm:text-base text-lab-muted leading-relaxed font-normal">
              {project.description}
            </p>

            <div className="mt-8 pt-6 border-t border-indigo-100 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-2xl bg-indigo-50/40 border border-indigo-100">
                <h3 className="font-mono text-xs font-bold text-lab-accentIndigo uppercase tracking-wider mb-2">
                  THE CHALLENGE
                </h3>
                <p className="text-xs sm:text-sm text-lab-muted leading-relaxed font-normal">
                  {project.problem}
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50/40 border border-emerald-100">
                <h3 className="font-mono text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
                  THE ARCHITECTURAL SOLUTION
                </h3>
                <p className="text-xs sm:text-sm text-lab-muted leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Sidebar */}
          <div className="lg:col-span-4 p-8 rounded-card border border-indigo-200/60 bg-white/80 backdrop-blur-xl shadow-glass flex flex-col justify-between">
            <div>
              <h3 className="font-mono text-xs font-bold text-lab-accentIndigo uppercase tracking-widest mb-4">
                // TECH STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full text-xs font-mono border border-indigo-100 bg-white text-lab-ink font-semibold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-indigo-100">
              <span className="text-xs font-mono text-lab-muted">ENGINEERING STATUS</span>
              <p className="font-mono text-xs font-bold text-lab-ink mt-1">
                {project.status}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Architecture Flow Visualizer */}
        {project.architecture && (
          <div className="p-8 sm:p-10 rounded-card border border-indigo-200/60 bg-white/80 backdrop-blur-xl shadow-glass mb-16">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
              <div>
                <span className="text-xs font-mono font-bold text-lab-accentIndigo uppercase tracking-widest">
                  SYSTEM TOPOLOGY
                </span>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-lab-ink mt-1">
                  Interactive Architecture Pipeline
                </h2>
              </div>
              <span className="text-xs font-mono text-lab-muted">Click any node to inspect data flow</span>
            </div>

            {/* Stepper Pipeline Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
              {project.architecture.map((node, index) => {
                const isActive = activeArchNode === index;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveArchNode(index)}
                    className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between h-24 cursor-pointer ${
                      isActive
                        ? 'border-indigo-400 bg-indigo-100/70 text-lab-accentIndigo shadow-btn-glow font-bold scale-105'
                        : 'border-indigo-100 bg-white/70 text-lab-muted hover:border-indigo-300'
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-70">0{index + 1}</span>
                    <span className="font-mono text-xs font-bold uppercase truncate">{node.title || node.step}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Node Detail Card */}
            <motion.div
              key={activeArchNode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 rounded-2xl border border-indigo-200 bg-indigo-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-lab-accentIndigo uppercase">
                  STAGE 0{activeArchNode + 1} // {project.architecture[activeArchNode]?.title || project.architecture[activeArchNode]?.step}
                </span>
                <h4 className="font-display font-bold text-lg sm:text-xl text-lab-ink mt-0.5">
                  {project.architecture[activeArchNode]?.desc}
                </h4>
              </div>
              <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-white border border-indigo-200 text-lab-accentIndigo shrink-0 shadow-sm">
                {project.architecture[activeArchNode]?.tech}
              </span>
            </motion.div>
          </div>
        )}

        {/* Highlights & Features Grid */}
        <div className="mb-16">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-lab-ink mb-6">
            Key Highlights & Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.highlights.map((hl, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-indigo-100 bg-white/80 shadow-sm flex items-start gap-3.5"
              >
                <CheckCircle2 size={18} className="text-lab-accentViolet shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-lab-ink font-medium leading-relaxed">
                  {hl}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Footer Switcher */}
        <div className="p-8 rounded-card border border-indigo-200/60 bg-white/80 backdrop-blur-xl shadow-glass flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono font-bold text-lab-muted uppercase">
              NEXT SYSTEM SHOWCASE
            </span>
            <h3 className="font-display font-black text-2xl text-lab-ink mt-1">
              {nextProject.title}
            </h3>
            <p className="text-xs font-mono text-lab-accentIndigo font-bold">
              {nextProject.subtitle}
            </p>
          </div>

          <button
            onClick={() => navigate(`/projects/${nextProject.slug}`)}
            className="px-6 py-3 rounded-btn font-mono text-xs font-bold text-white bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan shadow-btn-glow flex items-center gap-2 hover:scale-[1.02] transition-all cursor-pointer"
          >
            <span>VIEW {nextProject.title}</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailsPage;
