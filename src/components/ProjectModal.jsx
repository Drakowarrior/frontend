import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-indigo-950/20 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 25 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-card border border-indigo-200/60 p-6 sm:p-10 z-10 bg-white/95 backdrop-blur-2xl shadow-glass text-lab-ink"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full border border-indigo-200/60 bg-white/80 hover:bg-white text-lab-muted hover:text-lab-ink shadow-sm transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Header / Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4">
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-semibold bg-indigo-100 text-lab-accentIndigo border border-indigo-200">
                {project.category}
              </span>
              <span className={`px-3.5 py-1 rounded-full text-xs font-mono font-semibold ${
                project.liveDemo
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-800 border border-amber-200'
              }`}>
                {project.status}
              </span>
            </div>

            {/* Title & Subtitle */}
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-lab-ink">
              {project.title}
            </h2>
            <p className="font-mono text-xs sm:text-sm text-lab-accentIndigo tracking-wider mt-1 uppercase font-bold">
              {project.subtitle}
            </p>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
              <div className="p-5 rounded-2xl border border-indigo-100 bg-indigo-50/40">
                <h4 className="font-mono text-xs uppercase tracking-wider text-rose-600 font-bold mb-2">
                  // THE CHALLENGE
                </h4>
                <p className="text-xs sm:text-sm text-lab-muted leading-relaxed">
                  {project.problem}
                </p>
              </div>
              <div className="p-5 rounded-2xl border border-emerald-100 bg-emerald-50/40">
                <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-700 font-bold mb-2">
                  // THE ARCHITECTURE
                </h4>
                <p className="text-xs sm:text-sm text-lab-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Technical Highlights */}
            <div className="mb-8">
              <h4 className="font-display font-bold text-sm tracking-wider uppercase text-lab-ink mb-4">
                Key Engineering Highlights
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.highlights.map((hl, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl border border-indigo-100 bg-white shadow-sm text-xs text-lab-ink">
                    <CheckCircle2 size={15} className="text-lab-accentViolet shrink-0 mt-0.5" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Steps */}
            {project.architecture && (
              <div className="mb-8">
                <h4 className="font-display font-bold text-sm tracking-wider uppercase text-lab-ink mb-4">
                  End-to-End System Topology
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {project.architecture.map((arch, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-indigo-100 bg-white/70 shadow-sm flex flex-col justify-between">
                      <div>
                        <span className="font-mono text-[10px] text-lab-accentIndigo font-bold block mb-1">
                          STEP {idx + 1}
                        </span>
                        <h5 className="font-display font-bold text-xs text-lab-ink mb-1">{arch.title}</h5>
                        <p className="text-[11px] text-lab-muted leading-tight">{arch.desc}</p>
                      </div>
                      <span className="mt-3 text-[10px] font-mono text-lab-accentCyan font-medium block">
                        {arch.tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Stack Chips */}
            <div className="mb-8">
              <h4 className="font-mono text-xs uppercase tracking-wider text-lab-muted mb-3 font-semibold">
                Technology Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-mono border border-indigo-200/60 bg-white text-lab-ink font-semibold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-indigo-100 flex flex-wrap items-center gap-3">
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-btn font-mono text-xs font-bold text-white bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan shadow-btn-glow flex items-center gap-2 hover:scale-[1.03] transition-all"
                >
                  <span>VISIT LIVE DEMO</span>
                  <ExternalLink size={14} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-btn font-mono text-xs font-bold border border-indigo-200/70 bg-white text-lab-ink hover:border-indigo-400 hover:bg-indigo-50/50 flex items-center gap-2 transition-all shadow-sm"
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
