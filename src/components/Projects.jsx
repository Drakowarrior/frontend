import React from 'react';
import { FaGithub, FaEye, FaShieldAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: 'AI-Powered Smart Surveillance System',
      description: 'Developed real-time object detection system using YOLOv8 achieving 95% accuracy in identifying vehicles, weapons, and suspicious activities.',
      tags: ['Python', 'OpenCV', 'YOLOv8', 'TensorFlow'],
      icon: <FaShieldAlt size={40} />,
      highlights: [
        'Multi-class detection with custom-trained YOLO model on 10,000+ annotated images',
        'Reduced false positives by 40% through data augmentation and model fine-tuning'
      ]
    },
    {
      title: 'Real-time Facial Emotion Recognition',
      description: 'Built deep learning model using Convolutional Neural Networks with 89% classification accuracy across 7 emotion categories.',
      tags: ['Python', 'CNN', 'TensorFlow', 'OpenCV'],
      icon: <FaEye size={40} />,
      highlights: [
        'Processed and augmented FER-2013 dataset with 35,887 facial images',
        'Deployed web interface for real-time emotion detection from camera feed'
      ]
    },
    {
      title: 'Your Project Title',
      description: 'Add your project description here. This is a placeholder for your third project.',
      tags: ['Technology', 'Stack', 'Here'],
      icon: <FaGithub size={40} />,
      highlights: [
        'Key achievement or feature 1',
        'Key achievement or feature 2'
      ],
      placeholder: true
    },
    {
      title: 'Your Project Title',
      description: 'Add your project description here. This is a placeholder for your fourth project.',
      tags: ['Technology', 'Stack', 'Here'],
      icon: <FaGithub size={40} />,
      highlights: [
        'Key achievement or feature 1',
        'Key achievement or feature 2'
      ],
      placeholder: true
    },
    {
      title: 'Your Project Title',
      description: 'Add your project description here. This is a placeholder for your fifth project.',
      tags: ['Technology', 'Stack', 'Here'],
      icon: <FaGithub size={40} />,
      highlights: [
        'Key achievement or feature 1',
        'Key achievement or feature 2'
      ],
      placeholder: true
    },
    {
      title: 'Your Project Title',
      description: 'Add your project description here. This is a placeholder for your sixth project.',
      tags: ['Technology', 'Stack', 'Here'],
      icon: <FaGithub size={40} />,
      highlights: [
        'Key achievement or feature 1',
        'Key achievement or feature 2'
      ],
      placeholder: true
    }
  ];

  return (
    <section id="projects" className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing my work and achievements</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${project.placeholder ? 'placeholder' : ''}`}>
              <div className="project-icon">{project.icon}</div>
              
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="project-tag">{tag}</span>
                ))}
              </div>

              <ul className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>

              <div className="project-actions">
                <button variant="outline" size="sm" className="project-btn">
                  <FaExternalLinkAlt size={16} className="mr-2" />
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;