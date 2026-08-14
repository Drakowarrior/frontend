import React, { useState } from 'react';
import { Sun, Moon, Laptop } from 'lucide-react';

const ThemeSwitcher = ({ theme, setThemeMode, themeMode, systemIsDark }) => {
  // themeMode can be 'dark', 'light', or 'system'
  const isDark = theme === 'dark';
  const [feedback, setFeedback] = useState('');

  const handleModeChange = (mode) => {
    setThemeMode(mode);
    if (mode === 'system') {
      const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'Dark' : 'Light';
      setFeedback(`System (${osTheme})`);
    } else if (mode === 'dark') {
      setFeedback('Dark Mode');
    } else {
      setFeedback('Light Mode');
    }
    setTimeout(() => setFeedback(''), 2000);
  };

  return (
    <div className="relative flex items-center">
      <div
        className={`p-1 rounded-xl border flex items-center gap-1 transition-all ${
          isDark
            ? 'border-white/10 bg-white/5 shadow-inner'
            : 'border-[#E1E4EA] bg-white shadow-sm'
        }`}
      >
        {/* Light */}
        <button
          onClick={() => handleModeChange('light')}
          aria-label="Force Light Mode"
          title="Light Mode"
          className={`p-1.5 rounded-lg transition-all relative ${
            themeMode === 'light'
              ? 'bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/40 shadow-sm'
              : isDark
              ? 'text-gray-400 hover:text-white hover:bg-white/5'
              : 'text-gray-500 hover:text-black hover:bg-gray-100'
          }`}
        >
          <Sun size={14} />
        </button>

        {/* Dark */}
        <button
          onClick={() => handleModeChange('dark')}
          aria-label="Force Dark Mode"
          title="Dark Mode"
          className={`p-1.5 rounded-lg transition-all relative ${
            themeMode === 'dark'
              ? 'bg-accent-purple/25 text-accent-purple dark:text-accent-cyan font-bold border border-accent-purple/40 shadow-sm'
              : isDark
              ? 'text-gray-400 hover:text-white hover:bg-white/5'
              : 'text-gray-500 hover:text-black hover:bg-gray-100'
          }`}
        >
          <Moon size={14} />
        </button>

        {/* System */}
        <button
          onClick={() => handleModeChange('system')}
          aria-label="Follow System OS Theme"
          title={`System OS Theme (Currently: ${systemIsDark ? 'Dark' : 'Light'})`}
          className={`p-1.5 rounded-lg transition-all relative flex items-center gap-1 ${
            themeMode === 'system'
              ? 'bg-accent-cyan/20 text-accent-purple dark:text-accent-cyan font-bold border border-accent-cyan/40 shadow-sm'
              : isDark
              ? 'text-gray-400 hover:text-white hover:bg-white/5'
              : 'text-gray-500 hover:text-black hover:bg-gray-100'
          }`}
        >
          <Laptop size={14} />
          {themeMode === 'system' && (
            <span
              className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
              title={`System Active: ${systemIsDark ? 'Dark OS' : 'Light OS'}`}
            />
          )}
        </button>
      </div>

      {/* Ephemeral Feedback Pill */}
      {feedback && (
        <div className="absolute top-full mt-2 right-0 px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold tracking-wider uppercase bg-gray-900 text-white dark:bg-white dark:text-black shadow-lg pointer-events-none whitespace-nowrap z-50 animate-fade-in">
          {feedback}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
