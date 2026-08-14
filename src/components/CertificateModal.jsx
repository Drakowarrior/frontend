import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, Download, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

const CertificateModal = ({ certificate, isOpen, onClose, theme }) => {
  if (!certificate) return null;
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
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 25 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-10 z-10 shadow-2xl ${
              isDark
                ? 'bg-[#0b0e18] border-white/15 text-white shadow-black/80'
                : 'bg-white border-[#E4E4EA] text-[#111113] shadow-slate-900/15'
            }`}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-500 dark:text-gray-400"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {/* Category & Badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="p-2 rounded-xl bg-accent-purple/20 text-accent-purple border border-accent-purple/30">
                <Award size={18} />
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                {certificate.category}
              </span>
            </div>

            {/* Title & Issuer */}
            <h2 className="font-display font-black text-2xl sm:text-3xl text-gray-900 dark:text-white tracking-tight">
              {certificate.title}
            </h2>
            <p className="font-mono text-sm font-bold text-accent-purple dark:text-accent-cyan mt-1">
              {certificate.issuer}
            </p>

            {/* Acquired Skills */}
            {certificate.skills && (
              <div className="mt-6">
                <h4 className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-2.5">
                  // VERIFIED COMPETENCIES
                </h4>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-xl text-xs font-mono border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-white/10 flex flex-wrap items-center gap-3">
              {certificate.credentialUrl ? (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-accent-purple to-accent-cyan shadow-glow-purple flex items-center gap-2 hover:scale-[1.02] transition-all"
                >
                  <span>OPEN CREDENTIAL</span>
                  <ExternalLink size={13} />
                </a>
              ) : (
                <span className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-gray-100 dark:bg-white/5 text-gray-500 border border-gray-200 dark:border-white/10">
                  CREDENTIAL COMING SOON
                </span>
              )}

              {certificate.driveUrl && (
                <a
                  href={certificate.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl font-mono text-xs font-bold border border-gray-200 dark:border-white/15 bg-white dark:bg-white/5 text-gray-800 dark:text-white flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-white/10 transition-all"
                >
                  <span>VIEW DRIVE</span>
                  <ExternalLink size={13} />
                </a>
              )}

              <a
                href="/KaranGarg_Resume.pdf"
                download="KaranGarg_Resume.pdf"
                className="px-4 py-2.5 rounded-xl font-mono text-xs font-semibold border border-gray-200 dark:border-white/15 bg-transparent text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white flex items-center gap-2 ml-auto transition-all"
              >
                <Download size={13} />
                <span>RESUME</span>
              </a>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CertificateModal;
