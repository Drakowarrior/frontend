import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, MessageSquare, Code, Eye, Database, 
  Layers, Dna, Sparkles, Terminal 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Circular proficiency indicator arc
const ProficiencyRing = ({ percentage = 90 }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-10 h-10 flex items-center justify-center">
      <svg className="w-10 h-10 -rotate-90 transform" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r={radius}
          className="text-indigo-100"
          strokeWidth="3.5"
          stroke="currentColor"
          fill="transparent"
        />
        <motion.circle
          cx="20"
          cy="20"
          r={radius}
          strokeWidth="3.5"
          stroke="url(#skillGradient)"
          fill="transparent"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute font-mono text-[9px] font-bold text-lab-ink">
        {percentage}%
      </span>
    </div>
  );
};

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    "AI / Machine Learning": <Brain className="w-4 h-4 text-lab-accentViolet" />,
    "NLP & LLM Systems": <MessageSquare className="w-4 h-4 text-lab-accentCyan" />,
    "Full-Stack Development": <Code className="w-4 h-4 text-lab-accentIndigo" />,
    "Computer Vision": <Eye className="w-4 h-4 text-purple-600" />,
    "Data Science & Databases": <Database className="w-4 h-4 text-teal-600" />,
    "Software Engineering & Cloud": <Layers className="w-4 h-4 text-indigo-600" />,
    "Bioinformatics": <Dna className="w-4 h-4 text-cyan-600" />,
    "Design & Productivity": <Sparkles className="w-4 h-4 text-amber-500" />
  };

  const proficiencyMap = {
    "AI / Machine Learning": 96,
    "NLP & LLM Systems": 94,
    "Full-Stack Development": 95,
    "Computer Vision": 88,
    "Data Science & Databases": 92,
    "Software Engineering & Cloud": 90,
    "Bioinformatics": 86,
    "Design & Productivity": 85
  };

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="section-anchor py-14 sm:py-20 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-lab-accentViolet" />
              <span className="text-xs font-mono tracking-widest text-lab-accentIndigo uppercase font-bold">
                05 // SKILLS TAXONOMY
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-lab-ink">
              TECHNICAL <span className="text-gradient-hero">CAPABILITIES</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-lab-muted max-w-md">
            Disciplined technical competencies across AI, machine learning, systems programming, and modern full-stack web platforms.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all font-bold cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan text-white shadow-btn-glow'
                : 'border border-indigo-200/60 bg-white/70 text-lab-muted hover:text-lab-ink hover:bg-white shadow-sm'
            }`}
          >
            ALL
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all flex items-center gap-2 font-semibold cursor-pointer ${
                selectedCategory === cat.title
                  ? 'bg-gradient-to-r from-lab-accentViolet via-lab-accentIndigo to-lab-accentCyan text-white shadow-btn-glow font-bold'
                  : 'border border-indigo-200/60 bg-white/70 text-lab-muted hover:text-lab-ink hover:bg-white shadow-sm'
              }`}
            >
              {categoryIcons[cat.title]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Grouped Skill Clusters as Frosted Glass Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              whileHover={{ y: -6 }}
              className="p-6 rounded-card border border-indigo-200/60 bg-white/75 backdrop-blur-xl shadow-glass hover:shadow-glass-hover hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-100 shadow-sm">
                      {categoryIcons[category.title] || <Terminal className="w-4 h-4 text-lab-accentIndigo" />}
                    </div>
                    <div>
                      <h3 className="font-display font-extrabold text-sm text-lab-ink group-hover:text-lab-accentIndigo transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[10px] font-mono text-lab-muted font-medium">
                        {category.badge}
                      </span>
                    </div>
                  </div>
                  
                  {/* Animated Proficiency Ring */}
                  <ProficiencyRing percentage={proficiencyMap[category.title] || 90} />
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-xl text-xs font-mono border border-indigo-100 bg-white/90 text-lab-ink font-medium shadow-sm hover:border-indigo-300 hover:text-lab-accentIndigo transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;