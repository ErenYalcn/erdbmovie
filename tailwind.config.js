module.exports = {
  mode:'jit',
  purge: ["./src/**/*.{html,js}"],

  content: [],
  theme: {
    extend: {

      colors: {
        fullbg: '#f9fafc',
        mgreen:'#50b83c',
        mblack:'#171717',
        blacksurface:'#242424',

      },
      boxShadow: {
        '3xl' : '0px 0px 12px rgba(0, 0, 0, 0.25);'
      }

    },
  },
  plugins: [],
}
