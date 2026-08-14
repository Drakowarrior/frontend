import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import Tilt3D from './ui/Tilt3D';
import Magnetic from './ui/Magnetic';
import { CERTIFICATIONS } from '../data/portfolioData';
import { SITE_CONFIG } from '../config/siteConfig';

const Certificates = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="certifications" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header with Global Google Drive CTA */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent-purple" />
              <span className="text-xs font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
                08 // VERIFIED CREDENTIALS
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
              INDUSTRY <span className="text-gradient dark:text-gradient">CERTIFICATIONS</span>
            </h2>
            <p className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 max-w-xl">
              Verified learning, technical training, and professional specializations.
            </p>
          </div>

          {/* Primary Google Drive CTA at Top */}
          <div className="shrink-0">
            <Magnetic range={40} strength={0.35}>
              <a
                href={SITE_CONFIG.certificationsDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-2xl font-mono text-xs font-bold text-white bg-gradient-to-r from-accent-purple via-accent-violet to-accent-cyan shadow-glow-purple flex items-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all group"
              >
                <span>VIEW ALL CERTIFICATIONS</span>
                <ExternalLink size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id || idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
            >
              <Tilt3D maxTilt={4} scale={1.01} className="h-full">
                <div
                  className={`p-5 rounded-3xl border h-full flex flex-col justify-between transition-all duration-300 ${
                    isDark
                      ? 'glass-card-dark border-white/10 bg-[#0c101d] hover:border-accent-purple/40'
                      : 'glass-card-light bg-white border-[#D8DCE5] hover:border-accent-purple/30 shadow-sm'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="p-1.5 rounded-lg bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                        <Award size={16} />
                      </div>
                      <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-gray-100 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10">
                        {cert.category}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-sm text-gray-900 dark:text-white leading-snug">
                      {cert.title}
                    </h3>
                    
                    {cert.description && (
                      <p className="mt-1.5 text-xs text-gray-600 dark:text-gray-400 leading-relaxed font-normal">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-gray-200 dark:border-white/10 flex items-center justify-between text-xs font-mono">
                    <span className="text-gray-700 dark:text-gray-400 font-semibold">{cert.issuer}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" title="Verified" />
                  </div>
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>

        {/* Bottom Secondary CTA */}
        <div className={`p-6 rounded-3xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
          isDark ? 'glass-card-dark bg-[#0c101d]' : 'glass-card-light bg-white border-[#D8DCE5] shadow-sm'
        }`}>
          <div className="text-left">
            <span className="text-[10px] font-mono font-bold text-accent-purple dark:text-accent-cyan uppercase">
              GOOGLE DRIVE REPOSITORY
            </span>
            <h3 className="font-display font-black text-lg sm:text-xl text-gray-900 dark:text-white mt-0.5">
              Access Full Verified Credentials & Documents
            </h3>
          </div>

          <a
            href={SITE_CONFIG.certificationsDriveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-accent-purple to-accent-cyan shadow-glow-purple flex items-center gap-2 hover:scale-[1.02] shrink-0 transition-all"
          >
            <span>EXPLORE CERTIFICATIONS</span>
            <ExternalLink size={13} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Certificates;