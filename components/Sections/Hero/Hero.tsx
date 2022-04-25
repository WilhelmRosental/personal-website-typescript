import React from "react";

//components
import { Section, SectionText, SectionContainer } from "../index";
import { Header, Name, Title, Intro, Avatar } from "./Hero.styles";

import avatar from "../../../public/avatar.png";
import hero from "../../../datas/hero.json";

interface HeroProps {
  locale: string;
}

const Hero = (props: HeroProps): JSX.Element => {
  return (
    <>
      <Section id="home">
        <Header>
          <Name>Nathan Hallouin</Name>
          <Title>
            {hero.datas.presentation
              .filter((p) => p.locale === props.locale)
              .map((presentation, i: number) => {
                return <SectionText key={i}>{presentation.label}</SectionText>;
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
              .filter((p) => p.locale === props.locale)
              .map((presentation, i) => {
                return (
                  <SectionText key={i}>{presentation.summary}</SectionText>
                );
              })}
          </Intro>
        </SectionContainer>
      </Section>
    </>
  );
};

export default Hero;
