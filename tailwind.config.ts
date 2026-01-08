// tailwind.config.ts
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
        // Based on TofHost UI Design
        tof: {
          blue: {
            DEFAULT: "#5B9BFF", // The Hero Section Blue
            light: "#E3F0FF",   // Light blue background accents
            dark: "#2563EB",    // Hover states
          },
          green: {
            DEFAULT: "#4ADE80", // "Garments" Card & Verified Text
            dark: "#16A34A",    // Button Hover
          },
          navy: {
            DEFAULT: "#0F172A", // Footer Background
            light: "#1E293B",   // Dropdowns
          },
          gold: "#F59E0B",      // "Trusted Community" Badge
        },
      },
      fontFamily: {
      sans: ['var(--font-manrope)'],      // Body text
      heading: ['var(--font-vastago)'],   // Headings (Hero, Titles)
    },
      backgroundImage: {
        'hero-gradient': "linear-gradient(to right, #ffffff 0%, #E3F0FF 100%)", // Subtle fade if needed
      }
    },
  },
  plugins: [],
};
export default config;