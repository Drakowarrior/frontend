import React, { useState, useRef } from 'react';

const Tilt3D = ({ children, className = '', maxTilt = 10, scale = 1.02 }) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [transitionStyle, setTransitionStyle] = useState('all 0.5s cubic-bezier(0.25, 1, 0.5, 1)');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Width and height of the card
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to the card's top-left corner
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation angles (normalized from -0.5 to 0.5)
    const rotateY = ((mouseX / width) - 0.5) * maxTilt;
    // Note: X-rotation is inverted (moving mouse down rotates card forward/down)
    const rotateX = (0.5 - (mouseY / height)) * maxTilt;
    
    setTransitionStyle('none'); // Remove transition during active tracking for immediate responsiveness
    setTransformStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale}, ${scale}, ${scale})`);
  };

  const handleMouseEnter = () => {
    setTransitionStyle('all 0.15s cubic-bezier(0.25, 1, 0.5, 1)');
  };

  const handleMouseLeave = () => {
    // Reset to flat
    setTransitionStyle('all 0.5s cubic-bezier(0.25, 1, 0.5, 1)');
    setTransformStyle('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: transitionStyle,
        transformStyle: 'preserve-3d',
      }}
      className={`cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
};

export default Tilt3D;
