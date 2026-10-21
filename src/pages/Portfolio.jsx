import React from 'react';
import Navbar from '../components/Navbar';
import LabBackgroundCanvas from '../components/3d/LabBackgroundCanvas';
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
import { useLenisScroll } from '../hooks/useLenisScroll';

const Portfolio = () => {
  // Initialize Lenis smooth scroll
  useLenisScroll();

  return (
    <div className="min-h-screen relative bg-lab-bg text-lab-ink selection:bg-indigo-500/20 selection:text-lab-ink">
      {/* 1. Tactile Fine Grain Texture Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* 2. Fixed Lightweight R3F Background Canvas strictly behind all content (z-index: -1) */}
      <LabBackgroundCanvas />

      {/* 3. Cinematic Intro Preloader */}
      <IntroLoader />

      {/* 4. Desktop Custom Interactive Cursor */}
      <CustomCursor />

      {/* 5. Top Gradient Scroll Bar & Floating Pill */}
      <ScrollProgressIndicator />

      {/* 6. Centered Floating Glass Navbar */}
      <Navbar />

      {/* 7. Main Content Flow with orchestrated z-index layering */}
      <main className="relative z-10">
        {/* 1. Hero Section with 3D Portrait */}
        <Hero />

        {/* 2. Editorial Core Philosophy Statement */}
        <IdentityStatement />

        {/* 3. Live Active Focus Pulse */}
        <CurrentFocus />

        {/* 4. Featured Projects (SARVA AI & MedRAG) */}
        <Projects />

        {/* 5. 3D Stepped Methodology Timeline */}
        <HowIBuild />

        {/* 6. Interactive 3D Tech Constellation */}
        <TechConstellation />

        {/* 7. Categorized Skills Taxonomy */}
        <Skills />

        {/* 8. Career Experience & Leadership Timeline */}
        <Experience />

        {/* 9. Editorial About Profile & Journey */}
        <About />

        {/* 10. Verified Industry Certifications 3D Carousel */}
        <Certificates />

        {/* 10.5. Published Research (Springer 2026) */}
        <ResearchPublications />

        {/* 11. Academic Foundation */}
        <Education />

        {/* 12. Extra Dimension / Activities & Hackathons */}
        <Achievements />

        {/* 13. Large Glass Contact Panel */}
        <Contact />
      </main>

      {/* 14. Minimal Footer */}
      <Footer />
    </div>
  );
};

export default Portfolio;