/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}"
  ],
  safelist: ["active"],
  theme: {
    fontFamily: {
      header: ["Raleway", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      primary: "#5540af",
      secondary: "#252426",
      white: "#ffffff",
      black: "#000000",
      yellow: "#f9e71c",
      lila: "#e6e5ec",
      "grey-10": "#6c6b6d",
      "grey-20": "#7c7c7c",
      "grey-30": "#919091",
      "grey-40": "#929293",
      "grey-50": "#f4f3f8",
      "grey-60": "#edebf6",
      "grey-70": "#d8d8d8",
      "hero-gradient-from": "rgba(85, 64, 174, 0.95)",
      "hero-gradient-to": "rgba(65, 47, 144, 0.93)",
      "blog-gradient-from": "#8f9098",
      "blog-gradient-to": "#222222",
    },
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      boxShadow: {
        default: "0 2px 18px rgba(0, 0, 0, 0.06)",
        md: "0 -3px 36px rgba(0, 0, 0, 0.12)",
      },
      animation: {
        'blob': 'blob 7s infinite',
        'float': 'float 3s ease-in-out infinite',
        'text-gradient': 'text-gradient 3s linear infinite',
        'cat-run': 'cat-run 5s linear forwards',
        'shake': 'shake 0.5s cubic-bezier(.36,.07,.19,.97) both',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'text-gradient': {
          'to': { 'background-position': '200% center' },
        },
        'cat-run': {
          '0%': { transform: 'translateX(-100%) scale(0.5)', opacity: '0' },
          '20%': { opacity: '1', transform: 'translateX(0) scale(1.2)' },
          '80%': { opacity: '1', transform: 'translateX(0) scale(1.2)' },
          '100%': { transform: 'scale(0.8)', opacity: '0' },
        },
        shake: {
          '10%, 90%': { transform: 'translate3d(-2px, 0, 0)' },
          '20%, 80%': { transform: 'translate3d(4px, 0, 0)' },
          '30%, 50%, 70%': { transform: 'translate3d(-6px, 0, 0)' },
          '40%, 60%': { transform: 'translate3d(6px, 0, 0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'scale(0.5) translateY(40px)' },
          '100%': { opacity: '1', transform: 'scale(1) translateY(0)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      // Moví spacing, zIndex e inset aquí adentro para no romper las clases default de Tailwind
      spacing: {
        13: "3.25rem", 15: "3.75rem", 17: "4.25rem", 18: "4.5rem", 19: "4.75rem",
        42: "10.5rem", 76: "19rem", 84: "21rem", 88: "22rem", 92: "23rem",
        100: "25rem", 104: "26rem", 108: "27rem", 112: "28rem", 116: "29rem",
        120: "30rem", 124: "31rem", 128: "32rem", 132: "33rem", 136: "34rem",
        140: "35rem", 144: "36rem", 148: "37rem", 152: "38rem", 156: "39rem",
        160: "40rem", 164: "41rem", 168: "42rem", 172: "43rem", 176: "44rem",
        180: "45rem", 184: "46rem", 188: "47rem", 190: "48rem", 194: "49rem",
        200: "50rem", 204: "51rem",
      },
      zIndex: {
        "-1": "-1",
        60: "60",
        70: "70",
      },
      inset: {
        "2/5": "40%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};