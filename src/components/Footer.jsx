import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ArrowUp, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'WORK', href: '/#projects' },
    { name: 'METHODOLOGY', href: '/#pipeline' },
    { name: 'STACK', href: '/#stack' },
    { name: 'SKILLS', href: '/#skills' },
    { name: 'EXPERIENCE', href: '/#experience' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'CERTIFICATES', href: '/#certifications' },
    { name: 'RESEARCH', href: '/#publications' },
    { name: 'RÉSUMÉ', href: '/resume' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <footer className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Soft Gradient Horizon Line */}
      <div 
        className="w-full max-w-6xl mx-auto h-[2px] bg-gradient-to-r from-transparent via-lab-accentIndigo/35 to-transparent mb-12 shadow-sm"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto flex flex-col justify-between gap-10">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan p-[1.5px] shadow-sm flex items-center justify-center">
              <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center">
                <span className="font-display font-black text-xs text-gradient-hero">
                  KG
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-display font-extrabold text-lg text-lab-ink tracking-tight">
                KARAN GARG
              </h3>
              <p className="font-mono text-[10px] text-lab-accentIndigo uppercase tracking-wider font-bold">
                AI ENGINEER • FULL-STACK DEVELOPER
              </p>
            </div>
          </div>

          {/* Quick Nav links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lab-muted hover:text-lab-accentIndigo font-semibold transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-2.5">
            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-indigo-200/60 bg-white/80 text-lab-muted hover:text-lab-ink hover:border-indigo-400 shadow-sm transition-all"
              aria-label="GitHub Profile"
            >
              <FaGithub size={15} />
            </a>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl border border-indigo-200/60 bg-white/80 text-lab-muted hover:text-lab-ink hover:border-indigo-400 shadow-sm transition-all"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="p-2.5 rounded-xl border border-indigo-200/60 bg-white/80 text-lab-muted hover:text-lab-ink hover:border-indigo-400 shadow-sm transition-all"
              aria-label="Direct Email"
            >
              <FaEnvelope size={15} />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-lab-muted">
          <p>
            Designed & engineered with curiosity. © 2026 Karan Garg
          </p>

          <div className="flex items-center gap-6">
            <a
              href={SITE_CONFIG.certificationsDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lab-accentIndigo transition-colors flex items-center gap-1.5"
            >
              <span>Certifications Drive</span>
              <ExternalLink size={12} />
            </a>

            {/* Back to Top with Upward Float Animation */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200/60 bg-white/80 text-lab-ink font-bold hover:bg-white hover:border-indigo-400 shadow-sm transition-all group cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={13} className="transition-transform group-hover:-translate-y-1 text-lab-accentViolet" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;