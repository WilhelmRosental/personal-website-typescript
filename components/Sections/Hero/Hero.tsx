import React from "react";

import { Section, SectionText, SectionContainer } from "../index";
import { Header, Name, Title, Intro, Avatar } from "./Hero.styles";

import avatar from "../../../public/avatar.png";
import datas from "../../../constants/global-datas.json";

interface HeroProps {
  locale: string;
}

const Hero = (props : HeroProps) => {
  return (
    <>
      <Section id="home">
        <Header>
          <Name>Nathan Hallouin</Name>
          <Title>
            {datas.basics.presentation
              .filter((p) => p.locale === props.locale)
              .map((presentation, i) => {
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
            {datas.basics.presentation
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
