/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      colors: {
        'cyber-blue': '#00d4ff',
        'cyber-green': '#00ff88',
        'cyber-purple': '#8b5cf6',
        'dark-bg': '#0f0f23',
        'dark-card': '#1a1a3e',
        'dark-border': '#2a2a5e',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s infinite',
        'slide-up': 'slide-up 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)',
            transform: 'scale(1.02)'
          },
        },
        'slide-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
}