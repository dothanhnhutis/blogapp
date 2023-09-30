import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },
      backgroundImage: {
        Hero: "url('/bg.jpg')",
        section1: "url('/images/bg_gioithieu.jpg')",
        section2: "url('/images/pexels-kinkate.jpeg')",
      },
    },
  },
  plugins: [],
};
export default config;
