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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#8b7355",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#fafaf9",
          foreground: "#44403c",
        },
        accent: {
          DEFAULT: "#a3967a",
          foreground: "#ffffff",
        },
        muted: {
          DEFAULT: "#f5f2ed",
          foreground: "#8e8e93",
        },
        destructive: {
          DEFAULT: "#dc2626",
          foreground: "#ffffff",
        },
        border: "#e7e5e4",
        input: "#fafaf9",
        ring: "#8b7355",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#2c2c2c",
        },
        popover: {
          DEFAULT: "#ffffff",
          foreground: "#2c2c2c",
        },
        neutral: {
          50: "#fcfcfc",
          100: "#f9f7f4",
          200: "#f5f2ed",
          300: "#f0ede7",
          400: "#d4d4d8",
          500: "#8e8e93",
          600: "#71717a",
          700: "#52525b",
          800: "#27272a",
          900: "#1c1c1e",
        },
        warm: {
          cream: "#fafaf9",
          butter: "#f7f3f0",
          wheat: "#f1ede8",
          honey: "#d6c7b3",
          caramel: "#a3967a",
          coffee: "#8b7355",
          cocoa: "#78694c",
          cinnamon: "#9c8866",
        },
        neutral: {
          50: "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-in": "slideIn 0.6s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        slideIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;