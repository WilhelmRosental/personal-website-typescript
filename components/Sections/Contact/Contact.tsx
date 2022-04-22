import React from "react";

import Footer from "../Footer/Footer";

//datas
import contact from "../../../datas/contact.json";

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
    <Footer />
  </Section>
);

export default Contact;
