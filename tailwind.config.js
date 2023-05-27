/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily:{
    
      },
      transitionProperty: {
        'height': 'height'
      },
      
      colors:{
        primary: colors.black,
        secondary: '#27272a',
        accent: '#a1a1aa',
        danger: '#eb3434',
        primarytext: colors.white,
        secondarytext: '#52525b'


      },
      height: theme => ({
        "screen-90": "90vh",
        "screen-70":"70vh",
        "screen/2" :"50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    //require('daisyui'),
  ],
}

