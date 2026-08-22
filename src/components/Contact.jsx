import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Copy, CheckCircle2, Sparkles } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Magnetic from './ui/Magnetic';
import { PERSONAL_INFO } from '../data/portfolioData';

const Contact = ({ theme }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const isDark = theme === 'dark';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="section-anchor py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      {/* Background Glow */}

      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none ${
        isDark ? 'bg-accent-purple/15' : 'bg-purple-200/35'
      }`} />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        
        {/* Eyebrow */}
        <div className={`inline-flex items-center gap-2 px-3.5 py-1 rounded-full border text-xs font-mono tracking-widest uppercase mb-6 font-bold ${
          isDark
            ? 'border-accent-purple/30 bg-accent-purple/10 text-accent-cyan'
            : 'border-accent-purple/30 bg-purple-50 text-accent-purple shadow-sm'
        }`}>
          <Sparkles size={12} className="text-accent-purple dark:text-accent-cyan" />
          <span>INITIATE COLLABORATION</span>
        </div>

        {/* Dramatic Headline */}
        <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-gray-900 dark:text-white leading-[1.08]">
          HAVE AN IDEA? <br />
          <span className="text-gradient dark:text-gradient">LET'S BUILD IT.</span>
        </h2>

        {/* Supporting Copy */}
        <p className="mt-4 text-sm sm:text-base md:text-lg font-normal leading-relaxed text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          Whether it's an AI product, intelligent application, full-stack platform, or something experimental — let's create something meaningful.
        </p>

        {/* Primary Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Magnetic range={45} strength={0.35}>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="px-7 py-3 rounded-2xl font-mono text-xs sm:text-sm font-bold tracking-wider text-white bg-gradient-to-r from-accent-purple via-accent-violet to-accent-cyan shadow-glow-purple hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2"
            >
              <Mail size={15} />
              <span>EMAIL ME</span>
            </a>
          </Magnetic>

          <Magnetic range={45} strength={0.35}>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-2xl font-mono text-xs sm:text-sm font-bold tracking-wider border flex items-center gap-2 transition-all ${
                isDark
                  ? 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                  : 'border-[#D8DCE5] bg-white text-[#090A0F] hover:border-[#4F46E5] shadow-sm'
              }`}
            >
              <FaLinkedin size={15} />
              <span>LINKEDIN</span>
              <ArrowUpRight size={13} />
            </a>
          </Magnetic>

          <Magnetic range={45} strength={0.35}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 rounded-2xl font-mono text-xs sm:text-sm font-bold tracking-wider border flex items-center gap-2 transition-all ${
                isDark
                  ? 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                  : 'border-[#D8DCE5] bg-white text-[#090A0F] hover:border-[#6D4AFF] shadow-sm'
              }`}
            >
              <FaGithub size={15} />
              <span>GITHUB</span>
              <ArrowUpRight size={13} />
            </a>
          </Magnetic>
        </div>

        {/* Direct Contact Cards with Copy feedback */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto">
          {/* Email Copy Card */}
          <div
            onClick={handleCopyEmail}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between text-left group ${
              isDark
                ? 'border-white/10 bg-white/[0.03] hover:border-accent-purple/40 hover:bg-white/[0.06]'
                : 'border-[#D8DCE5] bg-white hover:border-accent-purple shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-accent-purple/10 text-accent-purple dark:text-accent-cyan">
                <Mail size={15} />
              </div>
              <div>
                <span className="text-[9px] font-mono text-gray-500 uppercase font-bold">DIRECT EMAIL</span>
                <p className="font-mono text-xs font-bold text-gray-900 dark:text-white group-hover:text-accent-purple dark:group-hover:text-accent-cyan transition-colors">
                  {PERSONAL_INFO.email}
                </p>
              </div>
            </div>
            <div>
              {copiedEmail ? (
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> COPIED ✓
                </span>
              ) : (
                <Copy size={14} className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              )}
            </div>
          </div>

          {/* Phone Copy Card */}
          <div
            onClick={handleCopyPhone}
            className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between text-left group ${
              isDark
                ? 'border-white/10 bg-white/[0.03] hover:border-accent-cyan/40 hover:bg-white/[0.06]'
                : 'border-[#D8DCE5] bg-white hover:border-accent-purple shadow-sm'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-accent-purple/10 text-accent-purple">
                <Phone size={15} />
              </div>
              <div>
                <span className="text-[9px] font-mono text-gray-500 uppercase font-bold">TELEPHONE</span>
                <p className="font-mono text-xs font-bold text-gray-900 dark:text-white group-hover:text-accent-purple dark:group-hover:text-accent-cyan transition-colors">
                  {PERSONAL_INFO.phone}
                </p>
              </div>
            </div>
            <div>
              {copiedPhone ? (
                <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 size={12} /> COPIED ✓
                </span>
              ) : (
                <Copy size={14} className="text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
              )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;