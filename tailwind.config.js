/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary color - Olive Green shades
        olive: {
          50: '#f8f9f3',
          100: '#eaefd1',
          200: '#d2dbaa',
          300: '#b6c17c',
          400: '#9aa657',
          500: '#7a8745',
          600: '#5e6834',
          700: '#4a5229',
          800: '#3a4120',
          900: '#29301a',
          950: '#171d0d',
        },
        // Indian Army - Green shades
        army: {
          50: '#f3f5f0',
          100: '#e2e9db',
          200: '#c5d4b6',
          300: '#a2ba89',
          400: '#829f65',
          500: '#66814c',
          600: '#4f673a',
          700: '#3e502d',
          800: '#2f3c22',
          900: '#1f2716',
        },
        // Indian Navy - Blue shades
        navy: {
          50: '#eef4fa',
          100: '#d3e2f2',
          200: '#a8c6e5',
          300: '#73a3d3',
          400: '#3c79ba',
          500: '#2a60a3',
          600: '#234b86',
          700: '#1d3b6a',
          800: '#172e54',
          900: '#121f3a',
        },
        // Indian Air Force - Light Blue shades
        airforce: {
          50: '#f0f8ff',
          100: '#d8ecff',
          200: '#b3d9ff',
          300: '#85c0ff',
          400: '#4a9fff',
          500: '#1a78ff',
          600: '#0059ff',
          700: '#0047cc',
          800: '#003da6',
          900: '#003080',
        },
      },
      fontFamily: {
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      animation: {
        'fadeIn': 'fadeIn 0.7s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};