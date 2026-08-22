import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, MessageSquare, Code, Eye, Database, 
  Layers, Dna, Sparkles, Terminal 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const Skills = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const isDark = theme === 'dark';

  const categoryIcons = {
    "AI / Machine Learning": <Brain className="w-4 h-4 text-accent-purple" />,
    "NLP & LLM Systems": <MessageSquare className="w-4 h-4 text-accent-cyan" />,
    "Full-Stack Development": <Code className="w-4 h-4 text-blue-500" />,
    "Computer Vision": <Eye className="w-4 h-4 text-amber-500" />,
    "Data Science & Databases": <Database className="w-4 h-4 text-emerald-500" />,
    "Software Engineering & Cloud": <Layers className="w-4 h-4 text-pink-500" />,
    "Bioinformatics": <Dna className="w-4 h-4 text-teal-500" />,
    "Design & Productivity": <Sparkles className="w-4 h-4 text-yellow-500" />
  };

  const filteredCategories = selectedCategory === 'All'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="section-anchor py-8 sm:py-12 px-4 sm:px-6 lg:px-8 relative z-10 overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">


        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px w-8 bg-accent-purple" />
              <span className="text-xs font-mono tracking-widest text-accent-purple dark:text-accent-cyan uppercase font-bold">
                05 // SKILLS TAXONOMY
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl tracking-tight text-gray-900 dark:text-white">
              TECHNICAL <span className="text-gradient dark:text-gradient">CAPABILITIES</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 max-w-md">
            Disciplined technical competencies across AI, machine learning, systems programming, and modern full-stack web platforms.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-1.5 mb-8">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1 rounded-xl font-mono text-xs tracking-wider transition-all font-bold ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-accent-purple to-accent-cyan text-white shadow-glow-purple'
                : isDark
                ? 'border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20'
                : 'border border-[#D8DCE5] bg-white text-gray-700 hover:border-gray-400 shadow-sm'
            }`}
          >
            ALL
          </button>
          {SKILL_CATEGORIES.map((cat) => (
            <button
              key={cat.title}
              onClick={() => setSelectedCategory(cat.title)}
              className={`px-3 py-1 rounded-xl font-mono text-xs tracking-wider transition-all flex items-center gap-1.5 font-semibold ${
                selectedCategory === cat.title
                  ? 'bg-gradient-to-r from-accent-purple to-accent-cyan text-white shadow-glow-purple font-bold'
                  : isDark
                  ? 'border border-white/10 bg-white/5 text-gray-400 hover:text-white hover:border-white/20'
                  : 'border border-[#D8DCE5] bg-white text-gray-700 hover:border-gray-400 shadow-sm'
              }`}
            >
              {categoryIcons[cat.title]}
              <span>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Categorized Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.03 }}
              className={`p-5 rounded-3xl border transition-all duration-300 flex flex-col justify-between ${
                isDark
                  ? 'glass-card-dark border-white/10 bg-[#0c101d] hover:border-accent-purple/40'
                  : 'glass-card-light bg-white border-[#D8DCE5] hover:border-accent-purple/30 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-accent-purple/10 border border-accent-purple/20">
                      {categoryIcons[category.title] || <Terminal className="w-3.5 h-3.5 text-accent-purple" />}
                    </div>
                    <h3 className="font-display font-bold text-xs sm:text-sm text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                    {category.badge}
                  </span>
                </div>

                <div className="flex flex-wrap gap-1 mt-3">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className={`px-2 py-0.5 rounded-lg text-xs font-mono border transition-all duration-200 ${
                        isDark
                          ? 'border-white/10 bg-white/5 text-gray-300 hover:border-accent-cyan/40 hover:text-white hover:bg-accent-cyan/10'
                          : 'border-gray-200 bg-gray-50 text-gray-800 hover:border-accent-purple hover:bg-white font-medium'
                      }`}
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