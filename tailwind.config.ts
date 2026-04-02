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
        canvas: "#f4f5f7",
        panel: "#ffffff",
        ink: "#141823",
        slate: "#5c6475",
        edge: "#dbe0ea",
        brand: "#295cff",
        cyan: "#29c8e2",
        mint: "#4bd5aa"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(17, 24, 39, 0.08)",
        float: "0 24px 60px rgba(26, 44, 89, 0.14)"
      },
      backgroundImage: {
        "hero-ambient":
          "radial-gradient(circle at 12% -8%, rgba(41,92,255,0.18), transparent 44%), radial-gradient(circle at 92% 6%, rgba(41,200,226,0.18), transparent 40%), radial-gradient(circle at 80% 90%, rgba(75,213,170,0.14), transparent 42%)"
      }
    }
  },
  plugins: []
};

export default config;
