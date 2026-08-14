import React, { useRef, useEffect, useState } from 'react';

const Scene3D = ({ theme }) => {
  const canvasRef = useRef(null);
  const isDark = theme === 'dark';
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handler = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      initSystem();
    };

    window.addEventListener('resize', handleResize);

    // Mouse & Scroll coordinates
    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      radius: 220,
      isHovered: false,
    };

    let scrollOffset = 0;

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isHovered = true;
    };

    const handleScroll = () => {
      scrollOffset = window.scrollY * 0.0015;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 4D / 3D AI Neural Core Node Geometry
    const isMobile = width < 768;
    const nodeCount = isMobile ? 32 : 68;
    let nodes = [];
    let orbitalRings = [];

    const initSystem = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        // Spherical coordinate distribution for 3D/4D neural shell
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        const radius = isMobile ? 90 + Math.random() * 110 : 130 + Math.random() * 240;

        nodes.push({
          x3d: radius * Math.sin(phi) * Math.cos(theta),
          y3d: radius * Math.sin(phi) * Math.sin(theta),
          z3d: radius * Math.cos(phi),
          w4d: Math.random() * Math.PI * 2, // 4th dimension phase
          speed: 0.003 + Math.random() * 0.004,
          radius: Math.random() * 2.2 + 1.2,
          color: i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#06b6d4' : '#6366f1',
          lightColor: i % 3 === 0 ? '#6d4aff' : i % 3 === 1 ? '#0891b2' : '#4f46e5',
        });
      }

      orbitalRings = [
        { radius: isMobile ? 120 : 200, tiltX: 0.6, tiltY: 0.3, speed: 0.008, color: '#8b5cf6' },
        { radius: isMobile ? 160 : 280, tiltX: -0.4, tiltY: 0.8, speed: -0.006, color: '#06b6d4' },
        { radius: isMobile ? 200 : 340, tiltX: 0.9, tiltY: -0.5, speed: 0.004, color: '#6366f1' },
      ];
    };

    initSystem();

    let rotationAngleX = 0;
    let rotationAngleY = 0;
    let time4D = 0;

    const render = () => {
      time4D += 0.012;
      mouse.x += (mouse.targetX - mouse.x) * 0.06;
      mouse.y += (mouse.targetY - mouse.y) * 0.06;

      // Parallax rotation influenced by mouse + scroll
      const targetRotX = (mouse.y / height - 0.5) * 0.8 + scrollOffset;
      const targetRotY = (mouse.x / width - 0.5) * 1.2 + scrollOffset * 0.8;
      
      if (!reducedMotion) {
        rotationAngleX += (targetRotX - rotationAngleX) * 0.05;
        rotationAngleY += (targetRotY - rotationAngleY) * 0.05;
      }

      ctx.clearRect(0, 0, width, height);

      // Render Ambient Spotlight
      const spotGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        20,
        mouse.x,
        mouse.y,
        380
      );
      if (isDark) {
        spotGrad.addColorStop(0, 'rgba(124, 58, 237, 0.09)');
        spotGrad.addColorStop(0.5, 'rgba(6, 182, 212, 0.035)');
        spotGrad.addColorStop(1, 'transparent');
      } else {
        spotGrad.addColorStop(0, 'rgba(109, 74, 255, 0.06)');
        spotGrad.addColorStop(0.5, 'rgba(8, 145, 178, 0.02)');
        spotGrad.addColorStop(1, 'transparent');
      }
      ctx.fillStyle = spotGrad;
      ctx.fillRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.45;
      const fov = 400;

      // Render Central Volumetric Core
      const corePulse = Math.sin(time4D * 1.5) * 0.15 + 1;
      const coreRadius = (isMobile ? 22 : 36) * corePulse;
      const coreGrad = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        coreRadius * 2.8
      );
      if (isDark) {
        coreGrad.addColorStop(0, 'rgba(139, 92, 246, 0.45)');
        coreGrad.addColorStop(0.4, 'rgba(6, 182, 212, 0.2)');
        coreGrad.addColorStop(1, 'transparent');
      } else {
        coreGrad.addColorStop(0, 'rgba(109, 74, 255, 0.35)');
        coreGrad.addColorStop(0.4, 'rgba(8, 145, 178, 0.12)');
        coreGrad.addColorStop(1, 'transparent');
      }
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(centerX, centerY, coreRadius * 2.8, 0, Math.PI * 2);
      ctx.fill();

      // Render Orbital 4D Data Rings
      orbitalRings.forEach((ring, rIdx) => {
        const currentRot = time4D * ring.speed;
        ctx.beginPath();
        const steps = 60;
        for (let s = 0; s <= steps; s++) {
          const a = (s / steps) * Math.PI * 2;
          // 3D rotation of ring
          let rx = Math.cos(a) * ring.radius;
          let ry = Math.sin(a) * ring.radius * Math.cos(ring.tiltX);
          let rz = Math.sin(a) * ring.radius * Math.sin(ring.tiltX);

          // Apply global rotation
          const cosY = Math.cos(rotationAngleY + currentRot);
          const sinY = Math.sin(rotationAngleY + currentRot);
          const xRot = rx * cosY - rz * sinY;
          const zRot = rx * sinY + rz * cosY;

          const scale = fov / (fov + zRot);
          const screenX = centerX + xRot * scale;
          const screenY = centerY + ry * scale;

          if (s === 0) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }
        ctx.strokeStyle = isDark
          ? (rIdx === 0 ? 'rgba(139, 92, 246, 0.2)' : rIdx === 1 ? 'rgba(6, 182, 212, 0.15)' : 'rgba(99, 102, 241, 0.15)')
          : (rIdx === 0 ? 'rgba(109, 74, 255, 0.16)' : rIdx === 1 ? 'rgba(8, 145, 178, 0.14)' : 'rgba(79, 70, 229, 0.12)');
        ctx.lineWidth = 1;
        ctx.stroke();
      });

      // Project and render 3D/4D Nodes & Synapses
      let projectedNodes = [];

      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        
        // 4th dimension harmonic rotation (w4d)
        node.w4d += node.speed;
        const wMod = Math.sin(node.w4d + time4D) * 0.2 + 1;

        let x = node.x3d * wMod;
        let y = node.y3d * wMod;
        let z = node.z3d * wMod;

        // Apply X Rotation
        const cosX = Math.cos(rotationAngleX);
        const sinX = Math.sin(rotationAngleX);
        const y1 = y * cosX - z * sinX;
        const z1 = y * sinX + z * cosX;

        // Apply Y Rotation
        const cosY = Math.cos(rotationAngleY + time4D * 0.1);
        const sinY = Math.sin(rotationAngleY + time4D * 0.1);
        const x2 = x * cosY - z1 * sinY;
        const z2 = x * sinY + z1 * cosY;

        const scale = fov / (fov + z2 + 350);
        const screenX = centerX + x2 * scale;
        const screenY = centerY + y1 * scale;

        projectedNodes.push({
          x: screenX,
          y: screenY,
          z: z2,
          scale,
          radius: node.radius * scale,
          color: isDark ? node.color : node.lightColor,
        });
      }

      // Draw Connections (Synapses)
      const maxDist = isMobile ? 85 : 120;
      for (let i = 0; i < projectedNodes.length; i++) {
        const p1 = projectedNodes[i];
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p2 = projectedNodes[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (isDark ? 0.22 : 0.15) * p1.scale;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = isDark
              ? `rgba(139, 92, 246, ${alpha})`
              : `rgba(109, 74, 255, ${alpha})`;
            ctx.lineWidth = 0.8 * p1.scale;
            ctx.stroke();
          }
        }
      }

      // Draw Node Spheres with Depth
      projectedNodes.sort((a, b) => a.z - b.z);
      for (let i = 0; i < projectedNodes.length; i++) {
        const p = projectedNodes[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(1, p.radius), 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(1, Math.max(0.2, (p.scale - 0.3) * 1.5));
        ctx.fill();
        ctx.globalAlpha = 1.0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark, reducedMotion]);

  return (
    <div className="fixed inset-0 w-full h-full -z-10 pointer-events-none overflow-hidden transition-colors duration-500">
      {/* Background layer 1: Subtle tech grid */}
      <div className={`absolute inset-0 ${isDark ? 'bg-grid-pattern opacity-60' : 'bg-grid-pattern-light opacity-80'}`} />

      {/* Background layer 2: Static atmospheric lighting */}
      <div className={`absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none transition-colors duration-500 ${
        isDark ? 'bg-accent-violet/10' : 'bg-purple-200/25'
      }`} />
      <div className={`absolute top-1/2 -right-40 w-[650px] h-[650px] rounded-full blur-[160px] pointer-events-none transition-colors duration-500 ${
        isDark ? 'bg-accent-cyan/8' : 'bg-cyan-100/35'
      }`} />

      {/* Background layer 3: Canvas for 4D AI Neural Core */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default Scene3D;
