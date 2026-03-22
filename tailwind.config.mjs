/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  corePlugins: {
    /* Avoid Preflight fighting Starlight header Select (theme/lang) SVG + native select layout */
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        ink: '#14181f',
        paper: '#fcfbf8',
        stone: '#f5f3ef',
        sand: '#efebe4',
        line: '#d8d3ca',
        line2: '#bfb8ae',
        navy: '#1f3a5f',
        /* Fluent brand primary (matches Starlight accent) */
        cobalt: '#0078d4',
        violet: '#534AB7',
        green: '#1D9E75',
        amber: '#BA7517',
        orange: '#D85A30',
        olive: '#3B6D11',
        blueSoft: '#ebf3fc',
        violetSoft: '#eeedfe',
        greenSoft: '#e8f1eb',
        amberSoft: '#f7efe0',
        orangeSoft: '#f8ece6',
        greenInk: '#2d5b3e',
        amberInk: '#8a6523',
        redSoft: '#f8e8e6',
        redInk: '#9f433b',
        /* Dark-mode tuned (cadence-derived) */
        inkDark: '#0d1116',
        inkElevated: '#13181f',
        inkSurface: '#1a2130',
        inkBorder: '#252d3a',
        inkMuted: '#c8c2ba',
        inkText: '#f0ede7',
        accentDark: '#479ef5',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(20,24,31,.05)',
        panel: '0 1px 0 rgba(20,24,31,.05), 0 18px 42px rgba(20,24,31,.06)',
        softDark: '0 10px 30px rgba(0,0,0,.25)',
        panelDark: '0 1px 0 rgba(255,255,255,.06), 0 18px 42px rgba(0,0,0,.35)',
      },
      fontFamily: {
        display: ['Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        /* Rounder defaults (cadence-style) for MDX utilities */
        none: '0',
        sm: '0.5rem',
        DEFAULT: '0.625rem',
        md: '0.875rem',
        lg: '1.125rem',
        xl: '1.375rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
        '4xl': '2.5rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
