import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import Tilt3D from './ui/Tilt3D';

const Education = ({ theme }) => {
  const isDark = theme === 'dark';
  const cardStyle = isDark ? 'glass-card-dark' : 'glass-card-light';

  const educationData = [
    {
      degree: 'B.Tech in Computer Science and Bioscience',
      institution: 'Manipal University Jaipur',
      duration: '2023 – 2027',
      score: 'CGPA 7.75/10.0',
      description: 'Specialized interdisciplinary engineering course bridging advanced computing principles with biology, bioinformatics algorithms, and machine learning.',
      icon: <GraduationCap className="w-6 h-6 text-accent-purple" />
    },
    {
      degree: 'Class XII (PCM)',
      institution: 'The Vivekanand School, Delhi',
      duration: '2022 – 2023',
      score: '67.2%',
      description: 'Completed secondary education focusing on Physics, Chemistry, and Mathematics (PCM). Developed a strong foundation in core engineering sciences.',
      icon: <Award className="w-6 h-6 text-accent-blue" />
    },
    {
      degree: 'Class X (CBSE)',
      institution: 'Silver Line Prestige School, Ghaziabad',
      duration: '2020 – 2021',
      score: '93%',
      description: 'Achieved outstanding academic results in general secondary education with special interest in Computer Science and Mathematics.',
      icon: <BookOpen className="w-6 h-6 text-accent-cyan" />
    }
  ];

  return (
    <section id="education" className="py-24 px-6 relative">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent-purple uppercase mb-2">Education</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display">My Academic Journey</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Timeline Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-2 bottom-2 w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan opacity-40"></div>

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {educationData.map((edu, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch md:items-center justify-between w-full">
                  {/* Left Side (Even: Card, Odd: Year) */}
                  <div className="w-full md:w-[45%] flex justify-end md:text-right text-left order-2 md:order-1 pl-16 md:pl-0 md:pr-8">
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                      >
                        <Tilt3D className={`p-6 rounded-3xl ${cardStyle} relative text-left`}>
                          <div className="md:hidden mb-2 flex items-center justify-between">
                            <span className="text-sm font-bold text-accent-cyan">{edu.duration}</span>
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                              {edu.score}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold font-display leading-snug">{edu.degree}</h4>
                          <h5 className="text-sm font-semibold text-accent-blue mt-1">{edu.institution}</h5>
                          <p className="text-xs sm:text-sm text-gray-400 font-body leading-relaxed mt-3" style={{ color: isDark ? '#9ca3af' : '#64748b' }}>
                            {edu.description}
                          </p>
                          <div className="hidden md:flex mt-4 items-center justify-between text-xs border-t pt-3" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                            <span className="font-semibold text-gray-500">Duration: {edu.duration}</span>
                            <span className="font-bold text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded-md border border-accent-purple/10">{edu.score}</span>
                          </div>
                        </Tilt3D>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:flex flex-col justify-center items-end"
                      >
                        <span className="text-xl font-bold text-accent-cyan font-display">{edu.duration}</span>
                        <span className="text-xs font-bold bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full border border-accent-purple/20 mt-2">{edu.score}</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Bullet Marker */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-20 flex items-center justify-center top-0 md:top-auto">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-lg ${
                        isDark 
                          ? 'bg-gray-900 border-accent-purple shadow-accent-purple/20' 
                          : 'bg-white border-indigo-600 shadow-indigo-100'
                      }`}
                    >
                      {edu.icon}
                    </motion.div>
                  </div>

                  {/* Right Side (Even: Year, Odd: Card) */}
                  <div className="w-full md:w-[45%] flex justify-start text-left order-3 md:order-3 pl-16 md:pl-0 md:pl-8">
                    {!isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                      >
                        <Tilt3D className={`p-6 rounded-3xl ${cardStyle} relative text-left`}>
                          <div className="md:hidden mb-2 flex items-center justify-between">
                            <span className="text-sm font-bold text-accent-cyan">{edu.duration}</span>
                            <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-accent-purple/10 text-accent-purple border border-accent-purple/20">
                              {edu.score}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold font-display leading-snug">{edu.degree}</h4>
                          <h5 className="text-sm font-semibold text-accent-blue mt-1">{edu.institution}</h5>
                          <p className="text-xs sm:text-sm text-gray-400 font-body leading-relaxed mt-3" style={{ color: isDark ? '#9ca3af' : '#64748b' }}>
                            {edu.description}
                          </p>
                          <div className="hidden md:flex mt-4 items-center justify-between text-xs border-t pt-3" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                            <span className="font-semibold text-gray-500">Duration: {edu.duration}</span>
                            <span className="font-bold text-accent-purple bg-accent-purple/10 px-2 py-0.5 rounded-md border border-accent-purple/10">{edu.score}</span>
                          </div>
                        </Tilt3D>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:flex flex-col justify-center items-start"
                      >
                        <span className="text-xl font-bold text-accent-cyan font-display">{edu.duration}</span>
                        <span className="text-xs font-bold bg-accent-purple/10 text-accent-purple px-3 py-1 rounded-full border border-accent-purple/20 mt-2">{edu.score}</span>
                      </motion.div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;