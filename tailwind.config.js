/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Montserrat:['Montserrat', 'sans-serif'],
        RedHatDisplay:['Red Hat Display', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern': "url('../img/header-beground.png')",
      },
      maxWidth:{
        base: "1380px"
      },
      colors:{
        brand:{
          black:'#171921',
          pink: "#FECACA",
        }

        
      }
    },
  },
  plugins: [],
}
