/**
 * Unified Motion Design System for Karan Garg Portfolio "Bright 3D Lab"
 * 
 * Provides physics-based springs, cubic-bezier easing curves,
 * 3D reveal variants, stagger configs, and route transitions.
 */

export const Physics = {
  // Snappy modern spring
  springSnappy: { type: "spring", stiffness: 340, damping: 28, mass: 0.5 },
  // Floating spring for ambient chips and cards
  springSmooth: { type: "spring", stiffness: 180, damping: 22, mass: 0.6 },
  // High-mass physical magnetic spring for buttons
  springMagnetic: { type: "spring", stiffness: 220, damping: 16, mass: 0.2 },
  // Delicate float
  springDelicate: { type: "spring", stiffness: 120, damping: 18, mass: 0.8 },
  // Custom exponential ease-out curve
  easeExpo: [0.16, 1, 0.3, 1],
  easeOutBack: [0.34, 1.56, 0.64, 1],
};

// Container stagger variants
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.05) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

// Fade Up with 20px offset
export const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
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
      duration: 0.5,
      ease: Physics.easeExpo,
    },
  },
};

// 3D Card Reveal: orchestrated rotateX & translateZ
export const cardReveal3D = {
  hidden: { 
    opacity: 0, 
    y: 35, 
    rotateX: 12,
    scale: 0.96
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: Physics.easeExpo,
    },
  },
};

// Masked line-by-line reveal for Hero Name
export const heroNameContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export const heroNameWord = {
  hidden: { y: "110%", opacity: 0, rotateZ: 2 },
  visible: {
    y: "0%",
    opacity: 1,
    rotateZ: 0,
    transition: {
      duration: 0.85,
      ease: Physics.easeExpo,
    },
  },
};

// Scale Up reveal
export const scaleUp = {
  hidden: { opacity: 0, scale: 0.92, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: Physics.easeExpo,
    },
  },
};

// Horizontal Slide reveals
export const slideInLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: Physics.easeExpo,
    },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 28 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.65,
      ease: Physics.easeExpo,
    },
  },
};

// Route transition crossfade with slight z-depth push
export const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.985,
    y: 12,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: Physics.easeExpo,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.985,
    y: -8,
    transition: {
      duration: 0.25,
      ease: [0.7, 0, 0.84, 0],
    },
  },
};
