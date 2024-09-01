import type { Config } from "tailwindcss"

import { resolve } from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({ path: resolve(__dirname, '.env') });

// Function to get environment variables or use default values
const getEnvVar = (key: string, defaultValue: string): string => {
  const value = process.env[key];
  if (!value) {
    console.warn(`Environment variable ${key} is not set. Using default value: ${defaultValue}`);
    return defaultValue;
  }
  return value;
};

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens :{
        xs: '320px',
        sm:'375px'
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'single-ping':'ping 1s cubic-bezier(0, 0, 0.2, 1)',
        'mini-ping':'mini-ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
        'tilt-shaking':'tilt-shaking .5s infinite linear',
        'move-shaking':'tilt-n-move-shaking 1s infinite linear',
        'jello-vertical': 'jello-vertical 3s both infinite',
        'wobble-right': 'wobble-ver-right 3s both infinite',
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        'tada':"tada 10s linear infinite;"
      },
      colors: {
        primary: getEnvVar('NEXT_PUBLIC_PRIMARY', '#fcd14f'),
        secondary: getEnvVar('NEXT_PUBLIC_SECONDARY', '#000000'),
        tertiary: getEnvVar('NEXT_PUBLIC_TERTIARY', '#FFFFFF'),

        light_bg: getEnvVar('NEXT_PUBLIC_LIGHT_BACKGROUND', '#ffffff'),
        dark_bg: getEnvVar('NEXT_PUBLIC_DARK_BACKGROUND', '#000000'),
        secondary_bg: getEnvVar('NEXT_PUBLIC_SECONDARY_BACKGROUND', '#fef2cd'),

        light_solid: getEnvVar('NEXT_PUBLIC_LIGHT_SOLID', '#fcc41d'),
        dark_solid: getEnvVar('NEXT_PUBLIC_DARK_SOLID', '#977202'),
        solid: getEnvVar('NEXT_PUBLIC_SOLID', '#fabb04'),

        gold:{
          100:'#fef2cd',
          200:'#fcd14f',
          300:'#fcca36',
          400:'#fcc41d',
          500:'#fabb04',
          600:'#e2aa03',
          700:'#c99703',
          800:'#977202'
        },
        black:{
          100:'#434356',
          200:'#373748',
          300:'#2c2c3a',
          400:'#21212b',
          500:'#16161d',
          600:'#111116',
          700:'#0b0b0e',
          800:'#000000',
          DEFAULT:'#000000'
        },
        gray: {
          100: '#f2f2f2',
          200: '#e5e5e6',
          300: '#d8d8d9',
          400: '#cbcbcd',
          500: '#bfbfc0',
          600: '#b7b7b9',
          700: '#b2b2b3',
          800: '#a5a5a7',
        },
      },
      spacing: {
        '9/16': '56.25%',
        '3/4': '75%',
        '1/1': '100%',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        rubik: ['var(--font-rubik)', 'sans-serif']
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        '4xl': '2.5rem',
        '5xl': '3.25rem',
        '6xl': '4rem',
      },
      inset: {
        'full': '100%',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      minWidth: {
        '10': '2.5rem',
      },
      scale: {
        '98': '.98'
      },
      maxWidth: {
        '8xl': '100rem'
      },
      zIndex:{
        '-z-100':'-100'
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),],
} satisfies Config

export default config