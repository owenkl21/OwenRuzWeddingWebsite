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
        blush: '#F6E8EA',
        rose: '#E8B4BC',
        evergreen: '#3D5A40',
        charcoal: '#2A2A2A',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern':
          'linear-gradient(135deg, rgba(246, 232, 234, 0.95) 0%, rgba(232, 180, 188, 0.78) 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
