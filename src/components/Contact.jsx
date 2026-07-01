import React, { useState, useRef, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Send, CheckCircle, AlertTriangle } from 'lucide-react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Tilt3D from './ui/Tilt3D';

// Interactive deforming 3D Orb component
const FloatingOrb = ({ theme }) => {
  const meshRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Wave movement
    meshRef.current.position.y = Math.sin(time * 0.8) * 0.15;
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
    
    // Scale pulse
    const scale = 1.2 + Math.sin(time * 1.5) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });

  const isDark = theme === 'dark';
  const color = isDark ? '#a78bfa' : '#6366f1';
  const emissive = isDark ? '#4c1d95' : '#312e81';

  return (
    <mesh ref={meshRef}>
      <dodecahedronGeometry args={[1, 1]} />
      <meshPhysicalMaterial
        color={color}
        emissive={emissive}
        roughness={0.1}
        metalness={0.8}
        clearcoat={1.0}
        clearcoatRoughness={0.1}
        wireframe={true}
      />
    </mesh>
  );
};

const Contact = ({ theme }) => {
  const isDark = theme === 'dark';
  const cardStyle = isDark ? 'glass-card-dark' : 'glass-card-light';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Perform mock submission
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent-purple uppercase mb-2">Contact</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display">Get In Touch</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info & 3D canvas Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <Tilt3D className={`p-8 rounded-3xl ${cardStyle} flex-1 flex flex-col justify-between`}>
              <div>
                <h4 className="text-2xl font-bold font-display mb-2 text-left">Let's Connect</h4>
                <p className="text-sm text-gray-400 mb-8 text-left" style={{ color: isDark ? '#9ca3af' : '#64748b' }}>
                  Have a project in mind, want to discuss AI/ML innovations, or just say hello? Drop me a message!
                </p>

                <div className="space-y-6 text-left">
                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple">
                      <FaEnvelope size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Email</p>
                      <a href="mailto:unisoldier2022@gmail.com" className="text-sm sm:text-base font-semibold hover:text-accent-purple transition-colors">
                        unisoldier2022@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-accent-blue/10 border border-accent-blue/20 text-accent-blue">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Phone</p>
                      <a href="tel:+918447131813" className="text-sm sm:text-base font-semibold hover:text-accent-blue transition-colors">
                        +91 84471 31813
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3.5 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Location</p>
                      <p className="text-sm sm:text-base font-semibold text-gray-300" style={{ color: isDark ? '#d1d5db' : '#334155' }}>
                        Manipal University Jaipur, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links inside left container */}
              <div className="mt-8 border-t pt-6" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                <div className="flex items-center gap-4 justify-start">
                  <a 
                    href="https://linkedin.com/in/karan-garg-244b242b1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-gray-800 bg-gray-900/40 hover:bg-gray-800 hover:text-white transition-all text-gray-400"
                    style={{
                      borderColor: isDark ? '#1f2937' : '#e2e8f0',
                      backgroundColor: isDark ? 'rgba(17,24,39,0.4)' : '#fff',
                      color: isDark ? '#9ca3af' : '#4b5563'
                    }}
                  >
                    <FaLinkedin size={18} />
                  </a>
                  <a 
                    href="https://github.com/Drakowarrior" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl border border-gray-800 bg-gray-900/40 hover:bg-gray-800 hover:text-white transition-all text-gray-400"
                    style={{
                      borderColor: isDark ? '#1f2937' : '#e2e8f0',
                      backgroundColor: isDark ? 'rgba(17,24,39,0.4)' : '#fff',
                      color: isDark ? '#9ca3af' : '#4b5563'
                    }}
                  >
                    <FaGithub size={18} />
                  </a>
                </div>
              </div>
            </Tilt3D>

            {/* Interactive 3D element card */}
            <div className={`p-6 rounded-3xl ${cardStyle} h-48 relative overflow-hidden flex items-center justify-center cursor-pointer`}>
              <div className="absolute top-4 left-6 z-10 text-left">
                <span className="text-xs font-bold text-accent-purple uppercase tracking-wider">3D Interface</span>
                <h5 className="text-sm font-bold mt-0.5">Drag to rotate the orb</h5>
              </div>
              <Canvas
                camera={{ position: [0, 0, 2.5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
              >
                <ambientLight intensity={isDark ? 0.3 : 0.8} />
                <pointLight position={[5, 5, 5]} intensity={1.5} color={isDark ? '#a78bfa' : '#6366f1'} />
                <Suspense fallback={null}>
                  <FloatingOrb theme={theme} />
                </Suspense>
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7 flex">
            <div className={`p-8 rounded-3xl ${cardStyle} flex-1 flex flex-col justify-between text-left`}>
              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-2xl font-bold font-display mb-6">Send Message</h4>
                  
                  {/* Status Banner */}
                  <AnimatePresence>
                    {submitStatus === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 flex items-center gap-3 text-sm mb-6"
                      >
                        <CheckCircle size={18} className="shrink-0" />
                        <span>Message sent successfully! I'll get back to you soon.</span>
                      </motion.div>
                    )}

                    {submitStatus === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-500 flex items-center gap-3 text-sm mb-6"
                      >
                        <AlertTriangle size={18} className="shrink-0" />
                        <span>Please fix the validation errors below.</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Your Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm font-medium focus:outline-none transition-all ${
                          errors.name 
                            ? 'border-rose-500 bg-rose-500/5 focus:ring-1 focus:ring-rose-500' 
                            : isDark
                              ? 'border-gray-800 bg-gray-900/60 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-white'
                              : 'border-gray-200 bg-white focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-gray-800'
                        }`}
                      />
                      {errors.name && <p className="text-xs font-semibold text-rose-500 text-left mt-1">{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3.5 rounded-xl border text-sm font-medium focus:outline-none transition-all ${
                          errors.email 
                            ? 'border-rose-500 bg-rose-500/5 focus:ring-1 focus:ring-rose-500' 
                            : isDark
                              ? 'border-gray-800 bg-gray-900/60 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-white'
                              : 'border-gray-200 bg-white focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-gray-800'
                        }`}
                      />
                      {errors.email && <p className="text-xs font-semibold text-rose-500 text-left mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2 mt-6">
                    <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3.5 rounded-xl border text-sm font-medium focus:outline-none transition-all resize-none ${
                        errors.message 
                          ? 'border-rose-500 bg-rose-500/5 focus:ring-1 focus:ring-rose-500' 
                          : isDark
                            ? 'border-gray-800 bg-gray-900/60 focus:border-accent-purple focus:ring-1 focus:ring-accent-purple text-white'
                            : 'border-gray-200 bg-white focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 text-gray-800'
                      }`}
                    />
                    {errors.message && <p className="text-xs font-semibold text-rose-500 text-left mt-1">{errors.message}</p>}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold text-sm tracking-wider flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] transition-all mt-8"
                >
                  <Send size={16} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;