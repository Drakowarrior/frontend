import React from 'react';
import { Code2, Brain, MessageSquare, Eye, Layers, Globe, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming',
      icon: <Code2 size={32} />,
      skills: ['Python', 'C', 'Java', 'JavaScript', 'SQL'],
      color: '#154042ff'
    },
    {
      title: 'AI & ML',
      icon: <Brain size={32} />,
      skills: ['Machine Learning', 'Deep Learning', 'Generative AI', 'Neural Networks'],
      color: '#154042ff'
    },
    {
      title: 'NLP',
      icon: <MessageSquare size={32} />,
      skills: ['Text Processing', 'Language Models', 'NLP Techniques'],
      color: '#154042ff'
    },
    {
      title: 'Computer Vision',
      icon: <Eye size={32} />,
      skills: ['OpenCV', 'YOLO', 'Object Detection', 'Image Processing'],
      color: '#154042ff'
    },
    {
      title: 'Frameworks',
      icon: <Layers size={32} />,
      skills: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn'],
      color: '#154042ff'
    },
    {
      title: 'Web Development',
      icon: <Globe size={32} />,
      skills: ['React.js', 'HTML', 'CSS', 'JavaScript'],
      color: '#154042ff'
    },
    {
      title: 'Data Science',
      icon: <Database size={32} />,
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'MySQL'],
      color: '#154042ff'
    },
    {
      title: 'Tools',
      icon: <Wrench size={32} />,
      skills: ['Git', 'GitHub', 'VS Code', 'MATLAB', 'Postman', 'Blender', 'Excel', 'PowerPoint', 'Word'],
      color: '#154042ff'
    }
  ];

  return (
    <section id="skills" className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <p className="section-subtitle">Technologies and tools I work with</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon" style={{ color: category.color }}>
                {category.icon}
              </div>
              <h3 className="skill-title">{category.title}</h3>
              <div className="skill-tags">
                {category.skills.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;