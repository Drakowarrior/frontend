/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Theme "BRIGHT 3D LAB" Primary Tokens
        lab: {
          bg: '#F6F5FF',
          lavender: '#EDE9FE',
          iceCyan: '#E0F7FB',
          surface: 'rgba(255, 255, 255, 0.65)',
          surfaceSolid: '#FFFFFF',
          border: 'rgba(99, 102, 241, 0.14)',
          borderHover: 'rgba(99, 102, 241, 0.35)',
          ink: '#12142A',
          muted: '#4B5380',
          subtle: '#6E76A4',
          accentViolet: '#8B5CF6',
          accentIndigo: '#6366F1',
          accentCyan: '#06B6D4',
          accentCoral: '#FF7A90',
          accentLime: '#B8F34A',
        },
        // Backward-compatible accent references
        accent: {
          purple: '#8B5CF6',
          violet: '#7C3AED',
          ultraviolet: '#6366F1',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          emerald: '#10B981',
          coral: '#FF7A90',
          lime: '#B8F34A',
        }
      },
      borderRadius: {
        'card': '28px',
        'btn': '14px',
        'chip': '9999px',
      },
      fontFamily: {
        display: ['Outfit', 'Inter', '-apple-system', 'sans-serif'],
        body: ['Inter', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        'glass': '0 24px 60px -24px rgba(99, 102, 241, 0.35), 0 4px 16px -2px rgba(99, 102, 241, 0.08)',
        'glass-hover': '0 32px 70px -20px rgba(99, 102, 241, 0.45), 0 8px 24px -4px rgba(99, 102, 241, 0.15)',
        'elevation-1': '0 8px 24px -6px rgba(99, 102, 241, 0.15)',
        'elevation-2': '0 16px 40px -12px rgba(99, 102, 241, 0.22)',
        'elevation-3': '0 24px 60px -20px rgba(99, 102, 241, 0.32)',
        'btn-glow': '0 10px 25px -5px rgba(99, 102, 241, 0.40)',
        'cyan-glow': '0 10px 25px -5px rgba(6, 182, 212, 0.40)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-reverse': 'float-reverse 8s ease-in-out infinite',
        'orbit-spin': 'spin 35s linear infinite',
        'orbit-spin-reverse': 'spin-reverse 45s linear infinite',
        'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
        'shimmer-light': 'shimmer 3s infinite linear',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(12px)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.03)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
