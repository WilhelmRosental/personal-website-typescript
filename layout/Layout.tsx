import React from "react";

import Navbar from "../components/Sections/Navbar/Navbar";

import { Main } from "./Layout.styles";

interface LayoutProps {
  children: React.ReactNode,
  locale: string
}

export const Layout = ({ children, locale }: LayoutProps) => {
  return (
    <>
      <Navbar locale={locale} />
      <Main>{children}</Main>
    </>
  );
};