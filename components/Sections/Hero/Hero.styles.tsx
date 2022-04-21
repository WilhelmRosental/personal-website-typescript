import { styled } from '../../../stitches.config';
import Image from "next/image";

export const Avatar = styled(Image, {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
});
  
export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const Intro = styled('div', {
  width: '100%',
});

export const Name = styled('h1', {
  fontWeight: '800',
  lineHeight: '1',
  textTransform: 'uppercase',
  fontSize: '8.75rem',
  margin: '0',
  cursor: 'auto',
});

export const Title = styled('h2', {
  fontSize: '2rem',
  textTransform: 'uppercase',
  cursor: 'auto',
});
