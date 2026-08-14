import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, Cpu, Database, Server, Layers, ShieldCheck } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose, theme }) => {
  if (!project) return null;
  const isDark = theme === 'dark';

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-10 z-10 shadow-2xl ${
              isDark
                ? 'bg-[#0a0e18] border-white/15 text-white shadow-black/80'
                : 'bg-white border-black/10 text-slate-900 shadow-slate-900/20'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Header / Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                {project.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-mono font-semibold ${
                project.liveDemo
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                  : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
              }`}>
                {project.status}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-white">
              {project.title}
            </h2>
            <p className="font-mono text-sm sm:text-base text-accent-cyan tracking-wider mt-1 uppercase">
              {project.subtitle}
            </p>

            {/* Description */}
            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-300">
              <p>{project.description}</p>
            </div>

            {/* Tech Stack Chips */}
            <div className="mt-8">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-3">
                // TECHNOLOGY STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl text-xs font-mono border border-white/10 bg-white/5 text-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Pipeline Flow */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
                // SYSTEM ARCHITECTURE & DATA FLOW
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-2xl border border-white/10 bg-white/[0.03] flex flex-col justify-between"
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-accent-purple/20 text-accent-cyan text-[10px] font-mono font-bold flex items-center justify-center border border-accent-purple/30">
                        {idx + 1}
                      </span>
                      <h5 className="font-mono text-xs font-bold text-white">{item.step}</h5>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 font-mono leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Engineering Highlights */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">
                // KEY HIGHLIGHTS & CAPABILITIES
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                    <CheckCircle2 size={16} className="text-accent-cyan shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Links */}
            <div className="mt-10 pt-6 border-t border-white/10 flex flex-wrap items-center gap-4">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold tracking-wider text-white bg-gradient-to-r from-accent-violet via-accent-ultraviolet to-accent-cyan shadow-glow-purple hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
                >
                  <ExternalLink size={15} />
                  <span>OPEN LIVE PLATFORM</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold tracking-wider border border-white/15 bg-white/5 hover:bg-white/10 text-white transition-all flex items-center gap-2"
                >
                  <FaGithub size={15} />
                  <span>VIEW REPOSITORY</span>
                </a>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
