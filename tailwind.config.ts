import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4ECDC4',
          light: '#7EDCD6',
          dark: '#3B9B94',
        },
        secondary: {
          DEFAULT: '#FF6B6B',
          light: '#FF9B9B',
          dark: '#CC5555',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #FF6B6B, #4ECDC4)',
      },
    },
  },
  plugins: [],
};

export default config;
