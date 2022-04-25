import React from "react";

//datas
import contact from "../../../datas/contact.json";

//components
import {
  Section,
  SectionDivider,
  SectionTitle,
  SectionContainer,
} from "../index";

interface ContactProps {
  locale: string;
}

const Contact = (props: ContactProps): JSX.Element => (
  <Section id="contact">
    <SectionTitle>
      {contact.sectionInfos
        .filter((p) => p.locale === props.locale)
        .map((sectionInfos, i) => {
          return <>{sectionInfos.title}</>;
        })}
    </SectionTitle>
    <SectionDivider />
    <SectionContainer></SectionContainer>
  </Section>
);

export default Contact;
