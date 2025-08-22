/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        // Update the 'sans' font to use the Satoshi variable
        sans: ["var(--font-satoshi)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
