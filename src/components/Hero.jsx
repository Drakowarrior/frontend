import React, { useState, useEffect, useMemo, useRef, Suspense } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Magnetic from './ui/Magnetic';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D DNA Helix component
const DNAHelix = ({ theme }) => {
  const groupRef = useRef();
  const spheresCount = 15;
  const radius = 1.2;
  const spacing = 0.25;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.5;
    groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.2;
  });

  const color1 = theme === 'dark' ? '#8b5cf6' : '#6366f1'; // Purple/indigo
  const color2 = theme === 'dark' ? '#06b6d4' : '#0ea5e9'; // Cyan/sky
  const rungsColor = theme === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)';

  // Build the double helix points
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < spheresCount; i++) {
      const angle = i * 0.5;
      const y = (i - spheresCount / 2) * spacing;
      
      const x1 = Math.sin(angle) * radius;
      const z1 = Math.cos(angle) * radius;
      
      const x2 = Math.sin(angle + Math.PI) * radius;
      const z2 = Math.cos(angle + Math.PI) * radius;
      
      pts.push({
        pos1: [x1, y, z1],
        pos2: [x2, y, z2],
      });
    }
    return pts;
  }, [spheresCount, spacing, radius]);

  return (
    <group ref={groupRef}>
      {points.map((pt, i) => (
        <group key={i}>
          {/* Sphere on Strand 1 */}
          <mesh position={pt.pos1}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color={color1} roughness={0.3} metalness={0.2} />
          </mesh>

          {/* Sphere on Strand 2 */}
          <mesh position={pt.pos2}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color={color2} roughness={0.3} metalness={0.2} />
          </mesh>

          {/* Connecting Rung */}
          <mesh position={[
            (pt.pos1[0] + pt.pos2[0]) / 2,
            pt.pos1[1],
            (pt.pos1[2] + pt.pos2[2]) / 2
          ]}>
            <cylinderGeometry args={[0.02, 0.02, radius * 2, 8]} />
            <meshStandardMaterial 
              color={theme === 'dark' ? '#4b5563' : '#d1d5db'} 
              roughness={0.8}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const Hero = ({ theme }) => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      const y = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
      setMousePos({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const roles = useMemo(() => [
    'AI/ML Engineer', 
    'Full Stack Developer', 
    'Computer Vision Enthusiast', 
    'Bioinformatics Explorer'
  ], []);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentRole = roles[currentRoleIndex];

      if (!isDeleting) {
        if (currentIndex < currentRole.length) {
          setTypewriterText(currentRole.substring(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(type, 80);
        } else {
          timeout = setTimeout(() => {
            isDeleting = true;
            type();
          }, 1500);
        }
      } else {
        if (currentIndex > 0) {
          setTypewriterText(currentRole.substring(0, currentIndex - 1));
          currentIndex--;
          timeout = setTimeout(type, 40);
        } else {
          isDeleting = false;
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          timeout = setTimeout(type, 300);
        }
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [currentRoleIndex, roles]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    window.open(process.env.PUBLIC_URL + '/KaranGarg_Resume.pdf', '_blank');
  };

  const textGradientClass = theme === 'dark' ? 'text-gradient' : 'text-gradient-light';

  return (
    <section id="home" className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden px-6">
      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center py-12 md:py-24 z-10">
        
        {/* Left Info Column */}
        <div 
          className="md:col-span-7 flex flex-col justify-center text-left"
          style={{ 
            transform: `translate3d(${mousePos.x * -10}px, ${mousePos.y * -10}px, 0)`,
            transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold tracking-wider mb-6 w-fit bg-opacity-10 backdrop-blur-md border-opacity-20 transition-all duration-300"
            style={{
              borderColor: theme === 'dark' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.2)',
              backgroundColor: theme === 'dark' ? 'rgba(139, 92, 246, 0.1)' : 'rgba(99, 102, 241, 0.05)',
              color: theme === 'dark' ? '#a78bfa' : '#4f46e5'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            Open for Opportunities
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-display"
          >
            Hello, I'm <br />
            <span className={`${textGradientClass} leading-tight`}>Karan Garg</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-10 sm:h-12 mt-4 text-xl sm:text-2xl font-semibold font-body"
            style={{ color: theme === 'dark' ? '#d1d5db' : '#475569' }}
          >
            <span>I am a </span>
            <span className="text-accent-cyan border-r-2 border-accent-cyan pr-1 animate-pulse">
              {typewriterText}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 text-base sm:text-lg leading-relaxed font-body max-w-xl"
            style={{ color: theme === 'dark' ? '#9ca3af' : '#4b5563' }}
          >
            A Computer Science & Bioscience student passionate about merging biology and computing. 
            I build intelligent systems using Machine Learning, Deep Learning, and Computer Vision, backed by robust Full-Stack Web architectures.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 mt-8"
          >
            <Magnetic range={50} strength={0.35}>
              <button
                onClick={scrollToContact}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-semibold text-sm tracking-wide shadow-lg hover:shadow-accent-purple/20 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                Contact Me
                <ArrowRight size={18} />
              </button>
            </Magnetic>
            <Magnetic range={50} strength={0.35}>
              <button
                onClick={handleDownloadResume}
                className={`px-6 py-3.5 rounded-xl border font-semibold text-sm tracking-wide hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center gap-2 ${
                  theme === 'dark' 
                    ? 'border-gray-700 bg-gray-800/40 text-white hover:bg-gray-800' 
                    : 'border-gray-200 bg-white text-gray-800 hover:bg-gray-50 shadow-md'
                }`}
              >
                <Download size={18} />
                Download Resume
              </button>
            </Magnetic>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex items-center gap-5 mt-12"
          >
            <Magnetic range={40} strength={0.3}>
              <a 
                href="https://linkedin.com/in/karan-garg-244b242b1" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all ${
                  theme === 'dark'
                    ? 'border-gray-800 bg-gray-900/40 hover:bg-gray-800/80 text-gray-400 hover:text-white'
                    : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-600 hover:text-indigo-600 shadow-sm'
                }`}
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={20} />
              </a>
            </Magnetic>
            <Magnetic range={40} strength={0.3}>
              <a 
                href="https://github.com/Drakowarrior" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all ${
                  theme === 'dark'
                    ? 'border-gray-800 bg-gray-900/40 hover:bg-gray-800/80 text-gray-400 hover:text-white'
                    : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-600 hover:text-black shadow-sm'
                }`}
                aria-label="GitHub Profile"
              >
                <FaGithub size={20} />
              </a>
            </Magnetic>
            <Magnetic range={40} strength={0.3}>
              <a 
                href="mailto:unisoldier2022@gmail.com" 
                className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-all ${
                  theme === 'dark'
                    ? 'border-gray-800 bg-gray-900/40 hover:bg-gray-800/80 text-gray-400 hover:text-white'
                    : 'border-gray-200 bg-white hover:bg-gray-50 text-gray-600 hover:text-rose-500 shadow-sm'
                }`}
                aria-label="Email Me"
              >
                <FaEnvelope size={20} />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right 3D Model Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="md:col-span-5 h-[350px] md:h-[500px] w-full flex items-center justify-center relative cursor-grab active:cursor-grabbing"
          style={{ 
            transform: `translate3d(${mousePos.x * 12}px, ${mousePos.y * 12}px, 0)`,
            transition: 'transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)'
          }}
        >
          {/* Subtle surrounding glow ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple/10 to-accent-cyan/10 rounded-full filter blur-3xl opacity-30 animate-pulse pointer-events-none"></div>
          
          <Canvas
            camera={{ position: [0, 0, 4.5], fov: 45 }}
            gl={{ antialias: true, alpha: true }}
          >
            <ambientLight intensity={theme === 'dark' ? 0.4 : 0.8} />
            <pointLight position={[5, 5, 5]} intensity={1.5} color={theme === 'dark' ? '#a78bfa' : '#6366f1'} />
            <pointLight position={[-5, -5, -5]} intensity={0.8} color={theme === 'dark' ? '#22d3ee' : '#0ea5e9'} />
            
            <Suspense fallback={null}>
              <DNAHelix theme={theme} />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;