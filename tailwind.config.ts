import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: colors.slate[900],
          light: colors.slate[700],
        },
        primary: {
          DEFAULT: colors.green[700],
          light: colors.green[300],
        },
        type: {
          DEFAULT: colors.slate[100],
          dark: colors.slate[900],
        }
      },
    },
  },
  plugins: [],
};
export default config;
