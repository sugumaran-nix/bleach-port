import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#0A0A0B",
        surface: "#111113",
        soul: "#F0F0F2",
        reiatsu: "#C1121F",
        spirit: "#D4AF37",
        getsuga: "#1B4FE4",
        ash: "#3A3A3F",
      },
      fontFamily: {
        display: ["'Noto Serif JP'", "serif"],
        body: ["Inter", "sans-serif"],
        accent: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
