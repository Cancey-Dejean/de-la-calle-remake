/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        careerCurve: "url('/images/co-curve.svg')",
        timelineDots: "url('/images/timeline-dots.svg')",
      },
      colors: {
        "color-primary": "#f9423a",
        "color-cream": "#fff0e0",
      },
      fontFamily: {
        body: ["Manrope", "sans-serif"],
      },
      maxWidth: {},
      blur: {},
      boxShadow: {
        realistic:
          "rgb(0 0 0 / 0%) 0px 1.67332px 1.67332px 0px, rgb(0 0 0 / 1%) 0px 3.98421px 3.98421px 0px, rgb(0 0 0 / 2%) 0px 7.25932px 7.25932px 0px, rgb(0 0 0 / 3%) 0px 12.0684px 12.0684px 0px, rgb(0 0 0 / 5%) 0px 19.5005px 19.5005px 0px, rgb(0 0 0 / 8%) 0px 31.9014px 31.9014px 0px, rgb(0 0 0 / 14%) 0px 54.9604px 54.9604px 0px, rgb(0 0 0 / 25%) 0px 100px 100px 0px",
      },
      backgroundPosition: {},
      backgroundSize: {},
      flex: {},
      screens: {
        sm: "478px",
        // => @media (min-width: 478px) { ... }
        md: "767px",
        // => @media (min-width: 992px) { ... }
        lg: "992px",
        // => @media (min-width: 992px) { ... }
        xl: "1199px",
        // => @media (min-width: 1199px) { ... }
        "2xl": "1440px",
        // => @media (min-width: 1440px) { ... }
        "3xl": "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
}
