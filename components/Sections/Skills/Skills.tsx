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

//datas
import skills from "../../../datas/skills.json";

interface SkillsProps {
  locale: string;
}

const Skills = (props: SkillsProps): JSX.Element => {
  console.log(props.locale)

  return (
    <Section id="skills">
      <SectionTitle>
        {skills.sectionInfos
          .filter((p) => p.locale === props.locale)
          .map((sectionInfos, i) => {
            return <>{sectionInfos.title}</>;
          })}
      </SectionTitle>
      <SectionDivider />
      <SectionContainer>
        <List>
          {skills.items.map((Skill) => (
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
};

export default Skills;
