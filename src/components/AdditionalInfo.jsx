import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Award, Zap } from 'lucide-react';
import Tilt3D from './ui/Tilt3D';

const AdditionalInfo = ({ theme }) => {
  const isDark = theme === 'dark';
  const cardStyle = isDark ? 'glass-card-dark' : 'glass-card-light';

  const details = [
    {
      title: 'Languages',
      icon: <Globe2 className="w-5 h-5 text-accent-purple" />,
      items: ['English (Professional)', 'Hindi (Native)'],
    },
    {
      title: 'Extracurriculars',
      icon: <Award className="w-5 h-5 text-accent-blue" />,
      items: ['Open Source Contributor', 'DevForge Club Member', 'Hackathon Participant (SIH, EY)'],
    },
    {
      title: 'Core Strengths',
      icon: <Zap className="w-5 h-5 text-accent-cyan" />,
      items: ['Problem Solving', 'Leadership', 'Team Collaboration', 'Adaptability', 'Time Management'],
    }
  ];

  return (
    <section className="py-12 px-6 relative">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {details.map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Tilt3D className={`p-6 rounded-3xl ${cardStyle} h-full flex flex-col justify-start`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-gray-500/10 flex items-center justify-center">
                    {info.icon}
                  </div>
                  <h4 className="font-display font-bold text-lg">{info.title}</h4>
                </div>

                <div className="flex flex-col gap-2 mt-1">
                  {info.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan shrink-0"></span>
                      <span className="text-sm font-body" style={{ color: isDark ? '#d1d5db' : '#4b5563' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
