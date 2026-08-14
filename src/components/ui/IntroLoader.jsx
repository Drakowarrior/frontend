import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroLoader = ({ theme, onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [stage, setStage] = useState(0); // 0: KG, 1: AI ENGINEER, 2: FULL-STACK DEVELOPER

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('kg_intro_seen');
    if (hasSeenIntro) {
      setLoading(false);
      if (onComplete) onComplete();
      return;
    }

    const stage1Timer = setTimeout(() => setStage(1), 500);
    const stage2Timer = setTimeout(() => setStage(2), 1000);
    const finishTimer = setTimeout(() => {
      sessionStorage.setItem('kg_intro_seen', 'true');
      setLoading(false);
      if (onComplete) onComplete();
    }, 1800);

    return () => {
      clearTimeout(stage1Timer);
      clearTimeout(stage2Timer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    sessionStorage.setItem('kg_intro_seen', 'true');
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
            clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] } 
          }}
          className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none ${
            isDark ? 'bg-[#06080d]' : 'bg-[#f8fafc]'
          }`}
          style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-96 h-96 rounded-full bg-accent-purple/15 blur-3xl pointer-events-none animate-pulse-glow" />

          <div className="flex flex-col items-center relative z-10">
            {/* Monogram / Official Logo */}
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-6"
            >
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-accent-violet via-accent-ultraviolet to-accent-cyan p-[2px] shadow-glow-violet overflow-hidden flex items-center justify-center">
                <div className={`w-full h-full rounded-[14px] flex items-center justify-center p-2 ${isDark ? 'bg-[#06080d]' : 'bg-white'}`}>
                  <img
                    src={process.env.PUBLIC_URL + '/karan_logo-removebg-preview.png'}
                    alt="Karan Garg Logo"
                    className="w-full h-full object-contain filter drop-shadow animate-pulse"
                  />
                </div>
              </div>
            </motion.div>

            {/* Cinematic Text Reveal Sequence */}
            <div className="h-10 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {stage === 0 && (
                  <motion.span
                    key="name"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display font-extrabold text-xl sm:text-2xl tracking-[0.25em] text-white"
                  >
                    KARAN GARG
                  </motion.span>
                )}
                {stage === 1 && (
                  <motion.span
                    key="ai"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="font-mono text-sm sm:text-base font-semibold tracking-[0.25em] text-accent-cyan"
                  >
                    AI ENGINEER
                  </motion.span>
                )}
                {stage === 2 && (
                  <motion.span
                    key="fullstack"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="font-mono text-sm sm:text-base font-semibold tracking-[0.25em] text-accent-purple"
                  >
                    FULL-STACK DEVELOPER
                  </motion.span>
                )}
              </AnimatePresence>
            </div>

            {/* Progress line */}
            <div className="w-36 h-[2px] bg-gray-800 rounded-full mt-5 overflow-hidden">
              <motion.div
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.6, ease: 'easeInOut' }}
                className="h-full bg-gradient-to-r from-accent-violet via-accent-cyan to-accent-purple"
              />
            </div>
          </div>

          <button
            onClick={handleSkip}
            className="absolute bottom-8 text-xs font-mono tracking-widest text-gray-500 hover:text-gray-300 transition-colors uppercase"
          >
            [ Skip ]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
