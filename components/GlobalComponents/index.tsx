import { styled } from '@stitches/react';

export const LinkContainer = styled('div', {
  transition: '0.3s ease',
  justifyContent: 'center',
  borderRadius: '50px',
  padding: '8px',

  '&:hover': {
    backgroundColor: '#212d45',
    transform: 'scale(1.2)',
    cursor: 'pointer',
  },
});

export const LinkIconImg = styled('div', {
  display: 'flex',
});