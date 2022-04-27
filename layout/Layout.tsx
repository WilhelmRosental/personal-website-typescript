import React from "react";

export const UserContext = React.createContext();

//components
import SectionProvider from "../components/Sections/SectionProvider/SectionProvider";
import Footer from "../components/Sections/Footer/Footer";

interface LayoutProps {
  children: React.ReactNode,
  locale: string
}

export const Layout = ({ children, locale } : LayoutProps) => {
  return (
    <UserContext.Provider value={locale}>
      <SectionProvider>
          {children}
      </SectionProvider>
      <Footer />
    </UserContext.Provider>
  );
};