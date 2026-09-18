/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        funngro: {
          bg: "#06120a",
          surface: "#091a0e",
          card: "#0c2014",
          cardHover: "#102a1a",
          border: "#173b22",
          borderBright: "#255a36",
          neon: "#00e676",
          neonBright: "#00ffa3",
          accent: "#2ed573",
          muted: "#9ec4aa",
          subtle: "#84a990"
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      boxShadow: {
        'neon-glow': '0 0 25px rgba(0, 230, 118, 0.25)',
        'neon-glow-lg': '0 0 40px rgba(0, 255, 163, 0.35)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
      },
      backgroundImage: {
        'radial-gradient-emerald': 'radial-gradient(circle at 50% 0%, rgba(0, 230, 118, 0.12) 0%, rgba(6, 18, 10, 0) 70%)',
        'radial-hero': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 230, 118, 0.18), rgba(6, 18, 10, 1))'
      }
    },
  },
  plugins: [],
}
