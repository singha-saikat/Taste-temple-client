/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('src/assets/Meteor.svg')",
        
        'login': "url('src/assets/blob-haikei.png')",
        'svg': "url('src/assets/Animated Shape.svg')",
        
      },
      
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}

