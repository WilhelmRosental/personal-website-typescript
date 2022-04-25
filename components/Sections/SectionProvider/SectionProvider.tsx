import React, { useState } from "react";

//nav components
import NavItem from "../../GlobalComponents/NavItem/NavItem";
import NavContent from "../../GlobalComponents/NavContent/NavContent";

import { NavLinkList } from "./SectionProvider.styles";

//content components
import Hero from '../Hero/Hero';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';

interface TabsProps {
  children: React.ReactNode;
  locale: string;
}

const SectionProvider = ({ children, locale } : TabsProps) => { 
  const [activeTab, setActiveTab] = useState("tab1");
 
  return (
    //TODO: Améliorer la structure des datas
    <div className="Tabs">
      <NavLinkList className="nav">
        <NavItem title="Hero" id="tab1" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <NavItem title="Skills" id="tab2" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <NavItem title="Project" id="tab3" activeTab={activeTab} setActiveTab={setActiveTab}/>
        <NavItem title="Contact" id="tab4" activeTab={activeTab} setActiveTab={setActiveTab}/>
      </NavLinkList>
 
      <div className="outlet">
        <NavContent id="tab1" activeTab={activeTab}>
          <Hero locale={locale}/>
        </NavContent>
        <NavContent id="tab2" activeTab={activeTab}>
          <Skills locale={locale}/>
        </NavContent>
        <NavContent id="tab3" activeTab={activeTab}>
          <Projects locale={locale}/>
        </NavContent>
        <NavContent id="tab4" activeTab={activeTab}>
          <Contact locale={locale}/>
        </NavContent>
      </div>
    </div>
  );
};

export default SectionProvider;
