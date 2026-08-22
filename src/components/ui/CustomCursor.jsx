import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = ({ theme }) => {
  const [cursorType, setCursorType] = useState('default'); // 'default', 'pointer', 'view', 'drag'
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 260, mass: 0.4 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
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
      const clickable = target.closest('a, button, [role="button"], .cursor-pointer, input, textarea');
      const dragTarget = target.closest('.cursor-grab, canvas');

      if (clickable) {
        setCursorType('pointer');
      } else if (projectTarget) {
        setCursorType('view');
      } else if (dragTarget) {
        setCursorType('drag');
      } else {
        setCursorType('default');
      }
    };


    window.addEventListener('mousemove', handleMouseMove);
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

  const isDark = theme === 'dark';

  const ringVariants = {
    default: {
      width: 28,
      height: 28,
      backgroundColor: 'transparent',
      borderColor: isDark ? 'rgba(139, 92, 246, 0.45)' : 'rgba(99, 102, 241, 0.45)',
    },
    pointer: {
      width: 48,
      height: 48,
      backgroundColor: isDark ? 'rgba(124, 58, 237, 0.12)' : 'rgba(99, 102, 241, 0.1)',
      borderColor: isDark ? '#a78bfa' : '#6366f1',
    },
    view: {
      width: 74,
      height: 74,
      backgroundColor: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(14, 165, 233, 0.15)',
      borderColor: isDark ? '#22d3ee' : '#0ea5e9',
    },
    drag: {
      width: 58,
      height: 58,
      backgroundColor: isDark ? 'rgba(139, 92, 246, 0.15)' : 'rgba(99, 102, 241, 0.1)',
      borderColor: isDark ? '#8b5cf6' : '#6366f1',
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
        }}
        variants={ringVariants}
        animate={cursorType}
        transition={{ type: 'spring', stiffness: 260, damping: 28, mass: 0.2 }}
      >
        {cursorType === 'view' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-mono font-bold tracking-widest text-accent-cyan uppercase"
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
          width: 5,
          height: 5,
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 100000,
        }}
        animate={{
          scale: cursorType === 'default' ? 1 : 0.4,
          backgroundColor: isDark ? '#38bdf8' : '#6366f1',
        }}
        transition={{ duration: 0.1 }}
      />
    </>
  );
};

export default CustomCursor;
