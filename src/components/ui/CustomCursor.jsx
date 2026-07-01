import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = ({ theme }) => {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'drag', 'verify'
  const [isVisible, setIsVisible] = useState(false);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for trailing circle
  const springConfig = { damping: 25, stiffness: 220, mass: 0.5 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Hide cursor on touch devices
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeaveWindow = () => {
      setIsVisible(false);
    };

    const handleMouseEnterWindow = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);

    // Global event listener to detect clickable/drag targets
    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const clickable = target.closest('a, button, [role="button"], .cursor-pointer, input, textarea');
      const dragTarget = target.closest('.cursor-grab, canvas');
      const verifyTarget = target.closest('.flip-card');
      
      if (dragTarget) {
        setCursorType('drag');
      } else if (verifyTarget) {
        setCursorType('verify');
      } else if (clickable) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  const isDark = theme === 'dark';
  
  // Style config based on hover state
  const ringVariants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: 'transparent',
      borderColor: isDark ? 'rgba(6, 182, 212, 0.4)' : 'rgba(59, 130, 246, 0.4)',
    },
    pointer: {
      width: 50,
      height: 50,
      backgroundColor: isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(99, 102, 241, 0.08)',
      borderColor: isDark ? '#8b5cf6' : '#6366f1',
    },
    drag: {
      width: 70,
      height: 70,
      backgroundColor: isDark ? 'rgba(34, 211, 238, 0.15)' : 'rgba(14, 165, 233, 0.1)',
      borderColor: isDark ? '#22d3ee' : '#0ea5e9',
    },
    verify: {
      width: 80,
      height: 80,
      backgroundColor: isDark ? 'rgba(167, 139, 250, 0.15)' : 'rgba(124, 58, 237, 0.08)',
      borderColor: isDark ? '#a78bfa' : '#7c3aed',
    }
  };

  return (
    <>
      {/* Outer trailing ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: trailX,
          top: trailY,
          x: '-50%',
          y: '-50%',
          borderRadius: '50%',
          borderWidth: '1.5px',
          pointerEvents: 'none',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transformStyle: 'preserve-3d',
        }}
        variants={ringVariants}
        animate={cursorType}
        transition={{ type: 'spring', stiffness: 220, damping: 24, mass: 0.1 }}
      >
        {/* Label for Drag/Verify */}
        {cursorType === 'drag' && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-black tracking-widest text-accent-cyan uppercase pointer-events-none"
          >
            Drag
          </motion.span>
        )}
        {cursorType === 'verify' && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-black tracking-widest text-accent-purple uppercase pointer-events-none"
          >
            Flip
          </motion.span>
        )}
      </motion.div>

      {/* Inner leading dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: mouseX,
          top: mouseY,
          x: '-50%',
          y: '-50%',
          width: 6,
          height: 6,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
        animate={{
          scale: cursorType === 'default' ? 1 : 0.5,
          backgroundColor: isDark ? '#22d3ee' : '#3b82f6',
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
