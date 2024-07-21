import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      'white': 'white',
      'cosmicColor': 'rgba(150, 26, 136, 1)', 
      'classicColor': 'rgba(25, 25, 120, 1)', 
      'atomicColor': 'rgba(0, 174, 177, 1)', 
      'cosmic-lottery': 'rgba(238, 225, 240, 1)',
      'classic-lottery': 'rgba(233, 238, 246, 1)',
      'atomic-lottery': 'rgba(234, 249, 247, 1)'

    },
  },
  plugins: [],
};
export default config;
