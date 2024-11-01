// tailwind.config.js
module.exports = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./pages/**/*.vue",
    "./layouts/**/*.vue",
    "./app.vue",
    "./nuxt.config.{js,ts}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6a9c78",
        borderColor: "#1a260d",
      },
    },
  },
  plugins: [],
};
