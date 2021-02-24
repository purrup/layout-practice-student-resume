module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#556ADC',
        secondary: '#EEF0FB'
      },
      fontFamily: {
        body: ['Poppins']
      },
      backgroundImage: theme => ({
        'desk': "url('../desktop-backgroundimg.jpg')",
        'profile': "url('../profile.jpg')"
       }),
      width: {
        '10vw': '10vw',
      },
      height: {
        '10vw': '10vw',
      }
    },
    letterSpacing: {
      wide: '.1em',
      wider: '.15em',
      widest: '.25em'
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
     minWidth: {
      '10vw': '10vw',
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
