/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '3/2': '3 / 2',
      },
      colors: {
        primary: {

          '30': '#004D64',//dark-primary-container
          '40': '#006783',//light-primary
          '80': '#64D3FF',//dark-primary
          '90': '#BDE9FF',//light/primary-container
          '50': '#e8fffe',

          '100': '#c5fffe',
          '200': '#92fffc',
          '300': '#47fffa',
          '400': '#00fbff',
          '500': '#00ddff',
          '600': '#00aed7',
          '700': '#0088ac',
          '800': '#006783',//main
          '900': '#055974',
        },
        secondary: {

          '10': '#081E27',//light-on-secondary-container
          '30': '#354A53',//dark-secondary-container
          '50': '#f5f8fa',
          '90': '#D0E6F2',//light-secondary-container dark-on-secondary-container
          '100': '#eaf0f4',
          '200': '#d1dee6',
          '300': '#b4cad6',//main
          '400': '#7ba1b5',
          '500': '#5a869d',
          '600': '#466c83',
          '700': '#3a586a',
          '800': '#334b59',
          '900': '#2e404c',
        },
        tertiary: {
          '10': '#410003',//light-on-tertiary-container dark-tertiary-container
          '30': '#7E2A27',//dark-on-tertiary-container
          '50': '#fef3f2',
          '90': '#FFDAD6',//light-tertiary-container
          '100': '#ffe3e1',
          '200': '#ffccc8',
          '300': '#ffb3ad',//main
          '400': '#fd776c',
          '500': '#f54b3e',
          '600': '#e22e20',
          '700': '#be2317',
          '800': '#9d2117',
          '900': '#82221a',
          '1000':'#410003'
        },

        error: {
          '40': '#BA1A1A',//light-error
          '80': '#FFB4AB',//dark-error
        },

        neutral: {
          '10': '#191C1E',//light-on-surface  dark-surface
          '30': '#40484C',//light-on-surface-variant
          '50': '#757779',//light-outline
          '60': '#8F9193',//dark-outline
          '80': '#C5C7C8',//dark-on-surface-variant

          '90': '#E1E2E4',//dark-on-surface
          '99': '#FAFCFF',//light-surface
          '100': '#ececed',
          '200': '#dededf',
          '300': '#c7c8c9',
          '400': '#abadaf',
          '500': '#8f9193',//main
          '600': '#86878a',
          '700': '#797a7c',
          '800': '#656668',
          '900': '#535355',
        },
        corecolor: {
          '50': '#fff1f1',
          '100': '#ffe1e1',
          '200': '#ffc7c7',
          '300': '#ffa0a0',
          '400': '#ff5252',//main
          '500': '#f83b3b',
          '600': '#e51d1d',
          '700': '#c11414',
          '800': '#a01414',
          '900': '#841818',
        },
        surface: {
          'light': '#FBFCFE',
          'dark': '#191C1E'
        }
      }
    },
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

      '3xl': '1600px',
    }
  },
  plugins: [],
}
