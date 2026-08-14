import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, ArrowRight, ExternalLink, Bot, Database, 
  Cpu, FileText, Search, Sparkles, CheckCircle2, ShieldCheck, 
  Layers, MessageSquare, ArrowUpRight, Zap, Code, Server, User, Globe
} from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProjectDetailsPage = ({ theme, toggleTheme }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isDark = theme === 'dark';

  const projectIndex = FEATURED_PROJECTS.findIndex((p) => p.id === id || p.slug === id);
  const project = projectIndex !== -1 ? FEATURED_PROJECTS[projectIndex] : FEATURED_PROJECTS[0];
  
  const nextProjectIndex = (projectIndex + 1) % FEATURED_PROJECTS.length;
  const nextProject = FEATURED_PROJECTS[nextProjectIndex];

  const [activeArchNode, setActiveArchNode] = useState(0);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-[#050507] text-[#f5f5f7]' : 'bg-[#F7F7F8] text-[#111113]'
    }`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Back Link */}
        <div className="mb-8">
          <button
            onClick={() => navigate('/')}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider border transition-all ${
              isDark
                ? 'border-white/10 bg-white/5 text-gray-300 hover:text-white'
                : 'border-[#E4E4EA] bg-white text-[#111113] hover:border-[#6D4AFF] shadow-sm'
            }`}
          >
            <ArrowLeft size={14} />
            <span>BACK TO PORTFOLIO</span>
          </button>
        </div>

        {/* Project Hero Header */}
        <div className="mb-14">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
              {project.category}
            </span>
            <span className={`font-mono text-xs font-bold px-3 py-1 rounded-full ${
              project.liveDemo
                ? 'bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                : 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/30'
            }`}>
              {project.status}
            </span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl md:text-7xl text-gray-900 dark:text-white tracking-tight">
            {project.title}
          </h1>
          <p className="font-mono text-sm sm:text-lg font-bold text-accent-purple dark:text-accent-cyan tracking-wider mt-2 uppercase">
            {project.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-accent-purple to-accent-cyan shadow-glow-purple flex items-center gap-2 hover:scale-[1.02] transition-all"
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
                className={`px-6 py-3 rounded-xl font-mono text-xs font-bold border flex items-center gap-2 transition-all ${
                  isDark
                    ? 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                    : 'border-[#E4E4EA] bg-white text-[#111113] hover:border-[#6D4AFF] shadow-sm'
                }`}
              >
                <FaGithub size={15} />
                <span>GITHUB REPOSITORY</span>
              </a>
            )}
          </div>
        </div>

        {/* Overview, Problem & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className={`lg:col-span-8 p-8 rounded-3xl border ${
            isDark ? 'glass-card-dark bg-[#0c101d]' : 'glass-card-light bg-white'
          }`}>
            <h2 className="font-display font-bold text-2xl text-gray-900 dark:text-white mb-4">
              Project Overview
            </h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-mono text-xs font-bold text-accent-purple dark:text-accent-cyan uppercase tracking-wider mb-2">
                  THE CHALLENGE
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div>
                <h3 className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2">
                  THE ENGINEERING SOLUTION
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Tech Stack Sidebar */}
          <div className={`lg:col-span-4 p-8 rounded-3xl border flex flex-col justify-between ${
            isDark ? 'glass-card-dark bg-[#0c101d]' : 'glass-card-light bg-white'
          }`}>
            <div>
              <h3 className="font-mono text-xs font-bold text-accent-purple dark:text-accent-cyan uppercase tracking-widest mb-4">
                // TECH STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10">
              <span className="text-xs font-mono text-gray-500">ENGINEERING STATUS</span>
              <p className="font-mono text-xs font-bold text-gray-900 dark:text-white mt-1">
                {project.status}
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Architecture Flow Visualizer */}
        <div className={`p-8 sm:p-10 rounded-3xl border mb-16 ${
          isDark ? 'glass-card-dark bg-[#0a0d18]' : 'glass-card-light bg-white'
        }`}>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-accent-purple dark:text-accent-cyan uppercase tracking-widest">
                SYSTEM TOPOLOGY
              </span>
              <h2 className="font-display font-black text-2xl sm:text-3xl text-gray-900 dark:text-white mt-1">
                Interactive Architecture Pipeline
              </h2>
            </div>
            <span className="text-xs font-mono text-gray-500">Click any node to inspect data flow</span>
          </div>

          {/* Stepper Pipeline Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
            {project.architecture.map((node, index) => {
              const isActive = activeArchNode === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveArchNode(index)}
                  className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between h-24 ${
                    isActive
                      ? 'border-accent-purple bg-accent-purple/20 text-accent-purple dark:text-white shadow-glow-purple scale-105 font-bold'
                      : 'border-gray-200 dark:border-white/10 bg-gray-50/50 dark:bg-white/[0.02] text-gray-600 dark:text-gray-400 hover:border-gray-400 dark:hover:border-white/20'
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
            className="p-6 rounded-2xl border border-accent-purple/30 bg-accent-purple/5 dark:bg-accent-purple/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <span className="text-[11px] font-mono font-bold text-accent-purple dark:text-accent-cyan uppercase">
                STAGE 0{activeArchNode + 1} // {project.architecture[activeArchNode]?.title || project.architecture[activeArchNode]?.step}
              </span>
              <h4 className="font-display font-bold text-lg sm:text-xl text-gray-900 dark:text-white mt-0.5">
                {project.architecture[activeArchNode]?.desc}
              </h4>
            </div>
            <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-white dark:bg-white/10 border border-gray-200 dark:border-white/10 text-gray-800 dark:text-gray-200 shrink-0">
              {project.architecture[activeArchNode]?.tech}
            </span>
          </motion.div>
        </div>

        {/* Highlights & Features Grid */}
        <div className="mb-16">
          <h2 className="font-display font-black text-2xl sm:text-3xl text-gray-900 dark:text-white mb-6">
            Key Highlights & Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {project.highlights.map((hl, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-2xl border flex items-start gap-3.5 ${
                  isDark ? 'border-white/10 bg-[#0c101d]' : 'border-[#E4E4EA] bg-white shadow-sm'
                }`}
              >
                <CheckCircle2 size={18} className="text-accent-purple dark:text-accent-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-800 dark:text-gray-300 font-medium leading-relaxed">
                  {hl}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Project Footer Switcher */}
        <div className={`p-8 rounded-3xl border flex flex-col sm:flex-row sm:items-center justify-between gap-6 ${
          isDark ? 'glass-card-dark bg-[#0c101d]' : 'glass-card-light bg-white'
        }`}>
          <div>
            <span className="text-xs font-mono font-bold text-gray-500 uppercase">
              NEXT SYSTEM SHOWCASE
            </span>
            <h3 className="font-display font-black text-2xl text-gray-900 dark:text-white mt-1">
              {nextProject.title}
            </h3>
            <p className="text-xs font-mono text-accent-purple dark:text-accent-cyan">
              {nextProject.subtitle}
            </p>
          </div>

          <button
            onClick={() => navigate(`/projects/${nextProject.slug}`)}
            className="px-6 py-3 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-accent-purple to-accent-cyan shadow-glow-purple flex items-center gap-2 hover:scale-[1.02] transition-all"
          >
            <span>VIEW {nextProject.title}</span>
            <ArrowRight size={14} />
          </button>
        </div>

      </main>

      <Footer theme={theme} />
    </div>
  );
};

export default ProjectDetailsPage;
