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
        // Palet warna hitam
        "true-black": "#000000",
        "off-black": "#080808",
        "dark-gray": "#121212",
        "darker-gray": "#1a1a1a",

        // Aksen warna
        primary: "#8b5cf6", // Ungu neon
        "primary-dark": "#6d28d9",
        "primary-light": "#a78bfa",

        // Warna teks
        "text-primary": "#ffffff",
        "text-secondary": "#a0a0a0",
        "text-tertiary": "#666666",

        // Border
        "border-dark": "#333333",
      },
      boxShadow: {
        dark: "0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "dark-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.7), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};

export default config;
