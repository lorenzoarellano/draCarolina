import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
    './app.config.{js,ts}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#01678d',
          50: '#f2fafe',
          100: '#e5f3fc',
          200: '#c5e2f7',
          300: '#92caf0',
          400: '#58ade5',
          500: '#3291d3',
          600: '#2174b8',
          700: '#01678d', // Base Color (Azul Pizarra)
          800: '#194a73',
          900: '#193f60',
          950: '#10283f'
        },
        secondary: {
          DEFAULT: '#f1574a',
          50: '#fef6f5',
          100: '#fdece9',
          200: '#fbdad3',
          300: '#f8beb3',
          400: '#f59584',
          500: '#f1574a', // Base Color (Acento/Coral)
          600: '#de4538',
          700: '#ba3428',
          800: '#9a2c22',
          900: '#802820',
          950: '#46110d'
        },
        // Paleta de toques femeninos y cálidos sugeridos
        accent: {
          light: '#fffbf9',  // Crema de fondo suave y empático
          warm: '#fbf5f2',   // Acento de fondo sutil
          blush: '#f3e8e2',  // Rosa empolvado para bordes y detalles femeninos
          gold: '#dfb26c'    // Acento dorado suave para elegancia clínica
        }
      },
      fontFamily: {
        sans: ['Outfit', ...defaultTheme.fontFamily.sans],
        display: ['Montserrat', ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        premium: '0 10px 30px -5px rgba(1, 103, 141, 0.08), 0 5px 15px -5px rgba(0, 0, 0, 0.03)',
        'premium-hover': '0 20px 40px -5px rgba(1, 103, 141, 0.15), 0 10px 20px -5px rgba(231, 54, 48, 0.05)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}
