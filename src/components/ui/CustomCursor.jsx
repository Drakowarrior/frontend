import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'view', 'drag'
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 280, mass: 0.35 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices and if user prefers reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches ||
                    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch) return;

    document.body.classList.add('custom-cursor-active');
    setIsVisible(true);

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;

      const projectTarget = target.closest('[data-cursor="view"], .project-card-interactive');
      const clickable = target.closest('a, button, [role="button"], .cursor-pointer, input, textarea, select');
      const dragTarget = target.closest('.cursor-grab, canvas');

      if (projectTarget) {
        setCursorType('view');
      } else if (clickable) {
        setCursorType('pointer');
      } else if (dragTarget) {
        setCursorType('drag');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeaveWindow);
    document.addEventListener('mouseenter', handleMouseEnterWindow);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeaveWindow);
      document.removeEventListener('mouseenter', handleMouseEnterWindow);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  const ringVariants = {
    default: {
      width: 32,
      height: 32,
      backgroundColor: 'rgba(99, 102, 241, 0.04)',
      borderColor: 'rgba(99, 102, 241, 0.40)',
      scale: 1,
    },
    pointer: {
      width: 52,
      height: 52,
      backgroundColor: 'rgba(99, 102, 241, 0.12)',
      borderColor: '#6366F1',
      scale: 1.15,
    },
    view: {
      width: 80,
      height: 80,
      backgroundColor: 'rgba(6, 182, 212, 0.16)',
      borderColor: '#06B6D4',
      scale: 1.1,
    },
    drag: {
      width: 60,
      height: 60,
      backgroundColor: 'rgba(139, 92, 246, 0.15)',
      borderColor: '#8B5CF6',
      scale: 1.05,
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
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 16px -2px rgba(99, 102, 241, 0.25)',
        }}
        variants={ringVariants}
        animate={cursorType}
        transition={{ type: 'spring', stiffness: 280, damping: 26, mass: 0.2 }}
      >
        {cursorType === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono font-bold tracking-widest text-lab-accentCyan uppercase"
          >
            VIEW
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
          zIndex: 100000,
          backgroundColor: '#6366F1',
          boxShadow: '0 0 8px rgba(99, 102, 241, 0.8)',
        }}
        animate={{
          scale: cursorType === 'default' ? 1 : 0.4,
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
