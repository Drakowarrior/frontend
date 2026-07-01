import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Terminal, Users, Calendar, MapPin } from 'lucide-react';
import Tilt3D from './ui/Tilt3D';

const Experience = ({ theme }) => {
  const isDark = theme === 'dark';
  const cardStyle = isDark ? 'glass-card-dark' : 'glass-card-light';

  const experiences = [
    {
      role: 'IT Trainee',
      company: 'IGT Solutions (ATAIN)',
      duration: 'June 2026 – Present',
      location: 'Enterprise Development Hub',
      icon: <Terminal className="w-5 h-5 text-accent-purple" />,
      bullets: [
        'Developing and enhancing an AI-powered chatbot for enterprise use cases.',
        'Implementing intelligent conversation flows and user feedback mechanisms.',
        'Managing user sessions and performing frontend/backend API integrations.',
        'Iterating on UI/UX designs to optimize overall client-side usability.'
      ]
    },
    {
      role: 'Full Stack Development Intern',
      company: 'Cognifyz Technologies',
      duration: 'April 2026 – May 2026',
      location: 'Remote',
      icon: <Briefcase className="w-5 h-5 text-accent-blue" />,
      bullets: [
        'Built a complete Student Feedback System using the MERN stack (MongoDB, Express, React, Node.js).',
        'Created secure REST APIs and structured CRUD operations for feedback submissions.',
        'Designed a responsive dashboard for admins to visualize feedback data.'
      ]
    },
    {
      role: 'Executive, Corporate Relations & Social Media Joint Head',
      company: 'DevForge Club',
      duration: 'August 2024 – April 2026',
      location: 'Manipal University Jaipur',
      icon: <Users className="w-5 h-5 text-accent-cyan" />,
      bullets: [
        'Promoted from Social Media Joint Head to Executive of Corporate Relations.',
        'Coordinated workshops, networking sessions, and promotional activities.',
        'Led digital outreach campaigns to increase engagement and sponsor collaborations.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 relative">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent-purple uppercase mb-2">Experience</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display">Work & Leadership</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line left-aligned on mobile, center on desktop */}
          <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-accent-purple via-accent-blue to-accent-cyan opacity-40"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col md:flex-row items-stretch md:items-center justify-between w-full">
                  {/* Left Side (Even: Card, Odd: Duration) */}
                  <div className="w-full md:w-[45%] flex justify-end md:text-right text-left order-2 md:order-1 pl-16 md:pl-0 md:pr-8">
                    {isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                      >
                        <Tilt3D className={`p-8 rounded-3xl ${cardStyle} text-left`}>
                          <div className="md:hidden flex flex-wrap gap-2 items-center justify-between mb-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold">
                              <Calendar size={12} />
                              {exp.duration}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <MapPin size={12} />
                              {exp.location}
                            </span>
                          </div>

                          <h4 className="text-xl font-bold font-display leading-tight">{exp.role}</h4>
                          <h5 className="text-md font-semibold text-accent-purple mt-1">{exp.company}</h5>

                          <ul className="mt-4 space-y-2.5">
                            {exp.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="text-sm font-body leading-relaxed flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0"></span>
                                <span style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Footer details for desktop */}
                          <div className="hidden md:flex mt-6 items-center justify-between text-xs border-t pt-4" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                            <span className="font-semibold text-gray-500 flex items-center gap-1">
                              <Calendar size={13} />
                              {exp.duration}
                            </span>
                            <span className="font-semibold text-gray-500 flex items-center gap-1">
                              <MapPin size={13} />
                              {exp.location}
                            </span>
                          </div>
                        </Tilt3D>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:flex flex-col justify-center items-end space-y-2"
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-semibold">
                          <Calendar size={14} />
                          {exp.duration}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
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
                      {exp.icon}
                    </motion.div>
                  </div>

                  {/* Right Side (Even: Duration, Odd: Card) */}
                  <div className="w-full md:w-[45%] flex justify-start text-left order-3 md:order-3 pl-16 md:pl-0 md:pl-8">
                    {!isEven ? (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full"
                      >
                        <Tilt3D className={`p-8 rounded-3xl ${cardStyle} text-left`}>
                          <div className="md:hidden flex flex-wrap gap-2 items-center justify-between mb-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-semibold">
                              <Calendar size={12} />
                              {exp.duration}
                            </span>
                            <span className="text-xs text-gray-500 flex items-center gap-1">
                              <MapPin size={12} />
                              {exp.location}
                            </span>
                          </div>

                          <h4 className="text-xl font-bold font-display leading-tight">{exp.role}</h4>
                          <h5 className="text-md font-semibold text-accent-purple mt-1">{exp.company}</h5>

                          <ul className="mt-4 space-y-2.5">
                            {exp.bullets.map((bullet, bIdx) => (
                              <li key={bIdx} className="text-sm font-body leading-relaxed flex items-start gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan mt-2 shrink-0"></span>
                                <span style={{ color: isDark ? '#9ca3af' : '#4b5563' }}>{bullet}</span>
                              </li>
                            ))}
                          </ul>

                          {/* Footer details for desktop */}
                          <div className="hidden md:flex mt-6 items-center justify-between text-xs border-t pt-4" style={{ borderColor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)' }}>
                            <span className="font-semibold text-gray-500 flex items-center gap-1">
                              <Calendar size={13} />
                              {exp.duration}
                            </span>
                            <span className="font-semibold text-gray-500 flex items-center gap-1">
                              <MapPin size={13} />
                              {exp.location}
                            </span>
                          </div>
                        </Tilt3D>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="hidden md:flex flex-col justify-center items-start space-y-2"
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-sm font-semibold">
                          <Calendar size={14} />
                          {exp.duration}
                        </div>
                        <div className="text-sm text-gray-500 flex items-center gap-1">
                          <MapPin size={14} />
                          {exp.location}
                        </div>
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

export default Experience;