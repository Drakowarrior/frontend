/**
 * Unified Motion Design System for Karan Garg Portfolio v2
 * 
 * Provides coherent, physics-based springs, cubic-bezier easing curves,
 * container stagger configs, and directional viewport reveal variants.
 */

// Custom cubic-bezier & spring constants
export const Physics = {
  // Snappy Linear/Vercel-inspired spring
  springSnappy: { type: "spring", stiffness: 320, damping: 26, mass: 0.4 },

  // Smooth floating spring
  springSmooth: { type: "spring", stiffness: 200, damping: 20, mass: 0.5 },
  // High-mass physical magnetic spring
  springMagnetic: { type: "spring", stiffness: 160, damping: 15, mass: 0.1 },
  // Custom exponential ease-out curve
  easeExpo: [0.16, 1, 0.3, 1],
};

// Container stagger variants
export const staggerContainer = (staggerChildren = 0.06, delayChildren = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Fade Up with 16px directional offset
export const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: Physics.easeExpo,
    },
  },
};

// Subtle Fade In
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.45,
      ease: Physics.easeExpo,
    },
  },
};

// Scale Up reveal
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.94, y: 12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: Physics.easeExpo,
    },
  },
};

// Horizontal Slide reveals
export const slideInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: Physics.easeExpo,
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: Physics.easeExpo,
    },
  },
};

// Route transition crossfade variants for AnimatePresence
export const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
    scale: 0.995,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: Physics.easeExpo,
    },
  },
  exit: {
    opacity: 0,
    y: -8,
    scale: 0.995,
    transition: {
      duration: 0.25,
      ease: [0.7, 0, 0.84, 0],
    },
  },
};
