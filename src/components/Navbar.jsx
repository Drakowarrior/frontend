import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import Magnetic from './ui/Magnetic';
import { SITE_CONFIG } from '../config/siteConfig';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'WORK', href: '#projects' },
    { name: 'METHODOLOGY', href: '#pipeline' },
    { name: 'STACK', href: '#stack' },
    { name: 'SKILLS', href: '#skills' },
    { name: 'EXPERIENCE', href: '#experience' },
    { name: 'RESEARCH', href: '#publications' },
    { name: 'CONTACT', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['home', 'about', 'projects', 'pipeline', 'stack', 'skills', 'experience', 'publications', 'contact'];
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
      const navOffset = 90;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleResumeClick = () => {
    window.open(process.env.PUBLIC_URL + SITE_CONFIG.resumeUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 flex justify-center px-4 sm:px-6 pointer-events-none ${
        scrolled ? 'py-2.5 sm:py-3.5' : 'py-5 sm:py-6'
      }`}
    >
      <nav
        className={`pointer-events-auto w-full max-w-4xl transition-all duration-300 rounded-full flex items-center justify-between px-3 sm:px-5 py-2 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-2xl border border-indigo-200/50 shadow-glass-hover py-1.5'
            : 'bg-white/70 backdrop-blur-xl border border-indigo-200/35 shadow-elevation-1'
        }`}
      >
        {/* Monogram KG Logo */}
        <Magnetic range={40} strength={0.3}>
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === '/') {
                e.preventDefault();
                scrollTo('#home');
              }
            }}
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="Karan Garg Home"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan p-[1.5px] transition-transform duration-300 group-hover:scale-105 shadow-sm flex items-center justify-center">
              <div className="w-full h-full rounded-[10px] bg-white flex items-center justify-center">
                <span className="font-display font-black text-xs tracking-tighter text-gradient-hero">
                  KG
                </span>
              </div>
            </div>
            <span className="font-display font-extrabold text-xs sm:text-sm tracking-tight text-lab-ink group-hover:text-lab-accentIndigo transition-colors hidden sm:inline">
              Karan Garg
            </span>
          </a>
        </Magnetic>

        {/* Desktop Nav Items with Sliding Highlight */}
        <div className="hidden lg:flex items-center gap-0.5">
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
                className={`relative px-3 py-1.5 rounded-full text-[11px] font-mono tracking-wider transition-colors z-10 ${
                  isActive
                    ? 'text-lab-accentIndigo font-bold'
                    : 'text-lab-muted hover:text-lab-ink'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-full bg-indigo-100/70 border border-indigo-200/60 -z-10 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right CTA / Resume */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Magnetic range={35} strength={0.25}>
            <button
              onClick={handleResumeClick}
              className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider border border-indigo-200/70 bg-gradient-to-r from-purple-50 to-indigo-50 text-lab-accentIndigo hover:bg-gradient-to-r hover:from-lab-accentViolet hover:to-lab-accentIndigo hover:text-white shadow-sm transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
              title="Open Resume PDF"
            >
              <span>RÉSUMÉ</span>
              <ArrowUpRight size={13} />
            </button>
          </Magnetic>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="lg:hidden p-2 rounded-full border border-indigo-200/50 bg-white/80 text-lab-ink shadow-sm cursor-pointer hover:bg-white"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Staggered Glass Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-auto lg:hidden fixed top-20 left-4 right-4 p-5 rounded-3xl shadow-glass border border-indigo-200/60 bg-white/95 backdrop-blur-2xl z-50"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.035 }}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(link.href);
                  }}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-mono tracking-widest uppercase transition-all flex items-center justify-between ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-indigo-100/80 text-lab-accentIndigo font-bold border border-indigo-200'
                      : 'text-lab-muted hover:text-lab-ink hover:bg-indigo-50/50'
                  }`}
                >
                  <span>{link.name}</span>
                  {activeSection === link.href.replace('#', '') && (
                    <span className="w-2 h-2 rounded-full bg-lab-accentIndigo animate-pulse" />
                  )}
                </motion.a>
              ))}

              <div className="pt-3 mt-2 border-t border-indigo-100 flex flex-col gap-2">
                <button
                  onClick={handleResumeClick}
                  className="w-full py-3 rounded-btn text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan flex items-center justify-center gap-2 shadow-btn-glow cursor-pointer"
                >
                  <span>VIEW RÉSUMÉ PDF</span>
                  <ArrowUpRight size={14} />
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