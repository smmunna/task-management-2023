/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#88dce2",
          "secondary": "#e88774",
          "accent": "#e09c64",
          "neutral": "#2d233e",
          "base-100": "#263a4b",
          "info": "#4295c2",
          "success": "#4dd5c5",
          "warning": "#f9bb5d",
          "error": "#f85549",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

