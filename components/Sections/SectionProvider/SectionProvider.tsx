import React, { useState } from "react";
import Tab from "../../GlobalComponents/Tab/Tab";

interface TabsProps {
  children: React.ReactNode;
  locale: string;
}

const SectionProvider = ({ children }: TabsProps) => {
  //const [activeTab, setActiveTab] = useState<string[]>(children[0].props.title);
  //const onClickTabItem = (tab : Array<string>) => setActiveTab(tab);

  /*
  <div className="tabs">
        <ul className="tab-list">
          {children ? children.map((tab : Array<string>) => {
            const { title } = tab.props;

            return (
              <Tab
                key={title}
                title={title}
                onClick={onClickTabItem}
                active={title === activeTab ? true : false}
              />
            );
          }) : null}
        </ul>

        <div className="tab-content">
          {children ? children.map((tab : Array<string>) => {
            if (tab.props.title !== activeTab) return undefined;

            return tab.props.children;
          }) : null}
        </div>
      </div>*/

  return (
    <>
      {children}
    </>
  );
};

export default SectionProvider;
