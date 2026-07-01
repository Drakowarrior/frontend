import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Scene3D from '../components/Scene3D';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Certificates from '../components/Certificates';
import AdditionalInfo from '../components/AdditionalInfo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import CustomCursor from '../components/ui/CustomCursor';
import IntroLoader from '../components/ui/IntroLoader';

const Portfolio = () => {
  // Default theme is dark
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Detect theme preference
    const savedTheme = localStorage.getItem('theme');
    let activeTheme = 'dark';
    
    if (savedTheme) {
      activeTheme = savedTheme;
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      activeTheme = 'light';
    }

    setTheme(activeTheme);
    
    // Apply class to html and body elements for Tailwind compile support
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(activeTheme);
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(activeTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(newTheme);
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(newTheme);
  };

  return (
    <div className={`min-h-screen relative transition-colors duration-300 ${
      theme === 'dark' ? 'bg-bgDark text-white' : 'bg-bgLight text-slate-800'
    }`}>
      {/* Cinematic Intro Loader */}
      <IntroLoader theme={theme} />

      {/* Interactive Custom Cursor */}
      <CustomCursor theme={theme} />

      {/* Fixed 3D background */}
      <Scene3D theme={theme} />

      {/* Structured Sections */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <Education theme={theme} />
      <Skills theme={theme} />
      <Experience theme={theme} />
      <Certificates theme={theme} />
      <AdditionalInfo theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
      
      {/* Back to top toggle */}
      <ScrollToTop theme={theme} />
    </div>
  );
};

export default Portfolio;