import React from "react";

interface NavContentProps {
    id : string,
    activeTab : string,
    children : React.ReactNode
}

const NavContent  = ({ id, activeTab, children } : NavContentProps) => {
  return activeTab === id ? {children}: null;
};

export default NavContent;
