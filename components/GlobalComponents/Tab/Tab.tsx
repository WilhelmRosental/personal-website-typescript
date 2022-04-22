interface TabProps {
  title: string;
  onClick: (tab: Array<string>) => void;
  active: boolean;
}

const Tab = ({ title, onClick, active = false }: TabProps) => {
  const onClickTab = e => {
    e.preventDefault(0);
    onClick(props.title);
  };

  return (
    <>
      <li className={`${active ? "active" : ""} tab-item`} onClick={onClickTab}>
        {title}
      </li>
    </>
  );
};

export default Tab;