import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#071A3D",
        royal: "#0B3D91",
        skybrand: "#0EA5E9",
        gold: "#FACC15",
        premiumYellow: "#FFD43B",
        crimson: "#DC2626",
        maroon: "#6E1827",
        wine: "#3B0D18",
        cream: "#F7E8D0",
        pearl: "#FFF8EC",
        charcoal: "#111827",
        light: "#F8FAFC"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(7, 26, 61, 0.18)",
        glow: "0 0 34px rgba(250, 204, 21, 0.28)"
      },
      fontFamily: {
        sans: ["Segoe UI", "Inter", "system-ui", "sans-serif"],
        display: ["Georgia", "Cambria", "Times New Roman", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
