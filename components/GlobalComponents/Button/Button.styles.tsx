import { styled } from '../../../stitches.config';

export const Button = styled('button', {
  border: 'none',
  width: '130px',
  height: '38px',
  fontSize: '14px',
  fontWeight: '600',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0',
  cursor: 'pointer',
  position: 'relative',
  borderRadius: '50px',
  outline: 'none',
  background: 'linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)',
  backgroundSize: '400%',
  color: '#fff',

  '&::before': {
    content: `''`,
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    zIndex: '-1',
    background: 'linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%)',
    backgroundSize: '400%',
    borderRadius: '50px',
    opacity: '0',
    transition: '.5s',
  },

  '&:hover::before': {
    filter: 'blur(15px)',
    opacity: '.8',
  },
});