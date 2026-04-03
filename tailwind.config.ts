import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A2540",
        secondary: "#00D4AA",
        accent: "#635BFF",
        background: "#FAFBFC",
        surface: "#FFFFFF",
        textPrimary: "#1A1A2E",
        textSecondary: "#6B7280"
      },
      maxWidth: {
        "7xl": "80rem"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #0A2540 0%, #1B3A5C 50%, #0D4F6B 100%)",
        "cta-gradient": "linear-gradient(135deg, #00D4AA 0%, #635BFF 100%)",
        "grid-pattern": "linear-gradient(to right, rgba(10,37,64,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(10,37,64,0.08) 1px, transparent 1px)",
        "dot-pattern": "radial-gradient(rgba(10,37,64,0.12) 1px, transparent 1px)"
      },
      boxShadow: {
        glow: "0 20px 50px rgba(99,91,255,0.2)",
        soft: "0 10px 30px rgba(10,37,64,0.12)"
      }
    }
  },
  plugins: []
};

export default config;
