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


const ResumePage = ({ theme, toggleTheme }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const isDark = theme === 'dark';

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
    <div className={`min-h-screen transition-colors duration-300 py-12 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-[#050507] text-[#f5f5f7]' : 'bg-[#F7F7F8] text-[#111113]'
    }`}>
      {/* Top Action Bar */}
      <div className="max-w-5xl mx-auto mb-8 flex flex-wrap items-center justify-between gap-4 print:hidden">
        <a
          href="/"
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-bold tracking-wider border transition-all ${
            isDark
              ? 'border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-white/20'
              : 'border-[#E4E4EA] bg-white text-[#111113] hover:border-[#6D4AFF] shadow-sm'
          }`}
        >
          <ArrowLeft size={14} />
          <span>BACK TO PORTFOLIO</span>
        </a>

        <div className="flex flex-wrap items-center gap-3">
          {/* Download PDF Action with feedback */}
          <button
            onClick={handleDownload}
            className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider text-white bg-gradient-to-r from-accent-purple to-accent-cyan shadow-glow-purple flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            {downloadSuccess ? (
              <>
                <CheckCircle2 size={14} />
                <span>RESUME READY ✓</span>
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

          {/* Open in New Tab */}
          <a
            href={process.env.PUBLIC_URL + SITE_CONFIG.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider border flex items-center gap-2 transition-all ${
              isDark
                ? 'border-white/15 bg-white/5 text-gray-200 hover:text-white hover:bg-white/10'
                : 'border-[#E4E4EA] bg-white text-[#111113] hover:border-[#4F46E5] shadow-sm'
            }`}
          >
            <ExternalLink size={14} />
            <span>OPEN RAW PDF</span>
          </a>

          {/* Print */}
          <button
            onClick={handlePrint}
            className={`px-4 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider border flex items-center gap-2 transition-all ${
              isDark
                ? 'border-white/15 bg-white/5 text-gray-200 hover:text-white hover:bg-white/10'
                : 'border-[#E4E4EA] bg-white text-[#111113] hover:border-gray-400 shadow-sm'
            }`}
          >
            <Printer size={14} />
            <span>PRINT</span>
          </button>
        </div>
      </div>

      {/* Main Resume Paper Container */}
      <div className={`max-w-5xl mx-auto rounded-3xl border p-6 sm:p-12 shadow-2xl transition-colors duration-300 ${
        isDark
          ? 'bg-[#0b0e17] border-white/10 shadow-black/80'
          : 'bg-white border-[#E4E4EA] text-[#111113] shadow-slate-900/10'
      }`}>
        
        {/* Header Profile */}
        <div className="border-b border-gray-200 dark:border-white/10 pb-8 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="font-display font-black text-3xl sm:text-5xl tracking-tight text-gradient dark:text-gradient">
                {PERSONAL_INFO.name}
              </h1>
              <p className="font-mono text-sm sm:text-base font-bold text-accent-purple dark:text-accent-cyan mt-1 uppercase tracking-wider">
                {PERSONAL_INFO.title}
              </p>
            </div>
            
            <div className="flex flex-col sm:items-end gap-1.5 text-xs font-mono text-gray-600 dark:text-gray-400">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-accent-purple transition-colors flex items-center gap-1.5 font-semibold">
                <Mail size={13} /> {PERSONAL_INFO.email}
              </a>
              <span className="flex items-center gap-1.5 font-medium">
                <Phone size={13} /> {PERSONAL_INFO.phone}
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} /> {PERSONAL_INFO.location}
              </span>
              <div className="flex items-center gap-3 pt-1">
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors flex items-center gap-1 font-semibold">
                  <FaGithub size={13} /> GitHub
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors flex items-center gap-1 font-semibold">
                  <FaLinkedin size={13} /> LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Career Objective */}
          <div className="mt-6 p-4 rounded-2xl bg-gray-50 dark:bg-white/[0.03] border border-gray-200 dark:border-white/5">
            <h4 className="text-xs font-mono font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-1">
              CAREER OBJECTIVE
            </h4>
            <p className="text-xs sm:text-sm text-gray-800 dark:text-gray-300 leading-relaxed">
              {PERSONAL_INFO.objective}
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap size={18} className="text-accent-purple dark:text-accent-cyan" />
            <h2 className="font-display font-black text-xl text-gray-900 dark:text-white uppercase tracking-wider">
              EDUCATION
            </h2>
          </div>
          <div className="space-y-4">
            {EDUCATION_HISTORY.map((edu, idx) => (
              <div key={idx} className="p-4 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h3 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono font-bold text-accent-purple dark:text-accent-cyan">
                    {edu.period}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-600 dark:text-gray-400 mt-1">
                  <span>{edu.institution}</span>
                  <span className="font-bold text-gray-900 dark:text-gray-200">{edu.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills System */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Code size={18} className="text-accent-purple dark:text-accent-cyan" />
            <h2 className="font-display font-black text-xl text-gray-900 dark:text-white uppercase tracking-wider">
              TECHNICAL SKILLS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="p-3.5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                <h4 className="text-xs font-mono font-bold text-accent-purple dark:text-accent-cyan uppercase mb-2">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-lg text-xs font-mono border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 text-gray-800 dark:text-gray-300 font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Leadership */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Briefcase size={18} className="text-accent-purple dark:text-accent-cyan" />
            <h2 className="font-display font-black text-xl text-gray-900 dark:text-white uppercase tracking-wider">
              EXPERIENCE & LEADERSHIP
            </h2>
          </div>
          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-base text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <h4 className="text-xs font-mono font-bold text-accent-purple dark:text-accent-cyan">
                      {exp.company}
                    </h4>
                  </div>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400 font-medium">
                    {exp.period}
                  </span>
                </div>
                <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  {exp.deliverables.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple dark:bg-accent-cyan mt-1.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Cpu size={18} className="text-accent-purple dark:text-accent-cyan" />
            <h2 className="font-display font-black text-xl text-gray-900 dark:text-white uppercase tracking-wider">
              PROJECTS
            </h2>
          </div>
          <div className="space-y-6">
            {FEATURED_PROJECTS.map((proj, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-base text-gray-900 dark:text-white">
                      {proj.title} — {proj.subtitle}
                    </h3>
                    <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
                      {proj.stack.join(' • ')}
                    </p>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    {proj.status}
                  </span>
                </div>
                <ul className="mt-3 space-y-1 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                  {proj.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-purple dark:bg-accent-cyan mt-1.5 shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications with Global Drive Link */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Award size={18} className="text-accent-purple dark:text-accent-cyan" />
              <h2 className="font-display font-black text-xl text-gray-900 dark:text-white uppercase tracking-wider">
                CERTIFICATIONS
              </h2>
            </div>
            <a
              href={SITE_CONFIG.certificationsDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-accent-purple dark:text-accent-cyan hover:underline flex items-center gap-1"
            >
              <span>VIEW GOOGLE DRIVE FOLDER</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white">{cert.title}</h4>
                  <p className="text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                </div>
                <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Publications & Research Section */}
        <div className="mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2">
              <BookOpen size={18} className="text-accent-purple dark:text-accent-cyan" />
              <h2 className="font-display font-black text-xl text-gray-900 dark:text-white uppercase tracking-wider">
                PUBLICATIONS & RESEARCH
              </h2>
            </div>
            <a
              href={RESEARCH_PUBLICATIONS[0].doiUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-accent-purple dark:text-accent-cyan hover:underline flex items-center gap-1"
            >
              <span>READ PAPER ON SPRINGER</span>
              <ExternalLink size={12} />
            </a>
          </div>
          <div className="p-5 rounded-2xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded bg-accent-purple/15 text-accent-purple dark:text-accent-cyan border border-accent-purple/25">
                {RESEARCH_PUBLICATIONS[0].badge}
              </span>
              <span className="text-xs font-mono text-gray-500">
                {RESEARCH_PUBLICATIONS[0].journal} • {RESEARCH_PUBLICATIONS[0].volumeInfo}
              </span>
            </div>
            <h3 className="font-bold text-base text-gray-900 dark:text-white mt-1">
              {RESEARCH_PUBLICATIONS[0].title}
            </h3>
            <p className="text-xs font-mono text-accent-purple dark:text-accent-cyan mt-1 font-semibold">
              "{RESEARCH_PUBLICATIONS[0].hook}"
            </p>
            <p className="mt-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed font-normal">
              {RESEARCH_PUBLICATIONS[0].abstract}
            </p>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-3 border-t border-gray-200 dark:border-white/5 text-center">
              {RESEARCH_PUBLICATIONS[0].metrics.map((m, mIdx) => (
                <div key={mIdx} className="p-2 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/5">
                  <span className="font-display font-black text-sm sm:text-base text-gradient dark:text-gradient block">
                    {m.value}{m.suffix}
                  </span>
                  <span className="text-[10px] font-mono text-gray-500 font-bold block uppercase">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Activities */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={18} className="text-accent-purple dark:text-accent-cyan" />
            <h2 className="font-display font-black text-xl text-gray-900 dark:text-white uppercase tracking-wider">
              ACTIVITIES & ACHIEVEMENTS
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            {ACHIEVEMENTS.map((ach, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-gray-200 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02]">
                <span className="font-mono text-[10px] font-bold text-accent-purple dark:text-accent-cyan uppercase">
                  [{ach.tag}]
                </span>
                <h4 className="font-bold text-gray-900 dark:text-white mt-0.5">{ach.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1 leading-relaxed">{ach.desc}</p>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default ResumePage;
