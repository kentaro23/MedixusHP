import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        base: "#f7f8fc",
        ink: "#0f1728",
        muted: "#5b6478",
        line: "rgba(15, 23, 40, 0.08)",
        cyan: "#56d6ff",
        azure: "#4f6fff",
        mint: "#43f6c6"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(63, 111, 255, 0.18)",
        panel: "0 12px 40px rgba(12, 18, 34, 0.08)"
      },
      backgroundImage: {
        "hero-radial": "radial-gradient(circle at 15% -10%, rgba(79,111,255,0.24), transparent 45%), radial-gradient(circle at 92% 18%, rgba(86,214,255,0.23), transparent 42%), radial-gradient(circle at 50% 120%, rgba(67,246,198,0.2), transparent 46%)"
      }
    }
  },
  plugins: []
};

export default config;
