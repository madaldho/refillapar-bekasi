/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,astro}", // Add the necessary paths
  ],
  theme: {
    extend: {
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.6)",
        xl: "4px 4px 8px rgba(0, 0, 0, 0.7)",
      },
      // Adding the keyframes and animations for the slide-left animation
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left-infinite": "slide-left 10s linear infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-md': {
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        },
        '.text-shadow-lg': {
          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.6)',
        },
        '.text-shadow-xl': {
          textShadow: '4px 4px 8px rgba(0, 0, 0, 0.7)',
        },
      });
    },],
};
