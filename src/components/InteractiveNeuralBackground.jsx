import React, { useRef, useEffect } from 'react';

/**
 * InteractiveNeuralBackground
 * 
 * Ultra-aesthetic, ambient, non-intrusive AI neural background:
 * - Subtle drifting neural nodes & soft glowing synapses
 * - Interactive mouse repulsion & soft attraction
 * - Clean vertical system data stream (very subtle)
 * - Click ripple waves
 * - Perfectly tuned for both High-Contrast Light Mode (#F7F8FA) and Dark Mode (#050507)
 */

const InteractiveNeuralBackground = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);
  const isDark = theme === 'dark';

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const nodeCount = width < 768 ? 18 : 34;
    const nodes = [];
    const ripples = [];

    // Initialize organic node pool
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        baseX: Math.random() * width,
        baseY: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        size: 2.5 + Math.random() * 4,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.015 + Math.random() * 0.02,
        colorType: i % 3 // 0 = purple/indigo, 1 = cyan/blue, 2 = emerald/white
      });
    }

    // Vertical subtle axis pulses
    const axisPulses = [
      { y: 0, speed: 1.5, size: 3 },
      { y: height * 0.5, speed: 2.0, size: 4 }
    ];

    let mouse = { x: -1000, y: -1000, radius: 160, active: false };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    const handleClick = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 8,
        maxRadius: 220,
        alpha: 0.6
      });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Colors tailored for Light vs Dark
      const purpleNode = isDark ? '#8B5CF6' : '#4F46E5';
      const cyanNode = isDark ? '#06B6D4' : '#0284C7';
      const altNode = isDark ? '#A78BFA' : '#6366F1';
      const synapseColor = isDark ? 'rgba(139, 92, 246, ' : 'rgba(79, 70, 229, ';
      const axisLineColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(17, 24, 39, 0.06)';

      // 1. Subtle central vertical line (very soft, no overlapping UI)
      const axisX = width / 2;
      ctx.beginPath();
      ctx.strokeStyle = axisLineColor;
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 8]);
      ctx.moveTo(axisX, 0);
      ctx.lineTo(axisX, height);
      ctx.stroke();
      ctx.setLineDash([]);

      // Traveling axis pulses
      axisPulses.forEach((pulse) => {
        pulse.y += pulse.speed;
        if (pulse.y > height) pulse.y = 0;

        ctx.beginPath();
        ctx.arc(axisX, pulse.y, pulse.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark ? 'rgba(139, 92, 246, 0.5)' : 'rgba(79, 70, 229, 0.4)';
        ctx.fill();
      });

      // 2. Render click ripples
      for (let r = ripples.length - 1; r >= 0; r--) {
        const rip = ripples[r];
        rip.radius += 3.5;
        rip.alpha -= 0.012;

        if (rip.alpha <= 0 || rip.radius >= rip.maxRadius) {
          ripples.splice(r, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI * 2);
        ctx.strokeStyle = isDark 
          ? `rgba(139, 92, 246, ${rip.alpha})` 
          : `rgba(79, 70, 229, ${rip.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // 3. Connect close nodes with glowing synapses
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * (isDark ? 0.18 : 0.15);
            ctx.beginPath();
            ctx.strokeStyle = `${synapseColor}${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // 4. Update and draw nodes
      nodes.forEach((node) => {
        node.phase += node.pulseSpeed;
        node.x = node.baseX + Math.sin(node.phase) * 15;
        node.y = node.baseY + Math.cos(node.phase) * 15;

        // Mouse organic interaction
        if (mouse.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius) {
            const force = (1 - dist / mouse.radius) * 10;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;
          }
        }

        let nodeFill = purpleNode;
        if (node.colorType === 1) nodeFill = cyanNode;
        if (node.colorType === 2) nodeFill = altNode;

        // Soft outer glow
        ctx.beginPath();
        const glow = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 2.5);
        glow.addColorStop(0, isDark ? 'rgba(139, 92, 246, 0.3)' : 'rgba(79, 70, 229, 0.2)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.arc(node.x, node.y, node.size * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fillStyle = nodeFill;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
    };
  }, [isDark]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default InteractiveNeuralBackground;
