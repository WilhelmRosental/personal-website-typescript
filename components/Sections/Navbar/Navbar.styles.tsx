import { styled } from '../../../stitches.config';

export const NavbarContainer = styled('nav', {
  minWidth: '20rem',
  width: '100%',
  position: 'fixed',
  zIndex: '999',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const NavbarLinkContainer = styled('ul', {
  display: 'flex',
  alignItems: 'center',
});

export const NavbarLink = styled('a', {
  color: 'white',
  fontSize: '100%',
  textDecoration: 'none',
  margin: '0',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  fontWeight: '500',
  padding: '0 5px',
});