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

interface ContactProps {
  locale: string;
}

const Contact = (props: ContactProps): JSX.Element => {
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
