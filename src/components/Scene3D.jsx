import React, { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Random points generator for particle space
const generateRandomPoints = (count, radius = 8) => {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const theta = THREE.MathUtils.randFloatSpread(360);
    const phi = THREE.MathUtils.randFloatSpread(360);
    
    points[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
    points[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    points[i * 3 + 2] = radius * Math.cos(theta);
  }
  return points;
};

// 3D deforming mathematical waving landscape grid
const WavyLandscape = ({ theme }) => {
  const meshRef = useRef();
  const isDark = theme === 'dark';

  const gridColor = isDark ? '#0ea5e9' : '#3b82f6';

  // Plane settings
  const width = 18;
  const height = 12;
  const widthSeg = 36;
  const heightSeg = 24;

  // Track coordinates of plane vertices to compute wave heights
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (!meshRef.current) return;

    const geo = meshRef.current.geometry;
    const posAttr = geo.attributes.position;
    
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const y = posAttr.getY(i);
      
      // Multi-sine mathematical wave formula for a dynamic organic look
      const z = Math.sin(x * 0.3 + time * 0.8) * Math.cos(y * 0.3 + time * 0.8) * 0.3 + 
                Math.sin(x * 0.1 - time * 0.4) * 0.15;
      
      posAttr.setZ(i, z);
    }
    
    posAttr.needsUpdate = true;

    // React to pointer coordinates
    const targetRotX = -Math.PI / 3.2 + state.pointer.y * 0.04;
    const targetRotZ = state.pointer.x * 0.05;
    meshRef.current.rotation.x += (targetRotX - meshRef.current.rotation.x) * 0.05;
    meshRef.current.rotation.z += (targetRotZ - meshRef.current.rotation.z) * 0.05;
  });

  return (
    <mesh 
      ref={meshRef} 
      position={[0, -2.2, -1.5]} 
      rotation={[-Math.PI / 3.2, 0, 0]}
    >
      <planeGeometry args={[width, height, widthSeg, heightSeg]} />
      <meshStandardMaterial 
        color={gridColor} 
        wireframe 
        transparent 
        opacity={isDark ? 0.18 : 0.08}
        roughness={0.5}
        metalness={0.2}
      />
    </mesh>
  );
};

// Low poly floating shape elements
const FloatingMesh = ({ theme }) => {
  const meshRef = useRef();
  const [speed] = useState(() => Math.random() * 0.4 + 0.2);
  const [rotationSpeed] = useState(() => ({
    x: Math.random() * 0.008 - 0.004,
    y: Math.random() * 0.008 - 0.004,
  }));
  const [position] = useState(() => [
    THREE.MathUtils.randFloatSpread(10),
    THREE.MathUtils.randFloatSpread(6) + 1,
    THREE.MathUtils.randFloatSpread(4) - 4
  ]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y = position[1] + Math.sin(time * speed) * 0.25;
    meshRef.current.rotation.x += rotationSpeed.x;
    meshRef.current.rotation.y += rotationSpeed.y;
  });

  const meshColor = theme === 'dark' ? '#8b5cf6' : '#6366f1';

  return (
    <mesh ref={meshRef} position={position}>
      <icosahedronGeometry args={[0.25, 0]} />
      <meshStandardMaterial 
        color={meshColor} 
        wireframe
        transparent
        opacity={theme === 'dark' ? 0.22 : 0.1}
      />
    </mesh>
  );
};

// Floating background space particles
const Particles = ({ theme, isMobile }) => {
  const ref = useRef();
  const pointsCount = isMobile ? 250 : 800;
  
  const sphere = useMemo(() => generateRandomPoints(pointsCount, 7), [pointsCount]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Slow rotational drift
    ref.current.rotation.x = time * 0.015;
    ref.current.rotation.y = time * 0.02;
    
    // React to pointer coordinates
    const targetX = state.pointer.x * 0.4;
    const targetY = state.pointer.y * 0.4;
    ref.current.position.x += (targetX - ref.current.position.x) * 0.04;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.04;
  });

  const particleColor = theme === 'dark' ? '#22d3ee' : '#3b82f6';

  return (
    <group rotation={[0, 0, Math.PI / 6]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color={particleColor}
          size={isMobile ? 0.025 : 0.04}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={theme === 'dark' ? 0.55 : 0.3}
        />
      </Points>
    </group>
  );
};

// Handle camera adjustments based on scroll position
const ScrollTracker = () => {
  const { camera } = useThree();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      // Zoom out and tilt camera down slightly as user scrolls
      camera.position.z = 5.5 + scrollPercent * 2.2;
      camera.position.y = -scrollPercent * 0.5;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [camera]);

  return null;
};

const Scene3D = ({ theme }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTabActive, setIsTabActive] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('resize', checkMobile);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  if (!isTabActive) return null;

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none transition-colors duration-300">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={theme === 'dark' ? 0.35 : 0.75} />
          
          <pointLight 
            position={[10, 8, 10]} 
            intensity={theme === 'dark' ? 1.0 : 1.6} 
            color={theme === 'dark' ? '#8b5cf6' : '#3b82f6'}
          />
          <pointLight 
            position={[-10, -8, -10]} 
            intensity={0.5} 
            color={theme === 'dark' ? '#06b6d4' : '#22d3ee'}
          />
          
          {/* 3D Wave Grid Landscape */}
          <WavyLandscape theme={theme} />
          
          {/* Floating space particles */}
          <Particles theme={theme} isMobile={isMobile} />
          
          {/* Floating low poly elements (only on desktop for speed) */}
          {!isMobile && (
            <>
              <FloatingMesh theme={theme} />
              <FloatingMesh theme={theme} />
              <FloatingMesh theme={theme} />
              <FloatingMesh theme={theme} />
            </>
          )}
          
          <ScrollTracker />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;
