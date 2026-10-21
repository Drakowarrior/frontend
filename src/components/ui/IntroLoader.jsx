import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroLoader = ({ onComplete }) => {
  const [loading, setLoading] = useState(true);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem('kg_intro_seen');
    if (hasSeenIntro) {
      setLoading(false);
      if (onComplete) onComplete();
      return;
    }

    const stage1Timer = setTimeout(() => setStage(1), 400);
    const stage2Timer = setTimeout(() => setStage(2), 850);
    const finishTimer = setTimeout(() => {
      sessionStorage.setItem('kg_intro_seen', 'true');
      setLoading(false);
      if (onComplete) onComplete();
    }, 1500);

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

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            y: -20,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center select-none bg-[#F6F5FF]"
        >
          {/* Luminous Soft Radial Ambient Background */}
          <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-purple-200/50 via-indigo-200/40 to-cyan-100/50 blur-3xl pointer-events-none animate-pulse-soft" />

          <div className="flex flex-col items-center relative z-10 px-6 text-center">
            {/* Monogram KG */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-xl border border-indigo-200/60 shadow-glass flex items-center justify-center mb-6 relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-lab-accentViolet/20 to-lab-accentCyan/20 blur-sm pointer-events-none" />
              <span className="font-display font-black text-2xl tracking-tighter text-gradient-hero">
                KG
              </span>
            </motion.div>

            {/* Staged Title Reveal */}
            <div className="h-10 flex items-center justify-center overflow-hidden">
              <AnimatePresence mode="wait">
                {stage === 0 && (
                  <motion.p
                    key="stage-0"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="font-display font-bold text-lg text-lab-ink tracking-tight"
                  >
                    KARAN GARG
                  </motion.p>
                )}
                {stage === 1 && (
                  <motion.p
                    key="stage-1"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="font-mono text-xs uppercase tracking-widest text-lab-accentIndigo font-bold"
                  >
                    AI ENGINEER
                  </motion.p>
                )}
                {stage === 2 && (
                  <motion.p
                    key="stage-2"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    className="font-mono text-xs uppercase tracking-widest text-lab-accentCyan font-bold"
                  >
                    FULL-STACK DEVELOPER
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Subtle progress bar */}
            <div className="w-36 h-1 bg-indigo-100 rounded-full mt-6 overflow-hidden">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, ease: "easeInOut" }}
                className="h-full bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan"
              />
            </div>

            {/* Skip Button */}
            <button
              onClick={handleSkip}
              className="mt-8 text-[11px] font-mono tracking-widest text-lab-muted hover:text-lab-ink transition-colors uppercase cursor-pointer"
            >
              [ Skip intro ]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
