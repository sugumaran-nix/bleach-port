import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light theme (Ichigo Normal Form) — orange, black, white soul reaper palette
        ichigo: {
          orange: "#E8600A",
          "orange-light": "#F4873A",
          "orange-dim": "#C04E06",
          black: "#1A1210",
          "black-soft": "#2D1F18",
          cream: "#FFF8F0",
          "cream-dark": "#F5EAD8",
          zanpakuto: "#8B7355",
          hollow: "#4A0E0E",
        },
        // Dark theme (Vasto Lorde / Hollowfied Ichigo) — bone white, deep black, red/purple reiatsu
        hollow: {
          bone: "#E8E0D5",
          "bone-bright": "#F5F0E8",
          abyss: "#080608",
          "abyss-soft": "#110D14",
          surface: "#1A1020",
          "surface-2": "#221530",
          reiatsu: "#8B1A8B",
          "reiatsu-bright": "#BF2FBF",
          blood: "#8B0000",
          "blood-bright": "#CC1111",
          void: "#2D0A2D",
          mask: "#D4C8B8",
        },
      },
      fontFamily: {
        display: ["'Bebas Neue'", "cursive"],
        heading: ["'Rajdhani'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-right": "slideRight 0.5s ease-out forwards",
        "reiatsu-pulse": "reiatsuPulse 2s ease-in-out infinite",
        "hollow-glow": "hollowGlow 3s ease-in-out infinite",
        "sword-slash": "swordSlash 0.4s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "scan-line": "scanLine 8s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-24px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        reiatsuPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(232, 96, 10, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(232, 96, 10, 0)" },
        },
        hollowGlow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(139, 26, 139, 0.6)" },
          "50%": { boxShadow: "0 0 24px rgba(191, 47, 191, 0.9), 0 0 48px rgba(139, 26, 139, 0.4)" },
        },
        swordSlash: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backgroundImage: {
        "ichigo-gradient": "linear-gradient(135deg, #E8600A 0%, #C04E06 50%, #1A1210 100%)",
        "hollow-gradient": "linear-gradient(135deg, #080608 0%, #1A1020 50%, #2D0A2D 100%)",
        "reiatsu-glow": "radial-gradient(ellipse at center, rgba(139,26,139,0.3) 0%, transparent 70%)",
        "ichigo-glow": "radial-gradient(ellipse at center, rgba(232,96,10,0.2) 0%, transparent 70%)",
      },
    },
  },
  plugins: [],
};

export default config;
