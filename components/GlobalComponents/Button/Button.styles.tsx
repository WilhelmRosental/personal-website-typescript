import { styled } from '@mui/material/styles'

export const Button = styled('button')`
  border: none;
  width: 130px;
  height: 38px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  cursor: pointer;
  position: relative;
  border-radius: 50px;
  outline: none;
  background: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%);
  background-size: 400%;
  color: #fff;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%);
    background-size: 400%;
    border-radius: 50px;
    opacity: 0;
    transition: 0.5s;
  }

  &:hover::before {
    filter: blur(15px);
    opacity: 0.8;
  }
`
