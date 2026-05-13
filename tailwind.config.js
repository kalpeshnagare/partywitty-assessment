/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        app: {
          bg: '#EDEBE8',
          dark: '#1A1A1A',
          muted: '#888888',
          border: 'rgba(0,0,0,0.06)',
        },
        pw: {
          pink: '#FF3CAC',
          purple: '#6C63FF',
          'purple-light': '#7C73FF',
          'purple-dark': '#5B52E0',
          green: '#22C55E',
          'green-light': '#E6F8EE',
          'green-text': '#2E9C5C',
          yellow: '#FBBF24',
          red: '#FF5A5A',
        },
        'dim-grey': {
          50: 'var(--color-dim-grey-50)',
          100: 'var(--color-dim-grey-100)',
          200: 'var(--color-dim-grey-200)',
          300: 'var(--color-dim-grey-300)',
          400: 'var(--color-dim-grey-400)',
          500: 'var(--color-dim-grey-500)',
          600: 'var(--color-dim-grey-600)',
          700: 'var(--color-dim-grey-700)',
          800: 'var(--color-dim-grey-800)',
          900: 'var(--color-dim-grey-900)',
          950: 'var(--color-dim-grey-950)',
        },
        'carbon-black': {
          50: 'var(--color-carbon-black-50)',
          100: 'var(--color-carbon-black-100)',
          200: 'var(--color-carbon-black-200)',
          300: 'var(--color-carbon-black-300)',
          400: 'var(--color-carbon-black-400)',
          500: 'var(--color-carbon-black-500)',
          600: 'var(--color-carbon-black-600)',
          700: 'var(--color-carbon-black-700)',
          800: 'var(--color-carbon-black-800)',
          900: 'var(--color-carbon-black-900)',
          950: 'var(--color-carbon-black-950)',
        },
        'white-smoke': {
          50: 'var(--color-white-smoke-50)',
          100: 'var(--color-white-smoke-100)',
          200: 'var(--color-white-smoke-200)',
          300: 'var(--color-white-smoke-300)',
          400: 'var(--color-white-smoke-400)',
          500: 'var(--color-white-smoke-500)',
          600: 'var(--color-white-smoke-600)',
          700: 'var(--color-white-smoke-700)',
          800: 'var(--color-white-smoke-800)',
          900: 'var(--color-white-smoke-900)',
          950: 'var(--color-white-smoke-950)',
        },
        'soft-linen': {
          50: 'var(--color-soft-linen-50)',
          100: 'var(--color-soft-linen-100)',
          200: 'var(--color-soft-linen-200)',
          300: 'var(--color-soft-linen-300)',
          400: 'var(--color-soft-linen-400)',
          500: 'var(--color-soft-linen-500)',
          600: 'var(--color-soft-linen-600)',
          700: 'var(--color-soft-linen-700)',
          800: 'var(--color-soft-linen-800)',
          900: 'var(--color-soft-linen-900)',
          950: 'var(--color-soft-linen-950)',
        },
        lavender: {
          50: 'var(--color-lavender-50)',
          100: 'var(--color-lavender-100)',
          200: 'var(--color-lavender-200)',
          300: 'var(--color-lavender-300)',
          400: 'var(--color-lavender-400)',
          500: 'var(--color-lavender-500)',
          600: 'var(--color-lavender-600)',
          700: 'var(--color-lavender-700)',
          800: 'var(--color-lavender-800)',
          900: 'var(--color-lavender-900)',
          950: 'var(--color-lavender-950)',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
      boxShadow: {
        'pw': '0 2px 8px rgba(0,0,0,0.06)',
        'pw-md': '0 4px 20px rgba(0,0,0,0.08)',
        'pw-lg': '0 8px 40px rgba(0,0,0,0.12)',
        'pw-purple': '0 10px 30px -10px rgba(108,99,255,0.6)',
        'pw-pink': '0 10px 30px -8px rgba(255,60,172,0.55)',
        'pw-pink-lg': '0 14px 36px -6px rgba(255,60,172,0.65)',
      },
      animation: {
        'fade-up': 'fadeUp 0.25s ease forwards',
        'scan-rotate': 'scanRotate 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-in': 'slideIn 0.3s ease-out forwards',
        'scale-in': 'scaleIn 0.2s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scanRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        },
        '.text-pw-gradient': {
          'background': 'linear-gradient(135deg, #FF3CAC 0%, #FF9A3C 100%)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          'color': 'transparent',
        },
        '.bg-pw-gradient': {
          'background': 'linear-gradient(135deg, #FF3CAC 0%, #FF6B6B 50%, #FF9A3C 100%)',
        },
        '.bg-purple-gradient': {
          'background': 'linear-gradient(135deg, #7C73FF 0%, #6C63FF 100%)',
        },
      })
    }
  ],
}
