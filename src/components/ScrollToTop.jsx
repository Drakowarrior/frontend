import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = ({ theme }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 p-3 rounded-xl border flex items-center justify-center shadow-lg transition-colors duration-300 hover:scale-105 active:scale-95 ${
            isDark 
              ? 'bg-gray-800/80 border-gray-700/50 hover:bg-gray-700 text-accent-purple shadow-accent-purple/20' 
              : 'bg-white border-gray-200 hover:bg-gray-50 text-indigo-600 shadow-indigo-100'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;