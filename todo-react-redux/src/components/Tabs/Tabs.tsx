import * as React from "react";
import css from "./Tabs.module.scss";
import { useCallback } from "react";

export enum TabsEnum {
  current = "current",
  archive = "archive",
}

interface ITabsProps {
  selectedTab: TabsEnum;
  onChange: (val: TabsEnum) => void;
}

const Tabs: React.FC<ITabsProps> = ({ selectedTab, onChange }) => {
  let currentTabStyles = `${css.tab} ${css.currentTab}`;
  let archiveTabStyles = `${css.tab} ${css.archiveTab}`;

  const onClickCurrentTabHandler = useCallback(() => {
    onChange(TabsEnum.current);
  }, []);
  const onClickArchiveTabHandler = useCallback(() => {
    onChange(TabsEnum.archive);
  }, []);

  if (selectedTab === TabsEnum.archive)
    archiveTabStyles += " " + css.selectedTab;
  if (selectedTab === TabsEnum.current)
    currentTabStyles += " " + css.selectedTab;

  return (
    <div className={css.container}>
      <ul>
        <li onClick={onClickCurrentTabHandler} className={currentTabStyles}>
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M20 4H4C3.44771 4 3 4.44772 3 5V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V5C21 4.44771 20.5523 4 20 4ZM4 2C2.34315 2 1 3.34315 1 5V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V5C23 3.34315 21.6569 2 20 2H4ZM6 7H8V9H6V7ZM11 7C10.4477 7 10 7.44772 10 8C10 8.55228 10.4477 9 11 9H17C17.5523 9 18 8.55228 18 8C18 7.44772 17.5523 7 17 7H11ZM8 11H6V13H8V11ZM10 12C10 11.4477 10.4477 11 11 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H11C10.4477 13 10 12.5523 10 12ZM8 15H6V17H8V15ZM10 16C10 15.4477 10.4477 15 11 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H11C10.4477 17 10 16.5523 10 16Z"
              fill="currentColor"
            />
          </svg>
        </li>
        <li onClick={onClickArchiveTabHandler} className={archiveTabStyles}>
          <svg
            width="45px"
            height="45px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 6H3V8H15V6Z" fill="currentColor" />
            <path d="M15 10H3V12H15V10Z" fill="currentColor" />
            <path d="M3 14H11V16H3V14Z" fill="currentColor" />
            <path
              d="M11.9905 15.025L13.4049 13.6106L15.526 15.7321L19.7687 11.4895L21.1829 12.9037L15.526 18.5606L11.9905 15.025Z"
              fill="currentColor"
            />
          </svg>
        </li>
      </ul>
    </div>
  );
};

export { Tabs };
