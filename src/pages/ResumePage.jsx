import React, { useState } from 'react';
import { 
  ArrowLeft, Download, ExternalLink, Printer, CheckCircle2, 
  Mail, Phone, MapPin, Award, Briefcase, GraduationCap, 
  Code, Cpu, Sparkles, BookOpen 
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { 
  PERSONAL_INFO, EXPERIENCES, EDUCATION_HISTORY, 
  CERTIFICATIONS, FEATURED_PROJECTS, SKILL_CATEGORIES, ACHIEVEMENTS,
  RESEARCH_PUBLICATIONS 
} from '../data/portfolioData';
import { SITE_CONFIG, downloadResume } from '../config/siteConfig';

const ResumePage = () => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    downloadResume(
      () => setDownloading(true),
      () => {
        setDownloading(false);
        setDownloadSuccess(true);
        setTimeout(() => setDownloadSuccess(false), 3000);
      }
    );
  };

  return (
    <div className="min-h-screen bg-lab-bg text-lab-ink py-10 px-4 sm:px-6 lg:px-8 relative selection:bg-indigo-500/20">
      
      {/* Fine Grain Texture Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Top Action Bar */}
      <div className="max-w-5xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden relative z-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider border border-indigo-200/70 bg-white/80 backdrop-blur-md text-lab-ink hover:border-indigo-400 hover:text-lab-accentIndigo shadow-sm transition-all"
        >
          <ArrowLeft size={14} />
          <span>BACK TO PORTFOLIO</span>
        </a>

        <div className="flex flex-wrap items-center gap-3">
          {/* Download PDF Action with feedback */}
          <button
            onClick={handleDownload}
            className="px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan shadow-btn-glow flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            {downloadSuccess ? (
              <>
                <CheckCircle2 size={14} />
                <span>RÉSUMÉ READY ✓</span>
              </>
            ) : downloading ? (
              <>
                <Download size={14} className="animate-bounce" />
                <span>DOWNLOADING...</span>
              </>
            ) : (
              <>
                <Download size={14} />
                <span>DOWNLOAD PDF</span>
              </>
            )}
          </button>

          {/* Open Raw PDF in New Tab */}
          <a
            href={process.env.PUBLIC_URL + SITE_CONFIG.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider border border-indigo-200/70 bg-white/80 backdrop-blur-md text-lab-ink hover:border-indigo-400 shadow-sm flex items-center gap-2 transition-all"
          >
            <ExternalLink size={14} />
            <span>OPEN RAW PDF</span>
          </a>

          {/* Print Action */}
          <button
            onClick={handlePrint}
            className="px-4 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider border border-indigo-200/70 bg-white/80 backdrop-blur-md text-lab-ink hover:border-indigo-400 shadow-sm flex items-center gap-2 transition-all cursor-pointer"
          >
            <Printer size={14} />
            <span>PRINT</span>
          </button>
        </div>
      </div>

      {/* Main Resume Sheet Container */}
      <div className="max-w-5xl mx-auto rounded-card border border-indigo-200/70 bg-white/95 backdrop-blur-2xl p-6 sm:p-12 shadow-glass relative z-10 text-lab-ink">
        
        {/* Header Profile */}
        <div className="border-b border-indigo-100 pb-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-gradient-hero">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-mono text-xs sm:text-sm font-bold text-lab-accentIndigo mt-1 uppercase tracking-wider">
                {PERSONAL_INFO.title}
              </p>
            </div>
            
            <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-lab-muted">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-lab-accentIndigo transition-colors flex items-center gap-1.5 font-semibold text-lab-ink">
                <Mail size={13} className="text-lab-accentViolet" /> {PERSONAL_INFO.email}
              </a>
              <span className="flex items-center gap-1.5 font-medium">
                <Phone size={13} className="text-lab-accentIndigo" /> {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-lab-accentCyan" /> {PERSONAL_INFO.location}
              </span>
              <div className="flex items-center gap-3 pt-1">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-lab-accentIndigo transition-colors flex items-center gap-1 font-semibold text-lab-ink">
                  <FaGithub size={13} /> GitHub
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-lab-accentIndigo transition-colors flex items-center gap-1 font-semibold text-lab-ink">
                  <FaLinkedin size={13} className="text-[#0A66C2]" /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div className="mt-6 p-4 rounded-2xl bg-indigo-50/40 border border-indigo-100">
            <h4 className="text-xs font-mono font-bold text-lab-accentIndigo uppercase tracking-widest mb-1">
              CAREER OBJECTIVE
            </h4>
            <p className="text-xs sm:text-sm text-lab-muted leading-relaxed font-normal">
              {PERSONAL_INFO.objective}
            </p>
          </div>
        </div>

        {/* Technical Skills System */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <Code size={18} className="text-lab-accentViolet" />
            <h2 className="font-display font-extrabold text-xl text-lab-ink uppercase tracking-wider">
              TECHNICAL SKILLS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="p-4 rounded-2xl border border-indigo-100 bg-indigo-50/30">
                <h4 className="text-xs font-mono font-bold text-lab-accentIndigo uppercase mb-2">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-lg text-xs font-mono border border-indigo-100 bg-white text-lab-ink font-medium shadow-sm"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Published Springer Research */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <BookOpen size={18} className="text-lab-accentViolet" />
            <h2 className="font-display font-extrabold text-xl text-lab-ink uppercase tracking-wider">
              PUBLISHED RESEARCH
            </h2>
          </div>
          <div className="p-5 rounded-2xl border border-indigo-200/70 bg-gradient-to-r from-purple-50/40 to-indigo-50/40 shadow-sm">
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-lab-accentIndigo">
                {RESEARCH_PUBLICATIONS[0].badge} • {RESEARCH_PUBLICATIONS[0].journal}
              </span>
              <span className="font-mono text-xs text-lab-muted">
                DOI: {RESEARCH_PUBLICATIONS[0].doi}
              </span>
            </div>
            <h3 className="font-display font-bold text-base text-lab-ink mb-1.5">
              {RESEARCH_PUBLICATIONS[0].title}
            </h3>
            <p className="text-xs text-lab-muted leading-relaxed font-normal mb-3">
              {RESEARCH_PUBLICATIONS[0].abstract}
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-lab-accentIndigo font-bold">
              <span>Energy: -37.6%</span>
              <span>•</span>
              <span>Efficiency: +45.0%</span>
              <span>•</span>
              <span>Accuracy: 95.3%</span>
            </div>
          </div>
        </div>

        {/* Experience & Leadership */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <Briefcase size={18} className="text-lab-accentViolet" />
            <h2 className="font-display font-extrabold text-xl text-lab-ink uppercase tracking-wider">
              EXPERIENCE & LEADERSHIP
            </h2>
          </div>
          <div className="space-y-5">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-indigo-100 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <div>
                    <h3 className="font-display font-bold text-base text-lab-ink">
                      {exp.role}
                    </h3>
                    <h4 className="text-xs font-mono font-bold text-lab-accentIndigo">
                      {exp.company}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-lab-muted font-semibold bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm text-lab-muted">
                  {exp.deliverables.map((del, dIdx) => (
                    <li key={dIdx} className="leading-relaxed">
                      • {del}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <Cpu size={18} className="text-lab-accentViolet" />
            <h2 className="font-display font-extrabold text-xl text-lab-ink uppercase tracking-wider">
              FEATURED PROJECTS
            </h2>
          </div>
          <div className="space-y-4">
            {FEATURED_PROJECTS.map((proj, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-indigo-100 bg-white shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5">
                  <h3 className="font-display font-bold text-base text-lab-ink">
                    {proj.title} — <span className="font-mono text-xs font-bold text-lab-accentIndigo">{proj.subtitle}</span>
                  </h3>
                  <span className="text-xs font-mono text-lab-muted font-bold">
                    {proj.status}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-lab-muted leading-relaxed mb-3">
                  {proj.summary}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((st, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-indigo-50 text-lab-accentIndigo border border-indigo-100">
                      {st}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <GraduationCap size={18} className="text-lab-accentViolet" />
            <h2 className="font-display font-extrabold text-xl text-lab-ink uppercase tracking-wider">
              EDUCATION
            </h2>
          </div>
          <div className="space-y-4">
            {EDUCATION_HISTORY.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-2xl border border-indigo-100 bg-indigo-50/30">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-display font-bold text-sm sm:text-base text-lab-ink">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono font-bold text-lab-accentIndigo">
                    {edu.period}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-lab-muted mt-1">
                  <span>{edu.institution}</span>
                  <span className="font-bold text-lab-ink">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Additional Info */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <Award size={18} className="text-lab-accentViolet" />
            <h2 className="font-display font-extrabold text-xl text-lab-ink uppercase tracking-wider">
              CERTIFICATIONS & HONORS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-indigo-100 bg-white shadow-sm flex items-center justify-between">
                <div>
                  <h4 className="font-display font-bold text-xs text-lab-ink">{cert.title}</h4>
                  <span className="font-mono text-[11px] text-lab-muted">{cert.issuer}</span>
                </div>
                <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ResumePage;
