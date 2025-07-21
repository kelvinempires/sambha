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
        },
        white: {
          base: "#F3F4F6", // Light gray for disabled background
        },
      },
       fontFamily: {
        fractul: ["Fractul", "sans-serif"],
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
