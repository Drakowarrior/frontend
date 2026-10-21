import React, { useRef, useMemo, useEffect, useState, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Individual floating glass geometric shape
function FloatingShape({ shapeType, position, scale, rotationSpeed, floatSpeed, color, roughness = 0.2 }) {
  const meshRef = useRef();
  const initialY = position[1];
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.position.y = initialY + Math.sin(t * floatSpeed + offset) * 0.45;
    meshRef.current.rotation.x += rotationSpeed.x;
    meshRef.current.rotation.y += rotationSpeed.y;
    meshRef.current.rotation.z += rotationSpeed.z;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      {shapeType === 'sphere' && <sphereGeometry args={[1, 24, 24]} />}
      {shapeType === 'torus' && <torusGeometry args={[0.9, 0.32, 16, 32]} />}
      {shapeType === 'box' && <boxGeometry args={[1.2, 1.2, 1.2]} />}
      {shapeType === 'octa' && <octahedronGeometry args={[1.1, 0]} />}
      {shapeType === 'ico' && <icosahedronGeometry args={[1, 0]} />}
      
      <meshStandardMaterial
        color={color}
        roughness={roughness}
        metalness={0.12}
        transparent={true}
        opacity={0.45}
      />
    </mesh>
  );
}

// Scene with camera parallax linked to scroll and mouse
function LabScene({ isMobile, reducedMotion }) {
  const groupRef = useRef();

  // Floating shape descriptors - 18 curated pastel geometric forms
  const shapes = useMemo(() => {
    const list = [
      // Left upper quadrant (Pastel Lavender/Violet)
      { shapeType: 'sphere', position: [-7, 4.5, -4], scale: 1.4, color: '#C4B5FD', rotationSpeed: { x: 0.003, y: 0.005, z: 0.002 }, floatSpeed: 0.6 },
      { shapeType: 'torus', position: [-8.5, 0.5, -6], scale: 1.3, color: '#DDD6FE', rotationSpeed: { x: 0.004, y: 0.002, z: 0.004 }, floatSpeed: 0.5 },
      { shapeType: 'octa', position: [-5, -3.5, -3], scale: 1.0, color: '#A5B4FC', rotationSpeed: { x: 0.005, y: 0.004, z: 0.001 }, floatSpeed: 0.7 },
      { shapeType: 'sphere', position: [-6, -7.5, -5], scale: 1.6, color: '#BAE6FD', rotationSpeed: { x: 0.002, y: 0.003, z: 0.001 }, floatSpeed: 0.4 },
      
      // Right upper quadrant (Pastel Cyan/Sky)
      { shapeType: 'torus', position: [7.5, 5, -5], scale: 1.5, color: '#BAE6FD', rotationSpeed: { x: 0.004, y: 0.006, z: 0.002 }, floatSpeed: 0.65 },
      { shapeType: 'box', position: [8, 1, -4], scale: 1.1, color: '#DDD6FE', rotationSpeed: { x: 0.003, y: 0.003, z: 0.005 }, floatSpeed: 0.55 },
      { shapeType: 'sphere', position: [6, -3, -3], scale: 1.2, color: '#7DD3FC', rotationSpeed: { x: 0.002, y: 0.004, z: 0.003 }, floatSpeed: 0.7 },
      { shapeType: 'octa', position: [7.5, -7, -6], scale: 1.3, color: '#C7D2FE', rotationSpeed: { x: 0.005, y: 0.002, z: 0.004 }, floatSpeed: 0.45 },

      // Deep atmospheric background layer
      { shapeType: 'sphere', position: [-3, 7, -10], scale: 2.4, color: '#EDE9FE', rotationSpeed: { x: 0.001, y: 0.002, z: 0.001 }, floatSpeed: 0.3 },
      { shapeType: 'sphere', position: [4, 6.5, -12], scale: 2.8, color: '#E0F7FB', rotationSpeed: { x: 0.001, y: 0.002, z: 0.001 }, floatSpeed: 0.35 },
      { shapeType: 'torus', position: [0, -10, -8], scale: 2.0, color: '#DDD6FE', rotationSpeed: { x: 0.002, y: 0.003, z: 0.002 }, floatSpeed: 0.4 },
      { shapeType: 'box', position: [-2, -12, -7], scale: 1.4, color: '#CFFAFE', rotationSpeed: { x: 0.003, y: 0.004, z: 0.002 }, floatSpeed: 0.5 },
      
      // Midfield accents
      { shapeType: 'ico', position: [-4.2, 1.2, -5], scale: 0.85, color: '#E0E7FF', rotationSpeed: { x: 0.004, y: 0.005, z: 0.003 }, floatSpeed: 0.8 },
      { shapeType: 'sphere', position: [3.8, 1.8, -4], scale: 0.9, color: '#CFFAFE', rotationSpeed: { x: 0.003, y: 0.003, z: 0.002 }, floatSpeed: 0.75 },
    ];

    return isMobile ? list.slice(0, 6) : list;
  }, [isMobile]);

  useFrame((state) => {
    if (reducedMotion || !groupRef.current) return;
    
    // Pointer parallax
    const targetX = (state.pointer.x * 0.8);
    const targetY = (state.pointer.y * 0.5);
    
    groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.04;
    groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.04;

    // Subtle scroll-driven slow rotation
    const scrollY = window.scrollY || 0;
    groupRef.current.rotation.y = scrollY * 0.0003;
  });

  return (
    <group ref={groupRef}>
      {shapes.map((s, idx) => (
        <FloatingShape key={idx} {...s} />
      ))}
    </group>
  );
}

export default function LabBackgroundCanvas() {
  const [isLowPower, setIsLowPower] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isTouch = window.innerWidth < 768;
    setIsMobile(isTouch);

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setReducedMotion(prefersReduced);

    // Hardware check: low cores or low memory
    const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const lowMem = navigator.deviceMemory && navigator.deviceMemory <= 4;
    if (lowCores || lowMem) {
      setIsLowPower(true);
    }
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none select-none overflow-hidden"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    >
      <Canvas
        camera={{ position: [0, 0, 14], fov: 46 }}
        dpr={isLowPower ? [1, 1] : [1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <fog attach="fog" args={['#F6F5FF', 10, 28]} />
        <ambientLight intensity={0.9} color="#FFFFFF" />
        <directionalLight position={[10, 15, 10]} intensity={1.2} color="#EDE9FE" />
        <directionalLight position={[-10, -10, 5]} intensity={0.7} color="#E0F7FB" />
        
        <Suspense fallback={null}>
          <LabScene isMobile={isMobile} reducedMotion={reducedMotion} />
        </Suspense>
      </Canvas>
    </div>
  );
}
