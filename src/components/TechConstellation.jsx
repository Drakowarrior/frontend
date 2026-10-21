import React, { useState, useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import * as THREE from 'three';
import { Cpu, Info, Sparkles, Layers } from 'lucide-react';
import { TECH_CONSTELLATION } from '../data/portfolioData';

// Individual Tech Sphere Node in 3D Space
function TechNode({ node, position, isCentral, isSelected, isHovered, onHover, onClick }) {
  const meshRef = useRef();
  const [localHover, setLocalHover] = useState(false);

  const baseScale = isCentral ? 1.4 : 0.85;
  const targetScale = (isSelected || localHover) ? baseScale * 1.35 : baseScale;

  useFrame(() => {
    if (!meshRef.current) return;
    meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.12);
  });

  const nodeColor = isCentral 
    ? '#8B5CF6' 
    : isSelected 
    ? '#06B6D4' 
    : localHover 
    ? '#6366F1' 
    : '#A5B4FC';

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={(e) => {
          e.stopPropagation();
          onClick(node);
        }}
        onPointerOver={(e) => {
          e.stopPropagation();
          setLocalHover(true);
          onHover(node);
        }}
        onPointerOut={() => {
          setLocalHover(false);
          onHover(null);
        }}
      >
        <sphereGeometry args={[1, 24, 24]} />
        <meshStandardMaterial
          color={nodeColor}
          roughness={0.2}
          metalness={0.15}
          emissive={nodeColor}
          emissiveIntensity={isCentral ? 0.35 : (isSelected || localHover) ? 0.45 : 0.1}
          transparent={true}
          opacity={0.85}
        />
      </mesh>

      {/* Floating 3D Label */}
      <Html
        position={[0, baseScale + 0.5, 0]}
        center
        distanceFactor={18}
        className="pointer-events-none select-none"
      >
        <div className={`px-2.5 py-1 rounded-full whitespace-nowrap text-[11px] font-mono font-bold transition-all ${
          isSelected || localHover
            ? 'bg-gradient-to-r from-lab-accentViolet to-lab-accentCyan text-white shadow-elevation-1 scale-110'
            : isCentral
            ? 'bg-white/90 text-lab-accentViolet border border-indigo-200'
            : 'bg-white/80 text-lab-ink border border-indigo-100 shadow-sm'
        }`}>
          {node.name}
        </div>
      </Html>
    </group>
  );
}

