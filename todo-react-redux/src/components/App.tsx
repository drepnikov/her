import * as React from "react";
import { useCallback, useState } from "react";
import { Tabs, TabsEnum } from "src/components/Tabs/Tabs";
import { ITodo, List } from "src/components/List/List";
import { Buttons } from "src/components/Buttons/Buttons";
import css from "./App.module.scss";

interface IAppProps {}

const mock: ITodo[] = [
  {
    value: "Потрогать redux-toolkit",
    id: 1,
    completed: false,
  },
  {
    value: "Привет мир",
    completed: false,
    id: 6,
  },
  {
    value: "123123",
    completed: true,
    id: 7,
  },
  {
    value: "123",
    completed: true,
    id: 9,
  },
  {
    value: "Привет!",
    completed: true,
    id: 10,
  },
  {
    value: "12321",
    completed: false,
    id: 11,
  },
  {
    value: "Потрогать redux-toolkit",
    id: 1,
    completed: false,
  },
  {
    value: "Привет мир",
    completed: false,
    id: 6,
  },
  {
    value: "123123",
    completed: true,
    id: 7,
  },
  {
    value: "123",
    completed: true,
    id: 9,
  },
  {
    value: "Привет!",
    completed: true,
    id: 10,
  },
  {
    value: "12321",
    completed: false,
    id: 11,
  },
  {
    value: "Потрогать redux-toolkit",
    id: 1,
    completed: false,
  },
  {
    value: "Привет мир",
    completed: false,
    id: 6,
  },
  {
    value: "123123",
    completed: true,
    id: 7,
  },
  {
    value: "123",
    completed: true,
    id: 9,
  },
  {
    value: "Привет!",
    completed: true,
    id: 10,
  },
  {
    value: "12321",
    completed: false,
    id: 11,
  },
];

const App: React.FC<IAppProps> = () => {
  const [selectedTab, setSelectedTab] = useState(TabsEnum.current);
  const onChangeTab = useCallback((val: TabsEnum) => {
    setSelectedTab(val);
  }, []);

  return (
    <main>
      <div className={css.container}>
        <Tabs onChange={onChangeTab} selectedTab={selectedTab} />
        <List edit={selectedTab === TabsEnum.current} items={mock} />
        <Buttons />
      </div>
    </main>
  );
};

export { App };
