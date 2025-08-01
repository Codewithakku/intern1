/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <--- Important for React+TS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
