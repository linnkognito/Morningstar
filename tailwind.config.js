// tailwind.config.js
const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        offblack: 'var(--color-offblack)',
        pearl: 'var(--color-pearl)',
        aura: 'var(--color-aura)',
        mint: 'var(--color-mint)',
        zest: 'var(--color-zest)',
        ember: 'var(--color-ember)',
        sea: 'var(--color-sea)',
      },
    },
  },
  safelist: [
    'bg-blue-200',
    'bg-pearl',
    'bg-orange-500',
    'bg-offblack',
    'bg-blue-700',
    'bg-blue-400',
    'bg-cyan-600',
    'bg-teal-600',
    'bg-stone-600',
    'bg-purple-400',
    'bg-lime-300',
    'bg-orange-200',
    'bg-pink-400',
    'bg-slate-300',
    'bg-rose-500',
    'bg-stone-400',
    'bg-stone-800',
    'bg-stone-100',
    'bg-slate-400',
    'bg-slate-200',
    'bg-cyan-200',
    'bg-rose-200',
  ],
  plugins: [],
};

export default config;
