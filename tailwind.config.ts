import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./Header/**/*.{js,ts,jsx,tsx,mdx}",
    "./Headline/**/*.{js,ts,jsx,tsx,mdx}",  
  ],
  theme: {
    extend: {
      colors:{
        black:"#000000",
        primary:"#F7F7F7",
        secondary:"#FFFFFF"
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
    screens:{
      "sm": "640px",
      "md":"768px",
      "lg":"1024px",
      "xl":"1280px",
      "2xl":"1536px"
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