// Constellation 3D World with connecting lines and Drag-to-rotate inertia
function ConstellationScene({ nodes, activeNode, onSelectNode, isDragging, setIsDragging }) {
  const groupRef = useRef();
  const [hoveredNode, setHoveredNode] = useState(null);

  // Inertia and rotation tracking
  const rotationVelocity = useRef({ x: 0, y: 0.002 });
  const isPointerDown = useRef(false);
  const previousPointer = useRef({ x: 0, y: 0 });

  // Calculate spherical/orbital coordinates for all nodes
  const nodePositions = useMemo(() => {
    return nodes.map((node, i) => {
      if (node.isCenter) return [0, 0, 0];
      const phi = Math.acos(-1 + (2 * i) / nodes.length);
      const theta = Math.sqrt(nodes.length * Math.PI) * phi;
      const radius = 6.2 + (i % 3) * 0.8;
      return [
        radius * Math.cos(theta) * Math.sin(phi),
        radius * Math.sin(theta) * Math.sin(phi),
        radius * Math.cos(phi)
      ];
    });
  }, [nodes]);

  // Generate connecting line geometry
  const linePoints = useMemo(() => {
    const points = [];
    const centerPos = new THREE.Vector3(0, 0, 0);

    nodePositions.forEach((pos, idx) => {
      const v1 = new THREE.Vector3(...pos);
      // Connect to center
      points.push(centerPos, v1);

      // Connect to neighboring node for constellation web
      if (idx > 0 && idx < nodePositions.length - 1) {
        const v2 = new THREE.Vector3(...nodePositions[idx + 1]);
        points.push(v1, v2);
      }
    });

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    return geometry;
  }, [nodePositions]);

  useFrame(() => {
    if (!groupRef.current) return;

    if (!isPointerDown.current) {
      // Natural gentle orbit & inertia decay
      groupRef.current.rotation.y += rotationVelocity.current.y;
      groupRef.current.rotation.x += rotationVelocity.current.x;

      rotationVelocity.current.y = THREE.MathUtils.lerp(rotationVelocity.current.y, 0.0018, 0.02);
      rotationVelocity.current.x = THREE.MathUtils.lerp(rotationVelocity.current.x, 0, 0.02);
    }
  });

  const handlePointerDown = (e) => {
    isPointerDown.current = true;
    previousPointer.current = { x: e.clientX, y: e.clientY };
    setIsDragging(true);
  };

  const handlePointerMove = (e) => {
    if (!isPointerDown.current || !groupRef.current) return;
    const deltaX = e.clientX - previousPointer.current.x;
    const deltaY = e.clientY - previousPointer.current.y;

    groupRef.current.rotation.y += deltaX * 0.005;
    groupRef.current.rotation.x += deltaY * 0.005;

    rotationVelocity.current = {
      x: deltaY * 0.004,
      y: deltaX * 0.004,
    };

    previousPointer.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    isPointerDown.current = false;
    setIsDragging(false);
  };

  return (
    <group
      ref={groupRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
    >
      {/* Constellation web lines */}
      <lineSegments geometry={linePoints}>
        <lineBasicMaterial color="#C4B5FD" transparent opacity={0.3} />
      </lineSegments>

      {/* Nodes */}
      {nodes.map((node, idx) => (
        <TechNode
          key={node.name}
          node={node}
          position={nodePositions[idx]}
          isCentral={node.isCenter}
          isSelected={activeNode?.name === node.name}
          isHovered={hoveredNode?.name === node.name}
          onHover={setHoveredNode}
          onClick={onSelectNode}
        />
      ))}
    </group>
  );
}

const TechConstellation = () => {
  const [activeNode, setActiveNode] = useState(TECH_CONSTELLATION[0]);
  const [isLowPower, setIsLowPower] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isMobile || lowCores || prefersReduced) {
      setIsLowPower(true);
    }
  }, []);

  return (
    <section id="stack" className="section-anchor py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-lab-accentViolet" />
              <span className="text-xs font-mono tracking-widest text-lab-accentIndigo uppercase font-bold">
                04 // INTERACTIVE 3D ECOSYSTEM
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-lab-ink">
              TECH <span className="text-gradient-hero">CONSTELLATION</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-lab-muted max-w-md">
            Interactive 3D celestial web: drag to rotate, hover any sphere to inspect architectural responsibility.
          </p>
        </div>

        {/* Constellation Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left / Center 3D Constellation Canvas Area */}
          <div className="lg:col-span-8 p-4 sm:p-6 rounded-card border border-indigo-200/60 bg-white/70 backdrop-blur-xl shadow-glass relative overflow-hidden min-h-[460px] flex items-center justify-center">
            
            {/* Ambient aura inside card */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-tr from-purple-200/40 via-indigo-200/30 to-cyan-100/30 rounded-full blur-3xl pointer-events-none" 
              aria-hidden="true" 
            />

            {!isLowPower ? (
              <div className={`w-full h-[440px] ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
                <Canvas
                  camera={{ position: [0, 0, 15], fov: 48 }}
                  dpr={[1, 1.5]}
                  gl={{ antialias: true, alpha: true }}
                >
                  <ambientLight intensity={1.2} />
                  <pointLight position={[10, 10, 10]} intensity={1.5} color="#EDE9FE" />
                  <pointLight position={[-10, -10, -10]} intensity={1.0} color="#CFFAFE" />

                  <Suspense fallback={null}>
                    <ConstellationScene
                      nodes={TECH_CONSTELLATION}
                      activeNode={activeNode}
                      onSelectNode={setActiveNode}
                      isDragging={isDragging}
                      setIsDragging={setIsDragging}
                    />
                  </Suspense>
                </Canvas>
              </div>
            ) : (
              /* High-performance responsive static fallback grid for low-power/mobile devices */
              <div className="w-full flex flex-wrap gap-2.5 justify-center py-6">
                {TECH_CONSTELLATION.map((node) => {
                  const isSelected = activeNode?.name === node.name;
                  return (
                    <button
                      key={node.name}
                      onClick={() => setActiveNode(node)}
                      className={`px-3.5 py-2 rounded-2xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-lab-accentViolet to-lab-accentCyan text-white shadow-btn-glow scale-105'
                          : 'bg-white border border-indigo-100 text-lab-ink hover:border-indigo-300 shadow-sm'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-white' : 'bg-lab-accentIndigo'}`} />
                      <span>{node.name}</span>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Micro instruction badge */}
            <div className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-indigo-100 text-[10px] font-mono text-lab-muted pointer-events-none">
              {!isLowPower ? 'Drag to rotate • Click node to inspect' : 'Click any technology to inspect'}
            </div>
          </div>

          {/* Right Column: Node Details Inspector Card */}
          <div className="lg:col-span-4 flex flex-col justify-between p-6 sm:p-8 rounded-card border border-indigo-200/60 bg-white/85 backdrop-blur-xl shadow-glass">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-indigo-100 text-lab-accentIndigo border border-indigo-200">
                  {activeNode?.category ? activeNode.category.toUpperCase() : 'CORE'}
                </span>
                <span className="text-xs font-mono text-lab-muted">NODE INSPECTOR</span>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-lab-accentViolet to-lab-accentCyan flex items-center justify-center text-white shadow-btn-glow">
                  <Cpu size={18} />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-2xl text-lab-ink tracking-tight">
                    {activeNode?.name}
                  </h3>
                  {activeNode?.isCenter && (
                    <span className="text-[10px] font-mono text-lab-accentViolet font-bold tracking-wider">
                      PRIMARY SYSTEM AXIS
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm font-normal text-lab-muted leading-relaxed my-6">
                {activeNode?.desc}
              </p>
            </div>

            <div className="pt-5 border-t border-indigo-100">
              <span className="text-[11px] font-mono font-bold text-lab-muted uppercase tracking-widest block mb-2">
                ECOSYSTEM COMPATIBILITY
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['Production Ready', 'High Throughput', 'Cloud Scalable'].map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg text-[10px] font-mono bg-indigo-50 text-lab-accentIndigo border border-indigo-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default TechConstellation;
