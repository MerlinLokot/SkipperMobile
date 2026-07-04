/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  presets: [require("nativewind/preset")],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        navy: "#0D233B",
        brand: { DEFAULT: "#2563EB", dark: "#1D4ED8", light: "#60A5FA", tint: "#E8F0FE" },
        muted: "#64748B",
      },
    },
  },
  plugins: [],
};
