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
          main: "#2B2BCF",
          darkPurple: "#2A1D52",
          violet: "#C96FFF",
          dark: "#2A1D52",
        },
        blue: {
          400: "#162844",
        },
        green: {
          base: "#30D158",
        },
        gray: {
          base: "#6B7280",
          light: "#F3F4F6",
          dark: "#667185",
          200: "#E4E7EC",
        },
        error: {
          base: "#DC2626",
          dark: "#940803",
        },
        grey: {
          light: "#F3F3F3",
          base: "#98A2B3",
          100: "#F2F4F5",
          200: "#F0F2F5",
          400: "#52575C",
          900: "#101828",
        },
        dark: {
          base: "#090A0A",
        },

        neutral: {
          base: "#070D17",
          700: "#F0F2F5",
          100: "#EBECEE",
          300: "#F2F2F2",
          600: "#F9F9F9",
        },
      },
      sidebar: "#2A1D52",
      backgroundImage: {
        "gradient-primary": "linear-gradient(to bottom,  #C96FFF, #2B2BCF)",
        gradientText: "linear-gradient(to bottom, #C96FFF, #2B2BCF)",
      },
    },
  },
  plugins: [],
};
export default config;
