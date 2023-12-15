module.exports = {
  content: [
    "./layouts/**/*.html",
    "./content/**/*.html"
  ],
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              color: '#fff',
              '&:hover': {
                color: '#ff0000',
              },
            },
            h1: {
                color: '#fff',
            },
            h2: {
              color: '#fff',
            },
            h3: {
              color: '#fff',
            },
            h4: {
              color: '#fff',
            },
            h5: {
              color: '#fff',
            },
            h6: {
              color: '#fff',
            },
            strong: {
                color: '#fff',
            },
            blockquote: {
                color: '#fff',
            },
            code: {
                color: '#fff',
                "border-radius": "0px",
            },
            th: {
                color: '#fff',
            },
            input: {
              '&:checked': {
                color: '#ff0000',
              }
            },
            "[type='checkbox'], [type='radio']": {
              color: '#ff0000',
            },

            pre: {
                color: '#fff',
                backgroundColor: '#0e0e0e',
                fontWeight: "400",
                "border-radius": "0rem"
            },
            "pre code::before": {
                "padding-left": "unset"
            },
            "pre code::after": {
              "padding-right": "unset"
            },
            "code::before": {
              content: '""',
              "padding-left": "0.25rem"
            },
            "code::after": {
              content: '""',
              "padding-right": "0.25rem"
            }

          },
        },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        darkgray: '#0e0e0e',
        red: {
          DEFAULT: '#ff0000',
          0: '#ff0000',
          50: '#fff5f5',
          100: '#fed7d7',
          200: '#feb2b2',
          300: '#fc8181',
          400: '#f56565',
          500: '#e53e3e',
          600: '#c53030',
          700: '#9b2c2c',
          800: '#822727',
          900: '#63171b',
        },
        code: {
          green: "var(--color-code-green)",
          yellow: "var(--color-code-yellow)",
          purple: "var(--color-code-purple)",
          red: "var(--color-code-red)",
          blue: "var(--color-code-blue)",
          white: "var(--color-code-white)",
        },
      },
  
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ]
}
