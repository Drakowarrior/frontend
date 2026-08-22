import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';


const CountUp = ({ 
  to, 
  from = 0, 
  duration = 1.8, 
  decimals = 1, 
  suffix = "", 
  prefix = "",
  className = "" 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const count = useMotionValue(from);
  
  const formatted = useTransform(count, (latest) => {
    return `${prefix}${latest.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      });
      return controls.stop;
    }
  }, [isInView, count, to, duration]);

  return (
    <span ref={ref} className={className}>
      {isInView ? <motion.span>{formatted}</motion.span> : `${prefix}${from.toFixed(decimals)}${suffix}`}
    </span>
  );
};

export default CountUp;
