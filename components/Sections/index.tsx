import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  box-sizing: border-box;
  height: 100%;
`

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1080px;
  flex: 1;
`

export const SectionTitle = styled.h2`
  display: flex;
  justify-content: center;
  cursor: auto;
  font-weight: 800;
  font-size: 56px;
  line-height: 67px;
  width: 100%;
  max-width: 100%;
  margin-bottom: 16px;
  padding: 0;
  margin: 0;
`

export const SectionText = styled.p`
  max-width: 800px;
  font-size: 18px;
  line-height: 30px;
  font-weight: 400;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.75);
  cursor: auto;
`

export const SectionDivider = styled.div`
  width: 100px;
  height: 6px;
  border-radius: 2px;
  background-color: #fff;
  background: linear-gradient(270deg, #13ADC7 0%, #945DD6 100%);
  margin: 0;
  margin-right: auto;
  margin-left: auto;
`

export const SectionSubText = styled.p`
  cursor: auto;
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 12px;
  color: rgba(255, 255, 255, 0.75);
`