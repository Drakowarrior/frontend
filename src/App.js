import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Portfolio from './pages/Portfolio';
import ResumePage from './pages/ResumePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import { pageVariants } from './utils/motion';
import './App.css';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="w-full min-h-screen"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Portfolio />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/projects/:id" element={<ProjectDetailsPage />} />
          <Route path="*" element={<Portfolio />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    // Enforce Bright 3D Lab Complete Light Theme
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove('dark');
    root.classList.add('light');
    body.classList.remove('dark');
    body.classList.add('light');
    root.style.colorScheme = 'light';
  }, []);

  return (
    <div className="App bg-lab-bg text-lab-ink min-h-screen">
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;