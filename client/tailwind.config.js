/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
        },
        border: '#e5e7eb',         // for border-border
        background: '#f9fafb',     // for bg-background
        foreground: '#111827',     // for text-foreground
      },
    },
  },
  plugins: [],
}
