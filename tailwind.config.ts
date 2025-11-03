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
          primary: "rgb(var(--primary))",
          secondary: "rgb(var(--secondary))",
          cta: "rgb(var(--cta))",
          "cta-hover": "rgb(var(--cta-hover))",
          "border-color": "rgb(var(--background))",
          "card-background": "rgb(var(--background))",
          "card-hover": "rgb(var(--background))",
          "shadow-color": "rgb(var(--background))",
        },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;