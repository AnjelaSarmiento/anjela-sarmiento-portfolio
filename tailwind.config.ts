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
        space: {
          dark: "#0a0a0f",
          darker: "#050508",
          light: "#1a1a2e",
          accent: "#16213e",
          blue: "#0f3460",
          purple: "#533483",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(79, 70, 229, 0.5)" },
          "100%": { boxShadow: "0 0 20px rgba(79, 70, 229, 0.8), 0 0 30px rgba(79, 70, 229, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

