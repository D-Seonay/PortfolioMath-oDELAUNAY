// tailwind.config.ts

import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1220px',
      '2xl': '1440px',
      '3xl': '1700px',
    },
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      textStrokeWidth: {
        DEFAULT: '1px',
        2: '2px',
        3: '3px',
        5: '5px',
        8: '8px',
      },
      textStrokeColor: {
        DEFAULT: '#000',
        white: '#FFF',
        black: '#000',
      },

      textShadow: {
        DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'custom-1': '10px 10px 1px rgba(0, 0, 0, 1)',

      },
      boxShadow: {
        DEFAULT: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'custom-1': '10px 0px 0px rgba(0, 0, 0, 0.25)',
      },
      border: {
        1: '1px solid',
        2: '2px solid',
        3: '3px solid',
        radius: '10px',
      },
      fontSize: {
        sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',

      },
      colors: {
        primary: '#2163AD',
        secondary: '#1A4F8A',
        black: {
          DEFAULT: '#000',
          100: '#191919',
          200: '#161B22',
          300: '#1F2428',
          400: '#242C38',
        },
        grey: {
          DEFAULT: '#B3BBC3',
          100: '#969BA5',
          200: '#55616D',
        },
        white: {
          DEFAULT: '#FFF',
          100: 'rgba(163, 179, 188, 0.2)',
          400: '#A3B3BC',
          500: '#A4B8D5',
          800: '#D0DFFF',
        },
        blue: {
          default: '#2163AD',
          100: '#E6F0FF',
          200: '#CCE0FF',
          300: '#B3D1FF',
          400: '#99C2FF',
          500: '#80B3FF',
          600: '#66A3FF',
          700: '#4D94FF',
          800: '#3385FF',
          purple: '#8C7CFF',
        },
        transparent: {
          DEFAULT: 'rgba(255, 255, 255, 0.0)',
          black: 'rgba(0, 0, 0, 0.0) text-opacity-0',
          white: 'rgba(255, 255, 255, 0.0)',
        },
        pink: '#ED5FBD',
        violet: '#F16565',
        orange: '#FF964B',
        
      },
      backgroundImage: {
        banner: "url('/jsm_resources_banner.svg')",
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins:[
    require('tailwindcss-animate'),
    require('tailwindcss-textshadow'),
    require('tailwindcss-text-stroke'),
  ],
  
});
