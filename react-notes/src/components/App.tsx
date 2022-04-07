import React from "react";
import css from "./App.module.scss";
import { Navbar } from "src/components/Navbar/Navbar";

const App = () => {
  return (
    <div className={css.app}>
      <header>
        <Navbar />
      </header>
    </div>
  );
};

export { App };
