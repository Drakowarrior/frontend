/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Dark Mode tokens
        bgDark: '#050507',
        bgDarkElevated: '#09090d',
        bgDarkSurface: '#0e0e15',
        bgDarkCard: 'rgba(14, 14, 21, 0.75)',

        // Light Mode tokens (True Editorial Light Design System)
        bgLight: '#F7F7F8',
        bgLightElevated: '#FFFFFF',
        bgLightSurface: '#FFFFFF',
        bgLightCard: 'rgba(255, 255, 255, 0.92)',
        lightTextPrimary: '#111113',
        lightTextSecondary: '#4B4B55',
        lightTextMuted: '#6B6B76',
        lightBorder: '#E4E4EA',

        accent: {
          purple: '#8B5CF6',
          violet: '#7C3AED',
          ultraviolet: '#6366F1',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          emerald: '#10B981',
          // Light Mode Accents
          lightPurple: '#6D4AFF',
          lightIndigo: '#4F46E5',
          lightCyan: '#0891B2',
          lightDarkPurple: '#4C1D95',
        }
      },
      fontFamily: {
        display: ['Outfit', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'gradient-pulse': 'gradient-pulse 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
      },
      keyframes: {
        'gradient-pulse': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.45)',
        'glass-light': '0 4px 24px -2px rgba(0, 0, 0, 0.06), 0 2px 8px -1px rgba(0, 0, 0, 0.04)',
        'card-light': '0 10px 30px -4px rgba(17, 17, 19, 0.06), 0 4px 12px -2px rgba(17, 17, 19, 0.03)',
        'card-light-hover': '0 20px 40px -8px rgba(109, 74, 255, 0.12), 0 8px 16px -4px rgba(17, 17, 19, 0.04)',
        'glow-purple': '0 0 25px -5px rgba(139, 92, 246, 0.45)',
        'glow-cyan': '0 0 25px -5px rgba(6, 182, 212, 0.45)',
        'glow-violet': '0 0 35px -8px rgba(124, 58, 237, 0.5)',
      }
    },
  },
  plugins: [],
}
