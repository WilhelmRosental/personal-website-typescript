import { styled } from '../../../stitches.config';

export const Img = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  overflow: 'hidden',
});

export const GridContainer = styled('section', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
  paddingTop: '3rem',
  paddingBottom: '3rem',
  placeItems: 'center',
  columnGap: '1rem',
  rowGap: '3rem',
});

export const BlogCard = styled('div', {
  borderRadius: '10px',
  boxShadow: '3px 3px 20px rgba(80, 78, 78, 0.5)',
  textAlign: 'center',
  width: '400px',
});

export const TitleContent = styled('div', {
  textAlign: 'center',
  zIndex: '20',
  width: '100%',
  marginTop: '4rem',
  marginBottom: '0.7em',
  color: '#9cc9e3',
  fontSize: '1.8rem',
});

export const HeaderThree = styled('h3', {
  fontWeight: '500',
  letterSpacing: '2px',
  color: '#9cc9e3',
  padding: '.5rem 0',
  marginTop: '1rem',
});

export const Hr = styled('hr', {
  width: '50px',
  height: '3px',
  margin: '8px auto',
  border: '0',
  background: '#d0bb57',
});

export const CardInfo = styled('p', {
  width: '100%',
  padding: '0 50px',
  color: '#e4e6e7',
  fontStyle: '2rem',
  lineHeight: '24px',
  textAlign: 'center',
  marginTop: '2rem',
});