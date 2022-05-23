import styled from 'styled-components'
import Image from "next/image";

export const Avatar = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`
  
export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Intro = styled.div`
  width: 100%;
`

export const Name = styled.h1`
  font-weight: 800;
  line-height: 1;
  text-transform: uppercase;
  font-size: 8.75rem;
  margin: 0;
  cursor: auto;
`

export const Title = styled.h2`
  font-size: 2rem;
  text-transform: uppercase;
  cursor: auto;
`
