import React, { useContext } from "react";

//components
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
} from "./Projects.styles";
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionContainer,
} from "../index";

//context
import { UserContext } from "../../../layout/Layout";

//datas
import projects from "../../../datas/projects.json";

//hooks
import useGetRepos from "../../../hooks/useGetRepos";

const Projects = () => {
  const locale = useContext(UserContext);

  return (
    <Section id="projects">
      <SectionTitle>
      {projects.sectionInfos
          .filter((p) => p.locale === locale)
          .map((sectionInfos, i) => {
            return <>{sectionInfos.title}</>;
          })}
      </SectionTitle>
      <SectionDivider />
      <SectionContainer>
        <GridContainer>
        </GridContainer>
      </SectionContainer>
    </Section>
  );
};

export default Projects;