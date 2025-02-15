/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#001744',
        info: '#40BEE2',
        danger: '#dc3545',
        warning: '#F1F35F',
        success: '#198754',
        dark:'#292C3D',
        secondary:'#63BA4B',
        violet:'#E424FF'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #19294A, #4078FF, #563620, #FFFFFF)',
      },
    },
  },
  plugins: [],
  important: true,
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
};
