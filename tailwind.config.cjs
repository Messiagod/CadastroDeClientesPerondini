/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1230px',
      // => @media (min-width: 1440px) { ... }
      'xl': '1870px',
      // => @media (min-width: 1980px) { ... }
    },
    extend: {
      backgroundImage: {
        'climaNoite': "url('https://assets.msn.com/weathermapdata/1/static/images/webps/v1.0/Clear%20Night.webp')"
      },
      fontFamily: {
        sans: 'Clan Pro, sans-serif'
      },
      colors: {
       
        green: {
          300: '#00B37E',
          500: '#00875F',
          700: '#015F43',
        },
        blue: {
          50: '#ebf6ff',
          500: '#3392E6',
        },
        orange: {
          500: '#FBA94C',
        },
        red: {
          500: '#F75A68',
        },
        gray: {
          50: '#6c757d',
          100: '#e9e9e9',
          200: '#C4C4CC',
          300: '#8D8D99',
          500: '#323238',
          600: '#29292E',
          700: 'rgb(18, 18, 20)',
          900: 'rgb(32, 32, 36)'
        }
      },
    },
  },
  
}
