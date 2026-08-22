import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink, Download, FileText, ArrowUpRight } from 'lucide-react';
import Magnetic from './ui/Magnetic';
import ThemeSwitcher from './ThemeSwitcher';
import { SITE_CONFIG, downloadResume } from '../config/siteConfig';

const Navbar = ({ theme, setThemeMode, themeMode, systemIsDark }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const isDark = theme === 'dark';

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#projects' },
    { name: 'SYSTEMS', href: '#pipeline' },
    { name: 'STACK', href: '#stack' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'CERTIFICATIONS', href: '#certifications' },
    { name: 'RESEARCH', href: '#publications' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);

      const sections = ['home', 'about', 'projects', 'pipeline', 'stack', 'experience', 'certifications', 'publications', 'contact'];
      const scrollPos = window.scrollY + 220;


      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href) => {
    setMobileMenuOpen(false);
    if (window.location.pathname !== '/') {
      window.location.href = '/' + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      const navOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeOpen = (e) => {
    // Open the actual PDF in a new tab
    window.open(process.env.PUBLIC_URL + SITE_CONFIG.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center px-4 sm:px-6 ${
        scrolled ? 'py-2 sm:py-3' : 'py-5 sm:py-6'
      }`}
    >

      <nav
        className={`w-full max-w-5xl transition-all duration-300 rounded-full flex items-center justify-between px-4 sm:px-6 py-2 sm:py-2.5 ${
          scrolled
            ? isDark
              ? 'bg-[#0a0d16]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60'
              : 'bg-white/95 backdrop-blur-xl border border-[#E1E4EA] shadow-lg shadow-slate-900/5'
            : isDark
            ? 'bg-[#050507]/60 backdrop-blur-md border border-white/5'
            : 'bg-white/70 backdrop-blur-md border border-[#E1E4EA]/60'
        }`}
      >
        {/* Brand Logo & Name */}
        <Magnetic range={35} strength={0.3}>
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                scrollTo('#home');
              }
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-accent-purple to-accent-cyan p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm overflow-hidden flex items-center justify-center">
              <div className={`w-full h-full rounded-[10px] flex items-center justify-center p-0.5 ${
                isDark ? 'bg-[#050507]' : 'bg-white'
              }`}>
                <img
                  src={process.env.PUBLIC_URL + '/karan_logo-removebg-preview.png'}
                  alt="Karan Garg Logo"
                  className="w-full h-full object-contain filter drop-shadow"
                />
              </div>
            </div>
            <span className="font-display font-black text-sm tracking-tight text-gray-900 dark:text-white group-hover:text-accent-purple dark:group-hover:text-accent-cyan transition-colors hidden sm:inline">
              Karan Garg
            </span>
          </a>
        </Magnetic>

        {/* Desktop Nav Items with Tiny Animated Dot Active Indicator */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`relative px-3 py-1 rounded-full text-xs font-mono tracking-wider transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-accent-purple dark:text-accent-cyan font-black'
                    : isDark
                    ? 'text-gray-300 hover:text-white hover:bg-white/5'
                    : 'text-gray-700 hover:text-black hover:bg-gray-100'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="w-1.5 h-1.5 rounded-full bg-accent-purple dark:bg-accent-cyan"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Distinct RESUME ↗ Button */}
          <Magnetic range={35} strength={0.3}>
            <button
              onClick={handleResumeOpen}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider border flex items-center gap-1.5 transition-all ${
                isDark
                  ? 'border-accent-purple/40 bg-accent-purple/10 text-white hover:bg-accent-purple/20 hover:border-accent-purple'
                  : 'border-accent-purple/30 bg-purple-50 text-accent-purple hover:bg-accent-purple hover:text-white shadow-sm'
              }`}
              title="Open Resume PDF in New Tab"
            >
              <span>RESUME</span>
              <ArrowUpRight size={13} />
            </button>
          </Magnetic>

          {/* 3-Way Theme Switcher */}
          <ThemeSwitcher theme={theme} setThemeMode={setThemeMode} themeMode={themeMode} systemIsDark={systemIsDark} />

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className={`lg:hidden p-2 rounded-full border ${
              isDark
                ? 'border-white/15 bg-white/5 text-gray-200'
                : 'border-[#E1E4EA] bg-white text-gray-800 shadow-sm'
            }`}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Staggered Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden fixed top-20 left-4 right-4 p-6 rounded-3xl shadow-2xl z-50 border ${
              isDark
                ? 'bg-[#090d16]/95 backdrop-blur-2xl border-white/10 text-white'
                : 'bg-white/95 backdrop-blur-2xl border-[#E1E4EA] text-[#111318]'
            }`}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.04 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-mono tracking-widest uppercase transition-colors flex items-center justify-between ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-accent-purple/15 text-accent-purple dark:text-accent-cyan font-bold border border-accent-purple/30'
                      : isDark
                      ? 'text-gray-300 hover:bg-white/5'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.href.replace('#', '') && (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-purple dark:bg-accent-cyan" />
                  )}
                </motion.a>
              ))}

              <div className="pt-3 mt-2 border-t border-gray-200 dark:border-white/10 flex flex-col gap-2">
                <button
                  onClick={handleResumeOpen}
                  className="w-full py-3 rounded-2xl text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-accent-purple to-accent-cyan flex items-center justify-center gap-2 shadow-lg"
                >
                  <FileText size={14} />
                  <span>VIEW RESUME PDF ↗</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;