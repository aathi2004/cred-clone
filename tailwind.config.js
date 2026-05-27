/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Syne"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cred: {
          black: '#060608',
          dark: '#0c0c10',
          card: '#111116',
          border: '#1e1e26',
          muted: '#2a2a35',
          gray: '#7a7a8c',
          silver: '#b0b0c0',
          white: '#f0f0f8',
          blue: '#3b7cff',
          'blue-glow': '#1a4fff',
          purple: '#8b5cf6',
          'purple-dark': '#6d28d9',
          cyan: '#06d6d6',
          gold: '#f5c518',
        },
      },
      backgroundImage: {
        'glow-blue': 'radial-gradient(circle, rgba(59,124,255,0.15) 0%, transparent 70%)',
        'glow-purple': 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)',
        'glow-cyan': 'radial-gradient(circle, rgba(6,214,214,0.1) 0%, transparent 70%)',
        'hero-gradient': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,124,255,0.2) 0%, transparent 70%)',
        'card-shimmer': 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.03) 100%)',
        'neopop-blue': 'linear-gradient(135deg, #3b7cff, #1a4fff)',
        'neopop-purple': 'linear-gradient(135deg, #8b5cf6, #6d28d9)',
        'border-gradient': 'linear-gradient(135deg, rgba(59,124,255,0.4), rgba(139,92,246,0.4), rgba(6,214,214,0.2))',
      },
      boxShadow: {
        'glow-blue': '0 0 40px rgba(59,124,255,0.25), 0 0 80px rgba(59,124,255,0.1)',
        'glow-purple': '0 0 40px rgba(139,92,246,0.25)',
        'neopop': '4px 4px 0px rgba(59,124,255,0.8)',
        'card': '0 4px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 8px 60px rgba(0,0,0,0.6), 0 0 40px rgba(59,124,255,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'marquee': 'marquee 30s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'border-dance': 'borderDance 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        borderDance: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
