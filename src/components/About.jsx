import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, ShieldAlert } from 'lucide-react';
import Tilt3D from './ui/Tilt3D';

const About = ({ theme }) => {
  const isDark = theme === 'dark';
  const cardStyle = isDark ? 'glass-card-dark' : 'glass-card-light';
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -5 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const domains = [
    {
      title: "AI/ML & Deep Learning",
      description: "Designing intelligent neural networks, predictive models, and learning pipelines for bio and computing workloads.",
      icon: <Brain className="w-6 h-6 text-accent-purple" />
    },
    {
      title: "Full Stack Development",
      description: "Developing scalable REST APIs, session management systems, and modern, highly interactive user interfaces.",
      icon: <Code className="w-6 h-6 text-accent-blue" />
    },
    {
      title: "Data Science & Databases",
      description: "Performing large-scale data manipulation, database structuring, and visualization using Pandas, NumPy, and SQL.",
      icon: <Database className="w-6 h-6 text-accent-cyan" />
    },
    {
      title: "Cybersecurity Basics",
      description: "Possessing fundamental knowledge of cryptography, secure software design, threat hunting, and pen testing.",
      icon: <ShieldAlert className="w-6 h-6 text-rose-500" />
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-7xl w-full mx-auto relative z-10 text-center">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-widest text-accent-purple uppercase mb-2">About Me</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display">Who I Am</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
        </motion.div>

        {/* Bio & Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`lg:col-span-6 p-8 rounded-3xl ${cardStyle}`}
          >
            <h4 className="text-2xl font-bold font-display mb-4">My Philosophy</h4>
            <p className="text-gray-400 font-body leading-relaxed mb-6" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
              I operate at the intersection of <strong className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Computer Science</strong> and <strong className={`font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>Bioscience</strong>. The future of medical science and technology lies in computing—deciphering genome structures, modeling protein interactions, and running high-throughput pipelines. 
            </p>
            <p className="text-gray-400 font-body leading-relaxed" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
              My coursework at Manipal University Jaipur has allowed me to apply advanced Machine Learning, Deep Learning, and Computer Vision algorithms directly to complex datasets. I strive to build fast, secure, and accessible systems that provide actual business and scientific value.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className={`lg:col-span-6 p-8 rounded-3xl ${cardStyle}`}
          >
            <h4 className="text-2xl font-bold font-display mb-4">Core Strengths</h4>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span>AI & Machine Learning</span>
                  <span>90%</span>
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-accent-purple to-accent-blue h-full rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span>Full Stack Development (MERN)</span>
                  <span>85%</span>
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-accent-blue to-accent-cyan h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span>Computer Vision & NLP</span>
                  <span>80%</span>
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-accent-cyan to-accent-purple h-full rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-semibold mb-1">
                  <span>Bioinformatics Pipelines</span>
                  <span>75%</span>
                </div>
                <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                  <div className="bg-gradient-to-r from-accent-purple to-emerald-400 h-full rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Pillars / Domains */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left"
        >
          {domains.map((domain, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Tilt3D className={`p-6 rounded-3xl ${cardStyle} h-full flex flex-col`}>
                <div className="p-3 rounded-2xl bg-gradient-to-br from-accent-purple/10 to-accent-cyan/10 w-fit mb-4">
                  {domain.icon}
                </div>
                <h5 className="text-lg font-bold font-display mb-2">{domain.title}</h5>
                <p className="text-sm font-body leading-relaxed mt-auto" style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>
                  {domain.description}
                </p>
              </Tilt3D>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default About;