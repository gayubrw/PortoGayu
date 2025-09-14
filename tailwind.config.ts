import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New Theme: Black, Deep Red & Cream
        "theme-black": "#000000", // Primary background
        "theme-red": "#A11312", // Accent/action color
        "theme-cream": "#FFE5CC", // Text/highlight color

        // Variations for better design
        "theme-red-dark": "#8B0F0B", // Darker red for hover states
        "theme-red-light": "#C71E1E", // Lighter red for subtle elements
        "theme-cream-dark": "#E6CC99", // Darker cream for secondary text
        "theme-cream-light": "#FFF2E6", // Lighter cream for backgrounds

        // Legacy colors (kept for gradual migration)
        "true-black": "#000000",
        "off-black": "#080808",
        "dark-gray": "#121212",
        "darker-gray": "#1a1a1a",

        // Updated primary colors
        primary: "#A11312", // Deep Red
        "primary-dark": "#8B0F0B",
        "primary-light": "#C71E1E",

        // Updated text colors
        "text-primary": "#FFE5CC", // Cream
        "text-secondary": "#E6CC99", // Darker cream
        "text-tertiary": "#B8A082", // Even darker cream

        // Updated border colors
        "border-dark": "#A11312",
        "border-light": "#C71E1E",
      },
      boxShadow: {
        dark: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "dark-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "theme-red":
          "0 4px 6px -1px rgba(161, 19, 18, 0.5), 0 2px 4px -1px rgba(161, 19, 18, 0.06)",
        "theme-red-lg":
          "0 10px 15px -3px rgba(161, 19, 18, 0.4), 0 4px 6px -2px rgba(161, 19, 18, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
