import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { ArrowUp, Download, CheckCircle2, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { SITE_CONFIG, downloadResume } from '../config/siteConfig';

const Footer = ({ theme }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleResumeDownload = () => {
    downloadResume(
      () => setDownloading(true),
      () => {
        setDownloading(false);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);
      }
    );
  };

  const navLinks = [
    { name: 'WORK', href: '/#projects' },
    { name: 'PIPELINE', href: '/#pipeline' },
    { name: 'STACK', href: '/#stack' },
    { name: 'EXPERIENCE', href: '/#experience' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'CERTIFICATES', href: '/#certifications' },
    { name: 'RESUME', href: '/resume' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <footer className={`border-t py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-300 ${
      isDark ? 'border-white/10 bg-[#04060a]' : 'border-[#E4E4EA] bg-white text-[#111113]'
    }`}>
      <div className="max-w-6xl mx-auto flex flex-col justify-between gap-12">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-accent-purple to-accent-cyan p-[1.5px] shadow-sm overflow-hidden flex items-center justify-center">
                <div className={`w-full h-full rounded-[10px] flex items-center justify-center p-0.5 ${
                  isDark ? 'bg-[#06080d]' : 'bg-white'
                }`}>
                  <img
                    src={process.env.PUBLIC_URL + '/karan_logo-removebg-preview.png'}
                    alt="Karan Garg Logo"
                    className="w-full h-full object-contain filter drop-shadow"
                  />
                </div>
              </div>
              <h3 className="font-display font-black text-xl text-gray-900 dark:text-white tracking-tight">
                KARAN GARG
              </h3>
            </div>
            <p className="font-mono text-xs text-accent-purple dark:text-accent-cyan mt-1 uppercase tracking-widest font-bold">
              AI ENGINEER • FULL-STACK DEVELOPER
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap items-center gap-5 text-xs font-mono">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Social icons & Resume action */}
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
            <button
              onClick={handleResumeDownload}
              className={`px-3 py-1.5 rounded-xl border text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                downloadSuccess
                  ? 'border-emerald-500 text-emerald-600 dark:text-emerald-400'
                  : isDark
                  ? 'border-white/10 bg-white/5 hover:text-white hover:border-white/30'
                  : 'border-[#E4E4EA] bg-gray-50 hover:text-black hover:border-gray-400 shadow-sm'
              }`}
            >
              {downloadSuccess ? (
                <>
                  <CheckCircle2 size={13} />
                  <span>READY ✓</span>
                </>
              ) : (
                <>
                  <Download size={13} />
                  <span>RESUME ↓</span>
                </>
              )}
            </button>

            <a
              href={SITE_CONFIG.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'border-white/10 bg-white/5 hover:text-white hover:border-white/30'
                  : 'border-[#E4E4EA] bg-gray-50 hover:text-black hover:border-gray-400 shadow-sm'
              }`}
              aria-label="GitHub"
            >
              <FaGithub size={15} />
            </a>
            <a
              href={SITE_CONFIG.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'border-white/10 bg-white/5 hover:text-white hover:border-white/30'
                  : 'border-[#E4E4EA] bg-gray-50 hover:text-black hover:border-gray-400 shadow-sm'
              }`}
              aria-label="LinkedIn"
            >
              <FaLinkedin size={15} />
            </a>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className={`p-2.5 rounded-xl border transition-colors ${
                isDark
                  ? 'border-white/10 bg-white/5 hover:text-white hover:border-white/30'
                  : 'border-[#E4E4EA] bg-gray-50 hover:text-black hover:border-gray-400 shadow-sm'
              }`}
              aria-label="Email"
            >
              <FaEnvelope size={15} />
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <p>
            Designed & engineered with curiosity. © 2026 Karan Garg
          </p>

          <div className="flex items-center gap-6">
            <a
              href={SITE_CONFIG.certificationsDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-purple transition-colors flex items-center gap-1"
            >
              <span>Certifications Drive</span>
              <ExternalLink size={11} />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white font-bold transition-colors group"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={13} className="transition-transform group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;