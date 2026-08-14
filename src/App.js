import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import ResumePage from './pages/ResumePage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import './App.css';

function App() {
  const [themeMode, setThemeModeState] = useState('system'); // 'dark', 'light', 'system'
  const [effectiveTheme, setEffectiveTheme] = useState('dark');
  const [systemIsDark, setSystemIsDark] = useState(true);

  // Helper to determine and apply theme
  const applyTheme = useCallback((mode) => {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setSystemIsDark(prefersDark);

    let resolved = mode;
    if (mode === 'system') {
      resolved = prefersDark ? 'dark' : 'light';
    }

    setEffectiveTheme(resolved);

    // Apply to html and body elements
    const root = document.documentElement;
    const body = document.body;

    root.classList.remove('dark', 'light');
    root.classList.add(resolved);
    body.classList.remove('dark', 'light');
    body.classList.add(resolved);
    root.style.colorScheme = resolved;
  }, []);

  useEffect(() => {
    // 1. Load initial saved mode or default to 'system'
    const savedMode = localStorage.getItem('kg_theme_mode') || 'system';
    setThemeModeState(savedMode);
    applyTheme(savedMode);

    // 2. Real-time mediaQuery listener for OS theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => {
      const isDarkNow = e.matches;
      setSystemIsDark(isDarkNow);
      const currentMode = localStorage.getItem('kg_theme_mode') || 'system';
      if (currentMode === 'system') {
        applyTheme('system');
      }
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleSystemChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleSystemChange);
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleSystemChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleSystemChange);
      }
    };
  }, [applyTheme]);

  const setThemeMode = (mode) => {
    setThemeModeState(mode);
    localStorage.setItem('kg_theme_mode', mode);
    applyTheme(mode);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Portfolio
                theme={effectiveTheme}
                setThemeMode={setThemeMode}
                themeMode={themeMode}
                systemIsDark={systemIsDark}
              />
            }
          />
          <Route
            path="/resume"
            element={
              <ResumePage
                theme={effectiveTheme}
                setThemeMode={setThemeMode}
                themeMode={themeMode}
                systemIsDark={systemIsDark}
              />
            }
          />
          <Route
            path="/projects/:id"
            element={
              <ProjectDetailsPage
                theme={effectiveTheme}
                setThemeMode={setThemeMode}
                themeMode={themeMode}
                systemIsDark={systemIsDark}
              />
            }
          />
          <Route
            path="*"
            element={
              <Portfolio
                theme={effectiveTheme}
                setThemeMode={setThemeMode}
                themeMode={themeMode}
                systemIsDark={systemIsDark}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;