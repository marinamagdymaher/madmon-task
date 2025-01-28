/** @type {import('tailwindcss').Config} */
// box-shadow: 0px 1px 13px 0px #0000000D;

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      listStyleType: {
        circle: "circle",
      },
      screens: {
        xs: "480px", // Add custom breakpoint
        "3xl": "1920px", // Add larger breakpoint
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      // grey: "#F9F9F933",
      light: "#FAFAFA",
      secondary: "#F5F5F5",
      red: { 100: " #DB4444", 200: "#DB4444", 500: "#F20000" },
      yellow: "#F2DB00",
      blue: { 500: "#6666FF", 600: "#0512F5" },
      grey: {
        50: "#0000000A",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#F9F9F933",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
      green: {
        500: "#22c55e",
      },
    },
    grayscale: {
      50: "50%",
    },
  },

  // eslint-disable-next-line no-undef
  plugins: [require("tailwind-scrollbar-hide")],
};
