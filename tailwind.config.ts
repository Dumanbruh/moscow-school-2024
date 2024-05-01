import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "440px",
        md: "1224px",
        lg: "1440px",
        xl: "1920px",
      },
      fontFamily: {
        sans: ["Gotham Pro Regular", "sans-serif"], // Default sans-serif font
        bold: ["Gotham Pro Bold", "sans-serif"],
        medium: ["Gotham Pro Medium", "sans-serif"],
        light: ["Gotham Pro Light", "sans-serif"],
        mossport: ["Mossport", "sans-serif"], // Additional custom font
      },
      colors: {
        blue: "#001E72",
        white: "#FFFFFF",
        black: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
