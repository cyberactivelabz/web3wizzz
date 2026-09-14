/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // "Crypto-native but clean" palette
        ink: {
          950: '#0a0e14',
          900: '#0d1117',
          800: '#11161f',
          700: '#1a212e',
          600: '#242d3d',
          500: '#39445a',
          400: '#5b6880',
          300: '#8b98ad',
          200: '#c3ccd9',
        },
        mint: {
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        paper: {
          50: '#fafbfc',
          100: '#f4f6f8',
          200: '#e6eaef',
          300: '#d0d7e0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
