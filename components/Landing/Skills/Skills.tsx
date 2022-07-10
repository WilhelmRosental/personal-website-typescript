import React, { useContext } from "react";

//components
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

//context
import { UserContext } from "../../../layout/Layout";

//datas
import skills from "../../../datas/skills.json";

const Skills = () => {
  const locale = useContext(UserContext);

  return (
    <Section id="skills">
      <SectionTitle>
        {skills.sectionInfos
          .filter((p) => p.locale === locale)
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
