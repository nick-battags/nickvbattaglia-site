/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0C10',
        surface: '#13141A',
        accent: '#8B93CC',
        'accent-dim': 'rgba(139,147,204,0.12)',
        muted: '#555568',
        text: '#E8E9F0',
        'text-dim': '#9899A8',
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'noise': "url('/noise.svg')",
      },
    },
  },
  plugins: [],
};
