import { createStitches } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  theme: {
    fonts: {
      title: 'Poppins',
      main: 'Titillium Web, sans-serif',
    },
    colors: {
      primary: 'hsl(204,23.8%,95.9%)',
      background: 'rgb(11, 0, 26)',
      accent: 'hsl(34.9,98.6%,72.9%)',
      button: 'hsl(205.1,100%,36.1%)',
    },
    fontSizes: {
      1: '13px',
      2: '15px',
      3: '17px',
    },
    media: {
      xs: '@media (max-width: 450px)',
      sm: '@media (max-width: 768px)',
      md: '@media (max-width: 1024px)',
      lg: '@media (max-width: 1280px)',
      xl: '@media (max-width: 1600px)',
    }
  },
});