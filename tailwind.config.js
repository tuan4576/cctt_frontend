/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Kích hoạt dark mode theo class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: {
          background: '#ffffff',
          text: '#333333',
          primary: '#3490dc',
        },
        dark: {
          background: '#1a202c',
          text: '#e2e8f0',
          primary: '#63b3ed',
        },
      },
    },
  },
  plugins: [],
};
