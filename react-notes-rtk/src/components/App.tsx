import * as React from "react";
import css from "./App.module.scss";
import { Navbar } from "src/components/Navbar/Navbar";
import { NoteList } from "src/components/NoteList/NoteList";
import { AppState } from "src/store/store";
import { useReducer } from "react";
import { appReducer, initialState } from "src/store/reducer";

const App = () => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppState.Provider value={{ state, dispatch }}>
      <div className={css.app}>
        <header>
          <Navbar />
        </header>
        <main className={css.mainContent}>
          <NoteList />
        </main>
      </div>
    </AppState.Provider>
  );
};

export { App };
