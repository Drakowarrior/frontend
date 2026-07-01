import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Code2, ExternalLink } from 'lucide-react';

const Certificates = ({ theme }) => {
  const isDark = theme === 'dark';
  const cardStyle = isDark ? 'glass-card-dark' : 'glass-card-light';
  
  // Shared Drive link for credentials verification
  const verificationLink = 'https://drive.google.com/drive/folders/1_lhwqoDvvglL_YSutfVE_99rlUegMnTG?usp=sharing';

  const certificatesData = [
    {
      title: 'Google AI Professional Certificate',
      issuer: 'Google & Coursera',
      icon: <Cpu className="w-8 h-8 text-accent-purple" />,
      tag: 'Artificial Intelligence',
    },
    {
      title: 'Deep Learning with PyTorch',
      issuer: 'IBM & Coursera',
      icon: <Award className="w-8 h-8 text-accent-blue" />,
      tag: 'Deep Learning',
    },
    {
      title: 'Introduction to Deep Learning & Neural Networks with Keras',
      issuer: 'IBM',
      icon: <Award className="w-8 h-8 text-accent-cyan" />,
      tag: 'Neural Networks',
    },
    {
      title: 'Foundations of AI and Machine Learning',
      issuer: 'Microsoft',
      icon: <Cpu className="w-8 h-8 text-emerald-500" />,
      tag: 'Machine Learning',
    },
    {
      title: 'Foundations of Cybersecurity',
      issuer: 'Google',
      icon: <ShieldCheck className="w-8 h-8 text-amber-500" />,
      tag: 'Security',
    },
    {
      title: 'Penetration Testing, Threat Hunting, and Cryptography',
      issuer: 'IBM',
      icon: <ShieldCheck className="w-8 h-8 text-rose-500" />,
      tag: 'Cybersecurity',
    },
    {
      title: 'Software Engineering Job Simulation',
      issuer: 'Deloitte Forage',
      icon: <Code2 className="w-8 h-8 text-pink-500" />,
      tag: 'Software Engineering',
    },
    {
      title: 'Learn React JS for Front-end Development',
      issuer: 'CodeChef',
      icon: <Code2 className="w-8 h-8 text-sky-500" />,
      tag: 'Frontend Dev',
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
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="certificates" className="py-24 px-6 relative">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent-purple uppercase mb-2">Credentials</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display">Certifications & Achievements</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Flip-Card Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {certificatesData.map((cert, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="h-60 w-full flip-card cursor-pointer"
            >
              <div className="relative w-full h-full flip-card-inner">
                {/* Card Front */}
                <div className={`absolute inset-0 w-full h-full flex flex-col justify-between p-6 rounded-3xl ${cardStyle} flip-card-front`}>
                  <div>
                    <div className="p-3 rounded-2xl bg-gray-500/10 flex items-center justify-center w-fit mb-4">
                      {cert.icon}
                    </div>
                    <h4 className="font-display font-bold text-base leading-snug tracking-tight text-left line-clamp-2">
                      {cert.title}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-xs font-semibold text-gray-500">{cert.issuer}</span>
                    <span className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                      {cert.tag}
                    </span>
                  </div>
                </div>

                {/* Card Back */}
                <div className={`absolute inset-0 w-full h-full flex flex-col justify-between p-6 rounded-3xl ${cardStyle} flip-card-back`}>
                  <div className="text-left">
                    <h4 className="font-display font-bold text-base leading-snug">Verification</h4>
                    <p className="text-xs text-gray-400 mt-2" style={{ color: isDark ? '#9ca3af' : '#64748b' }}>
                      This credential represents verified competency issued by <strong>{cert.issuer}</strong> in the field of <strong>{cert.tag}</strong>.
                    </p>
                  </div>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // Avoid double click triggers
                      window.open(verificationLink, '_blank');
                    }}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-accent-purple to-accent-blue text-white font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.98] transition-all"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Global Credentials Folder Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href={verificationLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl border font-bold text-sm tracking-wide transition-all hover:scale-[1.03] active:scale-[0.98] ${
              isDark 
                ? 'border-gray-800 bg-gray-900/50 hover:bg-gray-800 text-white' 
                : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50 shadow-md shadow-gray-100'
            }`}
          >
            <span>View All Drive Certificates & Badges</span>
            <ExternalLink size={16} />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Certificates;