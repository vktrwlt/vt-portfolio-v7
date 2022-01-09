module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Mulish', 'system-ui'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xld: { max: '1439px' },
      xl: '1440px',
      '2xl': '1680px',
      '3xl': '1920px',
    },
    extend: {
      colors: {
        'brand-blue': '#0856c1',
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '48px',
        xl: '96px',
        '2xl': '192px',
      },
      transformOrigin: {
        0: '0%',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
