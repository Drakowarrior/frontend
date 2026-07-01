import React from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, Globe, Brain, BarChart3, Eye, Database, 
  Layers, Wrench, MessageSquare, Dna, Sparkles 
} from 'lucide-react';
import Tilt3D from './ui/Tilt3D';

const Skills = ({ theme }) => {
  const isDark = theme === 'dark';
  const cardStyle = isDark ? 'glass-card-dark' : 'glass-card-light';

  const skillCategories = [
    {
      title: 'Programming',
      icon: <Terminal className="w-5 h-5 text-accent-purple" />,
      skills: ['Python', 'C', 'Java', 'JavaScript', 'SQL']
    },
    {
      title: 'Web',
      icon: <Globe className="w-5 h-5 text-accent-blue" />,
      skills: ['React.js', 'HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'AI/ML',
      icon: <Brain className="w-5 h-5 text-accent-cyan" />,
      skills: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Neural Networks']
    },
    {
      title: 'Data Science',
      icon: <BarChart3 className="w-5 h-5 text-emerald-500" />,
      skills: ['Pandas', 'NumPy', 'Matplotlib']
    },
    {
      title: 'Computer Vision',
      icon: <Eye className="w-5 h-5 text-amber-500" />,
      skills: ['OpenCV', 'YOLO', 'Object Detection']
    },
    {
      title: 'Databases',
      icon: <Database className="w-5 h-5 text-rose-500" />,
      skills: ['MySQL', 'MongoDB']
    },
    {
      title: 'Frameworks',
      icon: <Layers className="w-5 h-5 text-pink-500" />,
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn']
    },
    {
      title: 'Tools',
      icon: <Wrench className="w-5 h-5 text-sky-500" />,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'MATLAB']
    },
    {
      title: 'NLP',
      icon: <MessageSquare className="w-5 h-5 text-indigo-500" />,
      skills: ['Text Processing', 'Language Models']
    },
    {
      title: 'Bioinformatics',
      icon: <Dna className="w-5 h-5 text-teal-500 animate-pulse" />,
      skills: ['NCBI', 'GenBank', 'UniProt', 'PDB', 'BLAST', 'FASTA', 'Docking', 'NGS']
    },
    {
      title: 'Others',
      icon: <Sparkles className="w-5 h-5 text-yellow-500" />,
      skills: ['Blender', 'Excel', 'PowerPoint', 'AutoCAD']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent-purple uppercase mb-2">Skills</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display">My Technical Toolkit</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Tilt3D className={`p-6 rounded-3xl ${cardStyle} h-full flex flex-col`}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gray-500/10 flex items-center justify-center">
                    {category.icon}
                  </div>
                  <h4 className="font-display font-bold text-lg">{category.title}</h4>
                </div>

                {/* Chips */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`text-xs font-semibold px-3 py-1.5 rounded-xl border transition-all duration-300 ${
                        isDark 
                          ? 'border-gray-800 bg-gray-900/60 text-gray-300 hover:border-accent-purple/50 hover:bg-gray-800 hover:text-white hover:shadow-glow-purple/20' 
                          : 'border-gray-200 bg-white text-gray-600 hover:border-indigo-400 hover:bg-indigo-50/50 hover:text-indigo-600'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;