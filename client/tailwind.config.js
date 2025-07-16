module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Add more custom colors as needed
      },
    },
  },
  plugins: [],
};
