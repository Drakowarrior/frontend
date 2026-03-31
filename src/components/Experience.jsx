import React from 'react';
import { Briefcase, Users, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Executive of Corporate Relations',
      organization: 'DevForge Club',
      location: 'Manipal University Jaipur, Rajasthan, India',
      duration: 'June 2025 - Present',
      icon: <Briefcase size={24} />,
      achievements: [
        'Established partnerships with 1+ tech companies for club sponsorship and collaboration',
        'Organized 1 industry interaction sessions with 100+ combined student participation'
      ]
    },
    {
      role: 'Social Media Joint Head',
      organization: 'DevForge Club',
      location: 'Manipal University Jaipur, Rajasthan, India',
      duration: 'Aug 2024 - June 2025',
      icon: <TrendingUp size={24} />,
      achievements: [
        'Increased social media engagement by 150% through content strategy optimization',
        'Managed content creation and scheduling across social media platforms'
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Experience & Leadership</h2>
          <p className="section-subtitle">My professional journey</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item" data-index={index}>
              <div className="timeline-marker">
                <div className="timeline-icon">{exp.icon}</div>
              </div>
              
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-org">{exp.organization}</p>
                    <p className="experience-location">{exp.location}</p>
                  </div>
                  <span className="experience-duration">{exp.duration}</span>
                </div>
                
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;