import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#06080f",
        panel: "#0b1020",
        panelSoft: "#121a2f",
        cyanGlow: "#22d3ee",
        magentaGlow: "#f472b6"
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(34,211,238,.3), 0 0 30px rgba(34,211,238,.08)",
        magenta: "0 0 0 1px rgba(244,114,182,.35), 0 0 30px rgba(244,114,182,.08)"
      }
    }
  },
  plugins: []
};

export default config;
