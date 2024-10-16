/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Header: ['"Space Grotesk"', "sans-serif"],
        Body: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        myTheme: {
          primary: "#00AF91",
          secondary: "#007965",
          accent: "#F58634",
          neutral: "#FFCC29",
          "base-100": "#ffffff",
        },
      },
      "dim",
      "winter",
      "garden",
      "halloween",
      "fantasy",
    ],
    // darkTheme: "dim",
  },
};
