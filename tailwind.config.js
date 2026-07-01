/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Premium Dark/Light color schemes
        bgDark: '#0a0d16',
        bgDarkCard: 'rgba(17, 22, 37, 0.7)',
        bgLight: '#f8fafc',
        bgLightCard: 'rgba(255, 255, 255, 0.7)',
        accent: {
          purple: '#8b5cf6',
          blue: '#3b82f6',
          cyan: '#06b6d4',
        }
      },
      fontFamily: {
        display: ['Outfit', 'Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'gradient-pulse': 'gradient-pulse 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
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
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      boxShadow: {
        'glass-dark': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.08)',
        'glow-purple': '0 0 15px rgba(139, 92, 246, 0.5)',
        'glow-cyan': '0 0 15px rgba(6, 182, 212, 0.5)',
      }
    },
  },
  plugins: [],
}
