/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  theme: {
    extend: {
      colors: {
        'lab-bg':      '#0c0c0c',
        'lab-surface': '#141414',
        'lab-edge':    '#1e1e1e',
        'lab-border':  '#2a2a2a',
        'lab-muted':   '#64748b',
        'lab-text':    '#e2e8f0',
        'lab-orange':  '#16f9a2',
        'lab-orange2': '#ea0cb3',
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Consolas', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
};
