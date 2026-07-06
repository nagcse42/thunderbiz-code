/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          bright: '#F6D365',
          hover: '#FFD700',
          dark: '#A67C00',
          muted: 'rgba(212,175,55,0.15)'
        },
        dark: {
          900: '#050505',
          800: '#0B0B0B',
          700: '#111111',
          600: '#161616',
          500: '#1A1A1A'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'serif'],
        cinzel: ['"DM Mono"', 'monospace']
      },
      animation: {
        'shimmer': 'shimmer 3.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-dot': 'pulseDot 1.8s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-rev': 'spinRev 12s linear infinite',
        'scan': 'scan 2.5s ease-in-out infinite',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'rot-border': 'rotBorder 4s linear infinite',
        'step-pulse': 'stepPulse 2.5s ease-in-out infinite',
        'count-up': 'countUp 0.6s ease forwards'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.3', transform: 'scale(0.8)' }
        },
        scan: {
          '0%': { left: '-100%' },
          '100%': { left: '200%' }
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(212,175,55,0.12)' },
          '50%': { borderColor: 'rgba(212,175,55,0.5)' }
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        },
        rotBorder: {
          to: { transform: 'rotate(360deg)' }
        },
        spinRev: {
          to: { transform: 'rotate(-360deg)' }
        },
        stepPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0)' },
          '50%': { boxShadow: '0 0 0 8px rgba(212,175,55,0.12)' }
        },
        countUp: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backgroundSize: {
        '200': '200% auto'
      }
    }
  },
  plugins: []
}
