import { styled } from '../../../stitches.config';

export const FooterWrapper = styled('footer', {
  boxSizing: 'content-box',
});

export const CompanyContainer = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});

export const Slogan = styled('p', {
  color: 'rgba(255, 255, 255, 0.5)',
  minWidth: '280px',
  letterSpacing: '0.02em',
  fontSize: '18px',
  lineHeight: '30px',
  paddingTop: '1rem',
  display: 'flex',
  alignItems: 'baseline',
});