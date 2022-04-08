import React from "react";
import css from "./App.module.scss";
import { Navbar } from "src/components/Navbar/Navbar";
import { AddNote } from "src/components/AddNote/AddNote";

const App = () => {
  return (
    <div className={css.app}>
      <header>
        <Navbar />
      </header>
      <main className={css.mainContent}>
        <AddNote />
      </main>
    </div>
  );
};

export { App };
