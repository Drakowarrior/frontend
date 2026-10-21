import React, { useState, useRef, useEffect } from 'react';

export const TiltCard3D = ({ 
  children, 
  className = '', 
  maxTilt = 12, 
  scale = 1.02,
  glare = true,
  glareOpacity = 0.25,
  depth = 32
}) => {
  const cardRef = useRef(null);
  const [transformStyle, setTransformStyle] = useState('perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 
                    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setIsTouchDevice(isTouch);
  }, []);

  const handleMouseMove = (e) => {
    if (!cardRef.current || isTouchDevice) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Normalized [-0.5, 0.5]
    const normX = (mouseX / width) - 0.5;
    const normY = (mouseY / height) - 0.5;
    
    const rotateY = normX * maxTilt * 2;
    const rotateX = -normY * maxTilt * 2;
    
    setTransformStyle(`perspective(1100px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`);
    
    if (glare) {
      setGlarePosition({
        x: Math.round((mouseX / width) * 100),
        y: Math.round((mouseY / height) * 100),
        opacity: glareOpacity
      });
    }
  };

  const handleMouseEnter = () => {
    if (isTouchDevice) return;
    if (glare) {
      setGlarePosition(prev => ({ ...prev, opacity: glareOpacity }));
    }
  };

  const handleMouseLeave = () => {
    if (isTouchDevice) return;
    setTransformStyle('perspective(1100px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    if (glare) {
      setGlarePosition(prev => ({ ...prev, opacity: 0 }));
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transformStyle,
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        transformStyle: 'preserve-3d',
      }}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Moving Light Glare Overlay */}
      {glare && !isTouchDevice && (
        <div 
          className="pointer-events-none absolute inset-0 z-30 transition-opacity duration-300"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 260px at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.75), transparent 75%)`,
            mixBlendMode: 'overlay',
          }}
        />
      )}

      {/* Children container with translateZ for layered depth */}
      <div 
        style={{ 
          transform: `translateZ(${depth}px)`, 
          transformStyle: 'preserve-3d' 
        }} 
        className="w-full h-full"
      >
        {children}
      </div>
    </div>
  );
};

export default TiltCard3D;
