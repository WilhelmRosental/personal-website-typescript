import { styled } from '@stitches/react';

export const Section = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  overflow: 'hidden',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  padding: '50px 0',
  boxSizing: 'border-box',
});

export const SectionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '1080px',
  flex: '1',
});

export const SectionTitle = styled('h2', {
  display: 'flex',
  justifyContent: 'center',
  cursor: 'auto',
  fontWeight: '800',
  fontSize: '56px',
  lineHeight: '67px',
  width: '100%',
  maxWidth: '100%',
  marginBottom: '16px',
  padding: '0',
  margin: '0',
});

export const SectionText = styled('p', {
  maxWidth: '800px',
  fontSize: '18px',
  lineHeight: '30px',
  fontWeight: '400',
  paddingBottom: '3.6rem',
  color: 'rgba(255, 255, 255, 0.75)',
  cursor: 'auto',
});

export const SectionDivider = styled('div', {
  width: '100px',
  height: '6px',
  borderRadius: '2px',
  backgroundColor: '#fff',
  background: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)',
  margin: '0',
  marginRight: 'auto',
  marginLeft: 'auto',
});

export const SectionSubText = styled('p', {
  cursor: 'auto',
  maxWidth: '800px',
  fontWeight: '300',
  fontSize: '18px',
  lineHeight: '12px',
  color: 'rgba(255, 255, 255, 0.75)',
});