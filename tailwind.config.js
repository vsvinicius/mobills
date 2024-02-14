/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#1C1C1E',
          light: '#2C2C2E',
        },
        primary: {
          DEFAULT: '#7C4DFF',
          light: '#E0E3FF',
          dark: '#6515DD',
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
