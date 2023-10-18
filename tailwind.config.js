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
        
      }
    },
  },
  plugins: [require("daisyui")],
}

