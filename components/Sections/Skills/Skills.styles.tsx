import { styled } from '../../../stitches.config';

export const ImageContainer = styled('div', {
  textAlign: 'center',
  backgroundImage: 'radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%)',
  width: '100%',
  padding: '60px',
  marginTop: '48px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const MainImage = styled('img', {
  width: '100%',
});

export const List = styled('ul', {
  listStyleType: 'none',
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '40px',
  marginBottom: '4rem',
});

export const ListContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '18px',
});

export const ListTitle = styled('h4', {
  fontWeight: '700',
  fontSize: '28px',
  lineHeight: '32px',
  letterSpacing: '0.02em',
  color: '#FFFFFF',
  marginBottom: '8px',
});
  
export const ListParagraph = styled('div', {
  fontSize: '18px',
  lineHeight: '30px',
  color: 'rgba(255, 255, 255, 0.75)',
});

export const ListItem = styled('li', {
  maxWidth: '320px',
  display: 'flex',
  flexDirection: 'row',
});

export const ListIcon = styled('img', {
  display: 'block',
  width: '48px',
  height: '48px',
  marginBottom: '10px',
});