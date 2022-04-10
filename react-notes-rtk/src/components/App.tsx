import * as React from "react";
import css from "./App.module.scss";
import { Navbar } from "src/components/Navbar/Navbar";
import { NoteList } from "src/components/NoteList/NoteList";

const App = () => {
  return (
    <div className={css.app}>
      <header>
        <Navbar />
      </header>
      <main className={css.mainContent}>
        <NoteList />
      </main>
    </div>
  );
};

export { App };
