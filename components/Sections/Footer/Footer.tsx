import React from "react";
import { CompanyContainer, FooterWrapper, Slogan } from "./Footer.styles";

const Footer = () => {
  return (
    <FooterWrapper>
      <CompanyContainer>
        <Slogan>&copy; 2021 Nathan Hallouin . All rights reserved.</Slogan>
      </CompanyContainer>
    </FooterWrapper>
  );
};

export default Footer;