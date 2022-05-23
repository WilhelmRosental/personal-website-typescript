import React, { useContext } from "react";

//datas
import contact from "../../../datas/contact.json";

//components
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionContainer,
} from "../index";

//context
import { UserContext } from "../../../layout/Layout";

const Contact = () => {
  const locale = useContext(UserContext);

  return (
    <Section id="contact">
      <SectionTitle>
        {contact.sectionInfos
          .filter((p) => p.locale === locale)
          .map((sectionInfos, i) => {
            return <>{sectionInfos.title}</>;
          })}
      </SectionTitle>
      <SectionDivider />
      <SectionContainer></SectionContainer>
    </Section>
  );
};

export default Contact;
