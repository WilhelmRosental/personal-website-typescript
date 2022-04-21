import React from "react";

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

//services
import useGetRepos from "../../../services/useGetRepos";

const Projects = () => {
  const { data, error } = useGetRepos("");

  console.log(data); //TODO: voir les données qu'on peut utiliser

  return (
    <Section id="projects">
      <SectionTitle main>Mes Projets</SectionTitle>
      <SectionDivider />
      <SectionContainer>
        <GridContainer>
          {data
            ? data.map((p, i) => {
                return (
                  <BlogCard key={i}>
                    {p.image ? <Img src={p.image} /> : ""}
                    <HeaderThree title={p.name}>{p.name}</HeaderThree>
                    <Hr/>
                    <CardInfo className="card-info">{p.description}</CardInfo>
                  </BlogCard>
                );
              })
            : ""}
        </GridContainer>
      </SectionContainer>
    </Section>
  );
};

export default Projects;