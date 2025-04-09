/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", 
      "./public/fonts/**/*.{ttf,otf}",
    ],
    theme: {
      extend: {
        fontFamily: {
            starship:['StarshipTroopers', 'sans-serif']
        }
      },
    },
    plugins: [],
  }
  