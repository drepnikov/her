import React from "react";
import css from "./App.module.scss";
import { Navbar } from "src/components/Navbar/Navbar";
import { NoteList } from "src/components/NoteList/NoteList";
import { INote } from "src/models/Note";

const notes: INote[] = [
  { title: "Привет мир", content: "Содержимое заметки", fixed: false },
  { title: "Привет мир", content: "Содержимое заметки", fixed: false },
  { title: "Привет мир", content: "Содержимое заметки", fixed: true },
  { title: "Привет мир", content: "Содержимое заметки", fixed: false },
  { title: "Привет мир", content: "Содержимое заметки", fixed: false },
  { title: "Привет мир", content: "Содержимое заметки", fixed: false },
];

const App = () => {
  return (
    <div className={css.app}>
      <header>
        <Navbar />
      </header>
      <main className={css.mainContent}>
        <NoteList items={notes} />
      </main>
    </div>
  );
};

export { App };
