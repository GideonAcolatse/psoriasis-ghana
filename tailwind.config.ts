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
        brand: {
          emerald: "#114232",
          "emerald-dark": "#0a281e",
          "emerald-light": "#195c46",
          terracotta: "#E06D28",
          "terracotta-dark": "#c25818",
          "terracotta-light": "#ea8242",
          leaf: "#2E7D32",
          "leaf-dark": "#1b5e20",
          linen: "#F8FAF9",
          charcoal: "#17211E",
          muted: "#586561",
          border: "rgba(17, 66, 50, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
