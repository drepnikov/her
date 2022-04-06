import * as React from "react";
import { Tabs } from "src/components/Tabs/Tabs";
import { List } from "src/components/List/List";
import { Buttons } from "src/components/Buttons/Buttons";
import css from "./App.module.scss";

interface IAppProps {}

const App: React.FC<IAppProps> = () => {
  return (
    <main>
      <div className={css.container}>
        <Tabs />
        <List />
        <Buttons />
      </div>
    </main>
  );
};

export { App };
