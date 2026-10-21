import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ArrowUpRight, Copy, CheckCircle2, Sparkles, Send } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Magnetic, { MagneticButton } from './ui/Magnetic';
import TiltCard3D from './ui/TiltCard3D';
import { PERSONAL_INFO } from '../data/portfolioData';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=Collaboration%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-anchor py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      
      {/* Background Ambient Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-purple-200/40 via-indigo-200/30 to-cyan-100/30 blur-[150px] pointer-events-none" 
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Large Glass Panel */}
        <div className="glass-panel p-8 sm:p-14 lg:p-16 border border-indigo-200/70 shadow-glass text-center relative overflow-hidden">
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-200/70 bg-indigo-50/80 text-xs font-mono tracking-widest text-lab-accentIndigo uppercase mb-6 font-bold shadow-sm">
            <Sparkles size={13} className="text-lab-accentViolet animate-pulse" />
            <span>INITIATE COLLABORATION</span>
          </div>

          {/* Dramatic Headline */}
          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl tracking-tight text-lab-ink leading-[1.08] text-depth-3d">
            HAVE AN IDEA? <br />
            <span className="text-gradient-hero">LET'S BUILD IT.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="mt-4 text-sm sm:text-base md:text-lg font-normal leading-relaxed text-lab-muted max-w-xl mx-auto">
            Whether it's an enterprise AI assistant, fine-tuned LLM system, full-stack application, or something experimental — let's engineer something extraordinary together.
          </p>

          {/* Floating 3D Icon Buttons for Socials */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            {/* Magnetic Email Me Primary CTA */}
            <MagneticButton
              variant="primary"
              href={`mailto:${PERSONAL_INFO.email}`}
              icon={<Mail size={16} />}
              className="text-sm sm:text-base"
            >
              <span>EMAIL ME</span>
            </MagneticButton>

            {/* LinkedIn 3D Floating Icon Button */}
            <TiltCard3D maxTilt={10} scale={1.05} depth={16} className="rounded-btn">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-btn font-mono text-xs sm:text-sm font-bold tracking-wider border border-indigo-200/70 bg-white/90 text-lab-ink hover:border-indigo-400 hover:text-lab-accentIndigo flex items-center gap-2.5 transition-all shadow-elevation-1"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={16} className="text-[#0A66C2]" />
                <span>LINKEDIN</span>
                <ArrowUpRight size={13} />
              </a>
            </TiltCard3D>

            {/* GitHub 3D Floating Icon Button */}
            <TiltCard3D maxTilt={10} scale={1.05} depth={16} className="rounded-btn">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-btn font-mono text-xs sm:text-sm font-bold tracking-wider border border-indigo-200/70 bg-white/90 text-lab-ink hover:border-indigo-400 hover:text-lab-accentIndigo flex items-center gap-2.5 transition-all shadow-elevation-1"
                aria-label="GitHub Drakowarrior Profile"
              >
                <FaGithub size={16} />
                <span>DRAKOWARRIOR</span>
                <ArrowUpRight size={13} />
              </a>
            </TiltCard3D>
          </div>

          {/* Quick Copy Cards for Direct Contact */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl mx-auto">
            {/* Email Copy Card */}
            <div
              onClick={handleCopyEmail}
              className="p-4 rounded-2xl border border-indigo-200/60 bg-white/90 hover:bg-white hover:border-indigo-400 shadow-sm transition-all cursor-pointer flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-50 text-lab-accentViolet border border-purple-100">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-lab-muted uppercase font-bold">DIRECT EMAIL</span>
                  <p className="font-mono text-xs font-bold text-lab-ink group-hover:text-lab-accentIndigo transition-colors">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </div>
              <div>
                {copiedEmail ? (
                  <span className="text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 size={13} /> COPIED
                  </span>
                ) : (
                  <Copy size={15} className="text-lab-muted group-hover:text-lab-ink transition-colors" />
                )}
              </div>
            </div>

            {/* Phone Copy Card */}
            <div
              onClick={handleCopyPhone}
              className="p-4 rounded-2xl border border-indigo-200/60 bg-white/90 hover:bg-white hover:border-indigo-400 shadow-sm transition-all cursor-pointer flex items-center justify-between text-left group"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 text-lab-accentIndigo border border-indigo-100">
                  <Phone size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-lab-muted uppercase font-bold">TELEPHONE</span>
                  <p className="font-mono text-xs font-bold text-lab-ink group-hover:text-lab-accentIndigo transition-colors">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </div>
              <div>
                {copiedPhone ? (
                  <span className="text-[11px] font-mono text-emerald-700 font-bold flex items-center gap-1 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    <CheckCircle2 size={13} /> COPIED
                  </span>
                ) : (
                  <Copy size={15} className="text-lab-muted group-hover:text-lab-ink transition-colors" />
                )}
              </div>
            </div>
          </div>

          {/* Clean Message Form with Floating Labels & Clear Focus States */}
          <div className="mt-12 pt-10 border-t border-indigo-100 max-w-xl mx-auto text-left">
            <h4 className="font-display font-extrabold text-base text-lab-ink mb-4 text-center">
              Send a Quick Direct Dispatch
            </h4>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-lab-muted font-semibold mb-1">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-indigo-200/80 bg-white/90 text-sm font-body text-lab-ink placeholder:text-lab-muted/50 focus:border-lab-accentIndigo focus:bg-white focus:outline-none transition-all shadow-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-lab-muted font-semibold mb-1">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="alex@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-indigo-200/80 bg-white/90 text-sm font-body text-lab-ink placeholder:text-lab-muted/50 focus:border-lab-accentIndigo focus:bg-white focus:outline-none transition-all shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-mono text-lab-muted font-semibold mb-1">
                  Message / Project Scope
                </label>
                <textarea
                  id="message"
                  required
                  rows={3}
                  placeholder="Tell me about what you're looking to build..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-indigo-200/80 bg-white/90 text-sm font-body text-lab-ink placeholder:text-lab-muted/50 focus:border-lab-accentIndigo focus:bg-white focus:outline-none transition-all shadow-sm resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-[11px] font-mono text-lab-muted">
                  Replies typically within 24 hours
                </span>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-btn font-mono text-xs font-bold text-white bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan shadow-btn-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Send size={13} />
                  <span>{sent ? 'DISPATCHED ✓' : 'SEND DISPATCH'}</span>
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;