/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // "Law library" editorial palette — cream paper + burgundy accent
        bg: '#F5EDDC',              // cream paper, main page
        'bg-raised': '#FBF7EE',     // lighter cream, raised surfaces
        surface: '#FAF6EE',         // card surfaces (was '#13141A')
        accent: '#722F37',          // deep burgundy (was '#8B93CC')
        'accent-strong': '#5C1F26', // pressed state
        'accent-soft': '#A55561',
        'accent-dim': 'rgba(114, 47, 55, 0.10)',
        muted: '#8B7F70',           // warm gray captions
        text: '#1F1B17',            // warm charcoal primary
        'text-dim': '#5C5247',      // secondary text
        border: '#D9CFC0',          // warm tan dividers
        'border-strong': '#B5A893',
        danger: '#B33A3A',          // brick red — distinct from accent
        warn: '#B57F26',            // ochre
        ok: '#5C7A56',              // muted sage
      },
      fontFamily: {
        serif: ['Newsreader', 'Source Serif Pro', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        'tight-er': '-0.018em',
        'tight-md': '-0.012em',
        'editorial': '0.015em',
      },
      backgroundImage: {
        'noise': "url('/noise.svg')",
      },
      boxShadow: {
        'paper': '0 4px 20px rgba(31, 27, 23, 0.06)',
        'paper-lg': '0 12px 40px rgba(31, 27, 23, 0.10)',
      },
    },
  },
  plugins: [],
};
