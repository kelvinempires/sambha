import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // This line ensures Tailwind scans your shared UI components.. tailwind configured for [packages/ui/src]
    "../../packages/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFFFFF",
          main: "#2B2BCF", // Blue
          darkPurple: "#2A1D52",
          violet: "#C96FFF", // violet
          dark: "#2A1D52", // Darker blue for hover
        },
        gray: {
          base: "#6B7280", // Medium gray for disabled text
          500: "#616161",
          600: "#98A2B3",
          650: "#78788029",
          900: "#101828",
          950: "#070D17",
        },
        white: {
          base: "#F3F4F6", // Light gray for disabled background
          900: "#F9F9F9",
          800: "#EBECEE",
        },
        black: {
          400: "#52575C",
          100: "#000000",
        },
        error: {
          50: "#DC2626",
        },
      },
      sidebar: "#2A1D52",
      backgroundImage: {
        "gradient-primary": "linear-gradient(to bottom,  #C96FFF, #2B2BCF)",
        gradientText: "linear-gradient(to bottom, #C96FFF, #2B2BCF)",
      },
      borderImage: {
        "gradient-primary": "linear-gradient(to right, #C96FFF, #2B2BCF)",
      },
    },
  },
  plugins: [],
};
export default config;
