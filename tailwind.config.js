/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    backgroundImage: theme => ({
      'Sunny': "url('images/sunny.jpg')",
      'Haze':"url('images/hazy.webp')",
      'Snow':"url('images/snowy.webp')",
      'Rain':"url('images/rainy.jpeg')",
      'Clouds':"url('images/cloudy.jpg')",
      "Extreme":"url('images/extreme.jpg')",
      "Mist":"url('images/mist.jpg')",
      "Thunderstorm":"url('images/thunderstorm.jpg')",
      "Drizzle":"url('images/drizzle.jpg')",
      
    }),
    extend: {},
  },
  plugins: [],
}