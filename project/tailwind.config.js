/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Raleway', 'sans-serif'],
      },
      colors: {
        night: {
          950: '#050508',
          900: '#0a0a0f',
          800: '#0f0f18',
          700: '#141420',
          600: '#1a1a2a',
          500: '#202035',
        },
        gold: {
          50:  '#fffbea',
          100: '#fff3c4',
          200: '#ffe580',
          300: '#ffd23f',
          400: '#f5bc00',
          500: '#d4a017',
          600: '#b8860b',
          700: '#9a6f0a',
          800: '#7a5508',
          900: '#5a3d05',
        },
        ivory: {
          50:  '#fffff8',
          100: '#fdfdf0',
          200: '#f8f6e0',
          300: '#f0edd0',
          400: '#e6e2b8',
          500: '#d8d3a0',
        },
        nile: {
          400: '#4db8d4',
          500: '#2ea8c8',
          600: '#1a8fab',
          700: '#0d7290',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        scarab: {
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
        },
        sienna: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #d4a017 0%, #f5bc00 50%, #d4a017 100%)',
        'night-gradient': 'linear-gradient(180deg, #050508 0%, #0f0f18 50%, #0a0a0f 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(212,160,23,0.08) 0%, rgba(20,184,166,0.05) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-16px) rotate(2deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-24px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'rotate-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'counter-up': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(0)' },
        },
        'draw-line': {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'rotate-slow': 'rotate-slow 20s linear infinite',
        'fade-up': 'fade-up 0.7s ease-out forwards',
        wiggle: 'wiggle 2s ease-in-out infinite',
      },
      boxShadow: {
        gold: '0 0 30px rgba(212, 160, 23, 0.3)',
        'gold-lg': '0 0 60px rgba(212, 160, 23, 0.4)',
        nile: '0 0 30px rgba(46, 168, 200, 0.3)',
        teal: '0 0 30px rgba(20, 184, 166, 0.3)',
        card: '0 4px 40px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
};
