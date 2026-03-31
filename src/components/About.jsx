import React from 'react';
import { FaUser, FaBullseye, FaHeart } from 'react-icons/fa';
import { Card } from './ui/card';

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="section-wrapper">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="about-content">
          <div className="about-image-wrapper">
            <div className="about-image-frame">
              <div className="image-placeholder">
                <FaUser size={80} />
              </div>
            </div>
          </div>

          <div className="about-text">
            <Card className="about-card">
              <div className="about-card-icon">
                <FaBullseye size={24} />
              </div>
              <h3 className="about-card-title">Career Objective</h3>
              <p className="about-card-text">
                Computer Science and Bioscience student with knowledge of Artificial Intelligence, 
                Machine Learning, bioscience data and databases, and web development, seeking 
                opportunities to build intelligent and impactful technology solutions.
              </p>
            </Card>

            <Card className="about-card">
              <div className="about-card-icon">
                <FaHeart size={24} />
              </div>
              <h3 className="about-card-title">Interests & Passion</h3>
              <p className="about-card-text">
                I'm deeply passionate about leveraging AI and Machine Learning to solve real-world 
                problems. My unique background in both Computer Science and Bioscience allows me 
                to approach challenges from an interdisciplinary perspective. I actively contribute 
                to open source projects and participate in hackathons like Smart India Hackathon (SIH) 
                and EY competitions.
              </p>
            </Card>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-label">Languages:</span>
                <span className="highlight-value">English, Hindi</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-label">Location:</span>
                <span className="highlight-value">Manipal University Jaipur</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-label">Strengths:</span>
                <span className="highlight-value">Problem Solving, Leadership, Team Collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;