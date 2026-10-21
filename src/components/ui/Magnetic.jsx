import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

export const Magnetic = ({ children, range = 70, strength = 0.35, className = '' }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const rect = ref.current.getBoundingClientRect();
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;
    const distance = Math.hypot(distanceX, distanceY);
    
    if (distance < range) {
      setPosition({ 
        x: distanceX * strength, 
        y: distanceY * strength 
      });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 240, damping: 18, mass: 0.15 }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
};

export const MagneticButton = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', // 'primary' | 'glass' | 'subtle'
  className = '', 
  icon = null,
  download = false,
  target,
  rel,
  ...props 
}) => {
  const baseClasses = "relative inline-flex items-center justify-center font-display font-medium text-sm md:text-base transition-all duration-300 rounded-btn cursor-pointer select-none";
  
  const variantClasses = {
    primary: "px-7 py-3.5 text-white bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan shadow-btn-glow hover:shadow-glass-hover hover:scale-[1.03] active:scale-[0.97]",
    glass: "px-7 py-3.5 text-lab-ink bg-white/75 backdrop-blur-md border border-indigo-200/50 shadow-elevation-1 hover:border-indigo-400/60 hover:bg-white/90 hover:shadow-elevation-2 hover:scale-[1.02] active:scale-[0.97]",
    subtle: "px-5 py-2.5 text-lab-muted bg-white/50 backdrop-blur-sm border border-indigo-100 hover:text-lab-ink hover:bg-white/80 active:scale-[0.97]"
  };

  const content = (
    <span className="flex items-center gap-2">
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </span>
  );

  if (href) {
    return (
      <Magnetic>
        <a 
          href={href} 
          onClick={onClick}
          download={download}
          target={target}
          rel={rel}
          className={`${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`}
          {...props}
        >
          {content}
        </a>
      </Magnetic>
    );
  }

  return (
    <Magnetic>
      <button 
        type="button"
        onClick={onClick}
        className={`${baseClasses} ${variantClasses[variant] || variantClasses.primary} ${className}`}
        {...props}
      >
        {content}
      </button>
    </Magnetic>
  );
};

export default Magnetic;
