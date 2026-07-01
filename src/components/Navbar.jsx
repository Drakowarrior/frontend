import React, { useState, useEffect, useMemo } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './ui/Magnetic';

const Navbar = ({ theme, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Wrap navItems in useMemo to exclude projects and keep the list clean
  const navItems = useMemo(() => [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navClass = isScrolled
    ? theme === 'dark'
      ? 'bg-bgDark/80 border-b border-white/5 backdrop-blur-md shadow-lg shadow-black/10'
      : 'bg-bgLight/80 border-b border-black/5 backdrop-blur-md shadow-lg shadow-gray-200/10'
    : 'bg-transparent border-b border-transparent';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${navClass} h-20 flex items-center`}>
      <div className="max-w-7xl w-full mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
          onClick={() => scrollToSection('home')}
        >
          <img
            src={process.env.PUBLIC_URL + '/karan_logo-removebg-preview.png'}
            alt="Karan Garg Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="ml-3 font-display font-bold text-lg tracking-wide hidden sm:block">
            Karan Garg
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-1 items-center">
            {navItems.map((item) => (
              <li key={item.id}>
                <Magnetic range={40} strength={0.3}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium tracking-wide rounded-lg transition-colors duration-300 ${activeSection === item.id
                      ? theme === 'dark' ? 'text-white font-semibold' : 'text-indigo-600 font-semibold'
                      : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'
                      }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </Magnetic>
              </li>
            ))}
          </ul>

          {/* Theme Toggle Button */}
          <Magnetic range={30} strength={0.35}>
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border flex items-center justify-center transition-colors duration-300 ${theme === 'dark'
                ? 'bg-gray-800/80 border-gray-700/50 hover:bg-gray-700 text-yellow-400 shadow-glow-purple/20 shadow-md'
                : 'bg-white border-gray-200 hover:bg-gray-50 text-indigo-600 shadow-md shadow-indigo-100/50'
                }`}
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={theme}
                  initial={{ y: -10, opacity: 0, rotate: -45 }}
                  animate={{ y: 0, opacity: 1, rotate: 0 }}
                  exit={{ y: 10, opacity: 0, rotate: 45 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </Magnetic>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl border flex items-center justify-center transition-colors duration-300 ${theme === 'dark'
              ? 'bg-gray-800/80 border-gray-700/50 text-yellow-400'
              : 'bg-white border-gray-200 text-indigo-600'
              }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            className={`p-2 rounded-xl border transition-colors duration-300 ${theme === 'dark'
              ? 'bg-gray-800/80 border-gray-700/50 text-gray-300 hover:text-white'
              : 'bg-white border-gray-200 text-gray-700 hover:text-black'
              }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`absolute top-20 left-0 w-full border-b overflow-hidden md:hidden shadow-xl ${theme === 'dark'
              ? 'bg-bgDark border-gray-800/80'
              : 'bg-bgLight border-gray-200'
              }`}
          >
            <ul className="px-6 py-4 flex flex-col gap-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-all ${activeSection === item.id
                      ? theme === 'dark'
                        ? 'bg-gradient-to-r from-accent-purple/10 to-accent-cyan/10 border-l-4 border-accent-purple text-white'
                        : 'bg-indigo-50 border-l-4 border-indigo-600 text-indigo-600'
                      : theme === 'dark'
                        ? 'text-gray-400 hover:bg-gray-800/40 hover:text-white'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                      }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;