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
    extend: {
      margin: {
        c2xl: '8rem',
        cxl: '6.5rem',
        clg: '4rem',
        cmd: '3rem',
        csm: '2rem',
        cxs: '1.5rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
