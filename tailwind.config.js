/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#659a68", 
      },
      fontFamily: {
        tiroBangla: ['"Tiro Bangla"', ...fontFamily.serif],
        hindSiliguri: ['"Hind Siliguri"', ...fontFamily.sans],
        notoSansBengali: ['"Noto Sans Bengali"', ...fontFamily.sans],
        poppins: ['Poppins', ...fontFamily.sans],
        naskhArabic: ['"Noto Naskh Arabic"', ...fontFamily.sans],
      },
      animation: {
        fadeInSlow: 'fadeIn 2s ease-in-out',
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    daisyui,
  ],
}
