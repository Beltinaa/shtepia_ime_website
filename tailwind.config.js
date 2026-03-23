/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        secondary: 'var(--secondary)',
        accent: 'var(--accent)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        white: 'var(--white)',
      },
      fontFamily: {
        body: ['"DM Sans"', 'Inter', '-apple-system', 'sans-serif'],
        display: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 16px 30px -18px rgba(26, 26, 26, 0.16)',
        lift: '0 24px 44px -24px rgba(26, 26, 26, 0.18)',
      },
    },
  },
  plugins: [],
};
