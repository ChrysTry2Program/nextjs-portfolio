import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0ea5e9",
          dark: "#0284c7",
        },
      },
    },
  },
<<<<<<< HEAD
  plugins: [typography], // 👈 add this
=======
  plugins: [typography], 
>>>>>>> 4d5e91e (Initial commit)
};

export default config;
