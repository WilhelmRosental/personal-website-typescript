import React, { useContext } from 'react'
import Button from '@mui/material/Button'

//components
import { Section, SectionText, SectionContainer } from '../index'
import { Header, Name, Title, Intro, Avatar } from './Hero.styles'

//context
import { UserContext } from '../../../layout/Layout'

import avatar from '../../../public/avatar.png'
import hero from '../../../datas/hero.json'

const Hero = () => {
  const locale = useContext(UserContext)

  return (
    <>
      <Section id="home">
        <Header>
          <Name>Nathan Hallouin</Name>
          <Title>
            {hero.datas.presentation
              .filter((p) => p.locale === locale)
              .map((presentation, i: number) => {
                return <SectionText key={i}>{presentation.label}</SectionText>
              })}
          </Title>
        </Header>
        <SectionContainer>
          <Avatar
            width={150}
            height={150}
            alt="photo nathan hallouin"
            src={avatar}
          ></Avatar>
          <Intro>
            {hero.datas.presentation
              .filter((p) => p.locale === locale)
              .map((presentation, i) => {
                return <SectionText key={i}>{presentation.summary}</SectionText>
              })}
          </Intro>

          <Button variant="contained">Contained</Button>
        </SectionContainer>
      </Section>
    </>
  )
}

export default Hero
