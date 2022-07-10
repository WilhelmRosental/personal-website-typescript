import React from "react";

export const UserContext = React.createContext('');

//components
import Footer from "../components/Layout/Footer/Footer"
import TopBar from '../components/Layout/TopBar/TopBar'

interface LayoutProps {
  children: React.ReactNode,
  locale: string
}

export const Layout = ({ children, locale } : LayoutProps) => {
  return (
    <UserContext.Provider value={locale}>
      <TopBar />
      {children}
      <Footer />
    </UserContext.Provider>
  );
};