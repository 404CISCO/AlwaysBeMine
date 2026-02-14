/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        charm: ['Charm', 'serif'],
        rivage: ['Beau Rivage', 'serif'],
      },
    },
  },
  plugins: [],
}
