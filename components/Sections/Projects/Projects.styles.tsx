import styled from 'styled-components'

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding-top: 3rem;
  padding-bottom: 3rem;
  place-items: center;
  column-gap: 1rem;
  row-gap: 3rem;
`

export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
`

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 0.7em;
  color: #9cc9e3;
  font-size: 1.8rem;
`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  margin-top: 1rem;
`

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #d0bb57;
`

export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: center;
  margin-top: 2rem;
`