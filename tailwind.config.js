/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#020b18',
          900: '#040f1f',
          800: '#071428',
          700: '#0a1a35',
          600: '#0d2144',
        },
        steel: {
          400: '#a8b8cc',
          300: '#c0cfe0',
          200: '#d8e4f0',
          100: '#edf2f8',
        },
        gunmetal: {
          900: '#1a1f25',
          800: '#242a32',
          700: '#2e363f',
          600: '#38424d',
        },
        carbon: {
          950: '#080a0c',
          900: '#0e1114',
          800: '#161b1f',
        },
        electric: {
          600: '#0066ff',
          500: '#1a7aff',
          400: '#3d8eff',
          300: '#66a3ff',
        },
        gold: {
          500: '#d4a017',
          400: '#e5b930',
          300: '#f0cc55',
        },
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #020b18 0%, #040f1f 40%, #071428 70%, #020b18 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'electric-gradient': 'linear-gradient(135deg, #0066ff 0%, #00c6ff 100%)',
      },
      boxShadow: {
        'electric': '0 0 40px rgba(0, 102, 255, 0.3)',
        'electric-lg': '0 0 80px rgba(0, 102, 255, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.3)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,102,255,0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(0,102,255,0.6)' },
        },
      },
      screens: {
        'xs': '375px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
    },
  },
  plugins: [],
}
