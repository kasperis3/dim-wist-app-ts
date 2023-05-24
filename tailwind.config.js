/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      flexBasis: {
        "1/10": "10%",
        "1/9": "11.1111111%",
        "1/8": "12.5%",
        "1/7": "14.2857143%",
        "1/6": "16.6666%",
      },
    },
  },
  plugins: [],
};
