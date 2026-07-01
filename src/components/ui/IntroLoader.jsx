import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroLoader = ({ theme, onComplete }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user has already seen the intro during this session
    const hasSeenIntro = sessionStorage.getItem('portfolio_intro_seen');
    if (hasSeenIntro) {
      setLoading(false);
      if (onComplete) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      handleComplete();
    }, 2200);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleComplete = () => {
    sessionStorage.setItem('portfolio_intro_seen', 'true');
    setLoading(false);
    if (onComplete) onComplete();
  };

  const isDark = theme === 'dark';

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -100,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
          }}
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center ${
            isDark ? 'bg-[#05070c]' : 'bg-[#f1f5f9]'
          }`}
        >
          {/* Main Logo & Text animation */}
          <div className="flex flex-col items-center">
            {/* 3D Looking Rotating Ring Logo */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: -45 }}
              animate={{ 
                scale: 1, 
                opacity: 1, 
                rotate: 315,
                transition: { duration: 1.2, ease: [0.34, 1.56, 0.64, 1] }
              }}
              className="h-20 w-20 flex items-center justify-center rounded-2xl bg-gradient-to-tr from-accent-purple via-accent-blue to-accent-cyan shadow-2xl shadow-accent-purple/35 mb-6"
            >
              <motion.span 
                initial={{ opacity: 0, scale: 0.3 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="font-display font-black text-white text-3xl tracking-wider"
              >
                KG
              </motion.span>
            </motion.div>

            {/* Title / Name Letter by Letter Draw */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.4 }}
                className="font-display font-black text-2xl tracking-[0.2em] uppercase"
                style={{ color: isDark ? '#ffffff' : '#0f172a' }}
              >
                Karan Garg
              </motion.h1>
            </div>

            {/* Small divider line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 80 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="h-[2px] bg-gradient-to-r from-accent-purple to-accent-cyan mt-3 rounded-full"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="text-xs tracking-[0.1em] text-gray-500 uppercase mt-2 font-medium"
            >
              AI & Bioscience portfolio
            </motion.p>
          </div>

          {/* Skip Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            onClick={handleComplete}
            className={`absolute bottom-8 right-8 px-4 py-2 rounded-xl border text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${
              isDark 
                ? 'border-gray-800 bg-gray-900/40 text-gray-400 hover:border-gray-700 hover:text-white' 
                : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 hover:text-black'
            }`}
          >
            Skip Intro
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
