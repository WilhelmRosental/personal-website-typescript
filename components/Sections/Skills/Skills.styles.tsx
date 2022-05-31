import { styled } from '@mui/material/styles'

export const ImageContainer = styled('div')`
  text-align: center;
  background-image: radial-gradient(
    50% 50% at 50% 50%,
    rgba(79, 108, 176, 0.25) 53.8%,
    rgba(79, 108, 176, 0) 100%
  );
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const MainImage = styled('img')`
  width: 100%;
`

export const List = styled('ul')`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-bottom: 4rem;
`

export const ListContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
`

export const ListTitle = styled('h4')`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #ffffff;
  margin-bottom: 8px;
`

export const ListParagraph = styled('div')`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);
`

export const ListItem = styled('li')`
  max-width: 320px;
  display: flex;
  flex-direction: row;
`

export const ListIcon = styled('img')`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
`
