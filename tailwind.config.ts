import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/public/hero.jpg')",
      },
      fontFamily: {
        primary: ["Mona-Sans"],
        secondary: ['"Open Sans"'],
      },
      colors: {
        primary: {
          50: "#EDEDF8",
          100: "#D5DEFF",
          200: "#ABBDFF",
          300: "#819DFF",
          400: "#577CFF",
          500: "#2D5BFF",
          600: "#3C3B91",
          700: "#2D2C6D",
          800: "#1E1E48",
          900: "#0F0F24",
        },
        secondary: {
          50: "#E6FCF2",
          100: "#CCF8E5",
          200: "#9AF2CC",
          300: "#67EBB2",
          400: "#35E599",
          500: "#02DE7F",
          600: "#3A4555",
          700: "#2B3440",
          800: "#1D232B",
          900: "#0E1115",
        },
        badge: "#F1F5F9",
        badgeText: "#475569",
      },
      fontSize: {
        h1: [
          "3.5rem",
          {
            lineHeight: "3.75rem",
          },
        ],
        h2: [
          "2.25rem",
          {
            lineHeight: "2.625rem",
          },
        ],
        h3: [
          "1.875rem",
          {
            lineHeight: "2.25rem",
          },
        ],
        h4: [
          "1.5rem",
          {
            lineHeight: "2rem",
          },
        ],
        h5: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
          },
        ],
        h6: [
          "1.125rem",
          {
            lineHeight: "1.5rem",
          },
        ],
        poster: [
          "6rem",
          {
            lineHeight: "6rem",
          },
        ],
        "large-h1": [
          "4.5rem",
          {
            lineHeight: "4.5rem",
          },
        ],
        "section-title": [
          "3rem",
          {
            lineHeight: "3rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
