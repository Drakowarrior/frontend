import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology',
      major: 'Computer Science and Bioscience',
      institution: 'Manipal University Jaipur',
      duration: '2023 - 2027',
      score: 'CGPA: 7.83/10.0',
      icon: <GraduationCap size={32} />
    },
    {
      degree: 'Senior Secondary Education (Class XII)',
      major: 'Physics, Chemistry, Mathematics',
      institution: 'The Vivekanand School, Delhi',
      duration: '2022 - 2023',
      score: '67.2%',
      icon: <Award size={32} />
    },
    {
      degree: 'Secondary Education (Class X)',
      major: 'CBSE Board',
      institution: 'Silver Line Prestige School, Ghaziabad',
      duration: '2020 - 2021',
      score: '93%',
      icon: <BookOpen size={32} />
    }
  ];

  return (
    <section id="education" className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My academic journey</p>
        </div>

        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="education-icon">{edu.icon}</div>
              
              <div className="education-content">
                <h3 className="education-degree">{edu.degree}</h3>
                <p className="education-major">{edu.major}</p>
                <p className="education-institution">{edu.institution}</p>
                <div className="education-footer">
                  <span className="education-duration">{edu.duration}</span>
                  <span className="education-score">{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;