import React from "react";

import links from "../../../constants/interface/navbar.json";

import { NavbarContainer, NavbarLinkContainer, NavbarLink } from "./Navbar.styles";

interface NavbarProps {
  locale: string
}

const Navbar = (props : NavbarProps) => {
  return (
    <NavbarContainer>
      <NavbarLinkContainer>
        {links.items
          .filter((l) => l.locale === props.locale)
          .map((link, i) => {
            return (
              <NavbarLink key={i} href={link.url}>
                {link.label}
              </NavbarLink>
            );
          })}
      </NavbarLinkContainer>
    </NavbarContainer>
  );
}

export default Navbar;