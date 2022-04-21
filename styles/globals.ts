import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '*': { 
    boxSizing: 'border-box',
    margin: '0',
    padding: '0',
  },

  'html': {
    fontSize: '62.5%',
    scrollBehavior: 'smooth',
    height: '100%',
  },

  'body': {
    fontFamily: '$main',
    fontSize: '1.6rem',
    background: '$background',
    color: '$primary',
    cursor: 'default',
    height: '100%',
  },

  '#__next': {
    height: '100% !important',
  },

  'h1, h2, h3, h4, h5, h6,button': {
    fontFamily: '$title',
  },

  'a': {
    textDecoration: 'none',
  },

  'li': {
    listStyle: 'none',
  },
});

export default globalStyles;