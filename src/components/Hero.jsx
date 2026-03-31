import React, { useState, useEffect, useMemo } from 'react';
import { Download, ArrowRight, Code, Brain, Microscope } from 'lucide-react';
import { Card } from './ui/card';

const Hero = () => {
  const [typewriterText, setTypewriterText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  // Wrap roles in useMemo to prevent recreation on every render
  const roles = useMemo(() => ['AI Enthusiast', 'ML Developer', 'Web Developer', 'Bioscience Innovator'], []);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timeout;

    const type = () => {
      const currentRole = roles[currentRoleIndex];

      if (!isDeleting) {
        if (currentIndex < currentRole.length) {
          setTypewriterText(currentRole.substring(0, currentIndex + 1));
          currentIndex++;
          timeout = setTimeout(type, 100);
        } else {
          timeout = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
        }
      } else {
        if (currentIndex > 0) {
          setTypewriterText(currentRole.substring(0, currentIndex - 1));
          currentIndex--;
          timeout = setTimeout(type, 50);
        } else {
          isDeleting = false;
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          timeout = setTimeout(type, 500);
        }
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [currentRoleIndex, roles]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    window.open('https://customer-assets.emergentagent.com/job_81eeb2e9-8f57-4827-9b18-8c53c40db609/artifacts/xbudoesr_KaranGarg_Resume.pdf', '_blank');
  };

  return (
    <section id="home" className="hero-section">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="hero-grid"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-name">
            <span className="hello-text">Hello, I'm</span>
            <span className="name-gradient">Karan Garg</span>
          </h1>
          
          <div className="hero-role">
            <span className="typewriter-text">{typewriterText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="hero-description">
            Computer Science & Bioscience student passionate about building intelligent 
            and impactful technology solutions through AI, ML, and Web Development.
          </p>

          <div className="hero-buttons">
            <div onClick={scrollToProjects} size="lg" className="cta-primary">
              View Projects
              <ArrowRight size={18} className="ml-2" />
            </div>
            <div onClick={handleDownloadResume} size="lg" variant="outline" className="cta-secondary">
              <Download size={18} className="mr-2" />
              Download Resume
            </div>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-card">
            <div className="stat-icon">
              <Code size={24} />
            </div>
            <Card className="stat-content">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Technical Skills</p>
            </Card>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Brain size={24} />
            </div>
            <Card className="stat-content">
              <h3 className="stat-number">2+</h3>
              <p className="stat-label">AI/ML Projects</p>
            </Card>
          </div>

          <div className="stat-card">
            <div className="stat-icon">
              <Microscope size={24} />
            </div>
            <Card className="stat-content">
              <h3 className="stat-number">2</h3>
              <p className="stat-label">Leadership Roles</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;