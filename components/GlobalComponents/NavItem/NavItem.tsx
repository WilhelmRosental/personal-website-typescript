import React from "react";

import { NavLink } from "./NavItem.styles";

interface NavItemProps {
    id : string,
    title : string,
    activeTab : string,
    setActiveTab : any
}

const NavItem = ({ id, title, activeTab, setActiveTab } : NavItemProps) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <NavLink onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {title}
    </NavLink>
  );
};

export default NavItem;
