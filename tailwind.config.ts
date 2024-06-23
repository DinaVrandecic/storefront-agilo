import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mauve: "#D1ADFF",
        violet: "#8F58EE",
        purple: "#A35CFF",
        gray: "#D6D5D8",
        lightgray: "#F2F2F2",
        indigo: "#400F95",
      },
    },
  },
  plugins: [],
};
export default config;
