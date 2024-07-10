import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      mont: ['Montserrat', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      system: ['system-ui', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
