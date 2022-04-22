import React from "react";

import { Main } from "./Layout.styles";
import SectionProvider from "../components/Sections/SectionProvider/SectionProvider";

interface LayoutProps {
  children: React.ReactNode,
  locale: string
}

export const Layout = ({ children, locale }: LayoutProps) => {
  return (
    <>
      <Main>
        <SectionProvider locale={locale}>
          {children}
        </SectionProvider>
      </Main>
    </>
  );
};