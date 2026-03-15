import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gold: "#D4AF37",
        gray: {
          900: "#111111",
          800: "#1a1a1a",
          700: "#2d2d2d",
          600: "#404040",
          500: "#525252",
          400: "#707070",
          300: "#a3a3a3",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "sans-serif"],
      },
      spacing: {
        section: "6rem",
      },
      borderColor: {
        gold: "#D4AF37",
      },
    },
  },
  plugins: [],
};
export default config;
