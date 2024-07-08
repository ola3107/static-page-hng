/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '600': '600px',
        '409': '409px',
        '360': '360px',
        '135': '135px',
        '90': '90px',
        '252': '252px',
        '79': '79px',
        '103': '103px',
      },
      height:{
        '150': '150px',
        '115': '115px'
      },
      borderColor: {
        customBrown: '#71360C',
      },
      backgroundColor:{
        lightCustombrown: '#FEF6F1',
        customBrown: '#71360C',
        hover: '#9A5B30'
      },
      textColor:{
        customBrown: '#71360C'
      },
      fontSize: {
        small: '10px',
        vs: '7px',
        vvs: '5px',

      },
      borderRadius: {
        xxl: '130px'
      }
    },
  },
  plugins: [],
}

