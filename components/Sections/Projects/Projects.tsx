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
  const { data, error } = useGetRepos();
  const locale = useContext(UserContext);

  console.log(data); //TODO: voir les données qu'on peut utiliser

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
          {data
            ? data.map((p, i) => {
                return (
                  <BlogCard key={i}>
                    {p.image ? <Img src={p.image} /> : null}
                    <HeaderThree title={p.name}>{p.name}</HeaderThree>
                    <Hr/>
                    <CardInfo className="card-info">{p.description}</CardInfo>
                  </BlogCard>
                );
              })
            : null}
        </GridContainer>
      </SectionContainer>
    </Section>
  );
};

export default Projects;