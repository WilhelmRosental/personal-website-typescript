import React from "react";

//components
import { Main } from "./Layout.styles";
import SectionProvider from "../components/Sections/SectionProvider/SectionProvider";
import Footer from "../components/Sections/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode,
  locale: string
}

export const Layout = ({ children, locale } : LayoutProps) => {
  return (
    <>
      <Main>
        <SectionProvider locale={locale}>
          {children}
        </SectionProvider>
      </Main>
      <Footer />
    </>
  );
};