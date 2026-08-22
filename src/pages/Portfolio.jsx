import React from 'react';
import Navbar from '../components/Navbar';
import Scene3D from '../components/Scene3D';
import InteractiveNeuralBackground from '../components/InteractiveNeuralBackground';
import Hero from '../components/Hero';
import IdentityStatement from '../components/IdentityStatement';
import CurrentFocus from '../components/CurrentFocus';
import Projects from '../components/Projects';
import HowIBuild from '../components/HowIBuild';
import TechConstellation from '../components/TechConstellation';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import About from '../components/About';
import Certificates from '../components/Certificates';
import ResearchPublications from '../components/ResearchPublications';
import Education from '../components/Education';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CustomCursor from '../components/ui/CustomCursor';
import IntroLoader from '../components/ui/IntroLoader';
import ScrollProgressIndicator from '../components/ScrollProgressIndicator';

const Portfolio = ({ theme, setThemeMode, themeMode, systemIsDark }) => {
  return (
    <div className={`min-h-screen relative transition-colors duration-300 selection:bg-accent-purple/30 selection:text-white ${
      theme === 'dark' ? 'bg-[#050507] text-[#f5f5f7]' : 'bg-[#F7F8FA] text-[#111318]'
    }`}>
      {/* Cinematic Intro Preloader (<2s) */}
      <IntroLoader theme={theme} />

      {/* Interactive Desktop Custom Cursor */}
      <CustomCursor theme={theme} />

      {/* Signature Interactive Neural Background with Central System Axis & Drag Interaction */}
      <InteractiveNeuralBackground theme={theme} />

      {/* 4D AI Neural Core 3D Layer */}
      <Scene3D theme={theme} />

      {/* Floating Navigation Header with 3-way ThemeSwitcher */}
      <Navbar theme={theme} setThemeMode={setThemeMode} themeMode={themeMode} systemIsDark={systemIsDark} />

      {/* Smart Section Progress Indicator */}
      <ScrollProgressIndicator theme={theme} />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <Hero theme={theme} />

        {/* 2. Editorial Identity Statement */}
        <IdentityStatement theme={theme} />

        {/* 3. Live Active Focus Pulse */}
        <CurrentFocus theme={theme} />

        {/* 4. Featured Projects (SARVA AI & MedRAG) */}
        <Projects theme={theme} />

        {/* 5. "How I Build" 7-Step Methodology */}
        <HowIBuild theme={theme} />

        {/* 6. Interactive Tech Constellation */}
        <TechConstellation theme={theme} />

        {/* 7. Categorized Skills Taxonomy */}
        <Skills theme={theme} />

        {/* 8. Career Experience & Leadership Timeline */}
        <Experience theme={theme} />

        {/* 9. Editorial About Profile & Journey Timeline */}
        <About theme={theme} />

        {/* 10. Verified Industry Certifications with Google Drive CTA */}
        <Certificates theme={theme} />

        {/* 10.5. Published Research (Springer 2026) */}
        <ResearchPublications theme={theme} />

        {/* 11. Academic Foundation */}
        <Education theme={theme} />

        {/* 12. Extra Dimension / Activities & Hackathons */}
        <Achievements theme={theme} />

        {/* 13. Dramatic Contact Section */}
        <Contact theme={theme} />
      </main>


      {/* 14. Minimal Footer */}
      <Footer theme={theme} />
    </div>
  );
};

export default Portfolio;