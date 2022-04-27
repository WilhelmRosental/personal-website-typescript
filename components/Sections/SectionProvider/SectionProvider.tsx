import React, { useState, Children, useContext } from "react";

//nav components
import NavItem from "../../GlobalComponents/NavItem/NavItem";
import NavContent from "../../GlobalComponents/NavContent/NavContent";

import { NavLinkList, Main } from "./SectionProvider.styles";

//content components
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

interface TabsProps {
  children: React.ReactNode;
}

const SectionProvider = ({ children } : TabsProps) => {
  const arrayChildren = Children.toArray(children);
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <>
      <NavLinkList className="nav">
        <NavItem
          title="Hero"
          id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavItem
          title="Skills"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavItem
          title="Project"
          id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <NavItem
          title="Contact"
          id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </NavLinkList>

      <Main>
        <NavContent id="tab1" activeTab={activeTab}>
          <Hero />
        </NavContent>
        <NavContent id="tab2" activeTab={activeTab}>
          <Skills />
        </NavContent>
        <NavContent id="tab3" activeTab={activeTab}>
          <Projects />
        </NavContent>
        <NavContent id="tab4" activeTab={activeTab}>
          <Contact />
        </NavContent>
      </Main>
    </>
  );
};

export default SectionProvider;
