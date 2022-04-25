import React from "react";

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
    <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      {title}
    </li>
  );
};

export default NavItem;
