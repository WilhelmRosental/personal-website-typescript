import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
  SectionContainer,
} from "../index";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./Skills.styles";
import { skills } from "../../../constants/skills.json";

const Technologies = () => (
  <Section id="skills">
    <SectionTitle>Mes Compétences</SectionTitle>
    <SectionDivider />
    <SectionContainer>
      <List>
        {skills.map((Skill) => (
          <ListItem key={Skill.slug}>
            <picture>
              <Skill.Component />
            </picture>
            <ListContainer>
              <ListTitle>{Skill.title}</ListTitle>
            </ListContainer>
          </ListItem>
        ))}
      </List>
    </SectionContainer>
  </Section>
);

export default Technologies;
