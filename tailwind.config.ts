import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        csm: "400px",
        xsm: "490px",
        smd: "620px",
      },
      colors: {
        primary: "#023047",
        white: "#fff",
        secondary: "#f86011",
        tertiary: "#EA0519",
        grey: "#F4F7FF",
        black: "#000",
        hover: "#be1622",
        heading: "#170103",
        body: "#575757",
      },
      fontSize: {
        headerLg: "56px",
      },
    },
  },
  plugins: [],
};
export default config;
