/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#2F4F4F", // Dark Slate Gray (corrected from Dark Slate Blue)
        "secondary-light": "#B0C4DE", // Light Steel Blue
        "accent-coral": "#FF7F50", // Coral
        "bg-light": "#F8F8F8",
        "bg-medium": "#E5E5E5",
        "text-main": "#333333",
        "text-subtle": "#555555",
      },
      fontFamily: {
        sans: ["Open Sans", "sans-serif"], // Default body font
        heading: ["Montserrat", "sans-serif"], // Heading font
      },
    },
  },
  plugins: [],
};
