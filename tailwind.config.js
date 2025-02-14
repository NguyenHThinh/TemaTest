/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,vue}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neutral: {
          50: "#F8F9FA",
          100: "#E7EAEC",
          200: "#D6DADE",
          300: "#C0C6CB",
          400: "#A2A9B0",
          500: "#475467",
          600: "#3F454C",
          700: "#343A40",
          800: "#2B3035",
          900: "#212529",
        },
      },
      
    },
  },
  plugins: [],
}

