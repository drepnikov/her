import * as React from "react";
import { AddNote } from "src/components/NoteList/AddNote/AddNote";
import { INote } from "src/models/Note";
import { NoteContainer } from "src/components/NoteList/NoteContainer/NoteContainer";
import css from "./NoteList.module.scss";
import { useAppContext } from "src/store/store";
import { useEffect } from "react";
import { addNote } from "src/store/actions";

interface INoteListProps {}

const NoteList: React.FC<INoteListProps> = () => {
  const {
    state: { notes },
    dispatch,
  } = useAppContext();

  const groupedNotes: { fixed: INote[]; other: INote[] } = {
    fixed: [],
    other: [],
  };

  notes.forEach((item) => {
    item.fixed ? groupedNotes.fixed.push(item) : groupedNotes.other.push(item);
  });

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        addNote({ fixed: true, content: "через редюсер", title: "Добавили" })
      );
    }, 3000);
  }, []);

  return (
    <div className={css.noteListContainer}>
      <div>
        <AddNote />
      </div>
      <div className={css.noteList}>
        {groupedNotes.fixed.length > 0 && (
          <div className={css.noteListFixedCategory}>
            <div>Закрепленные</div>

            {groupedNotes.fixed.map((note) => {
              return (
                <div className={css.noteListItem}>
                  <NoteContainer>
                    <div>{note.title}</div>
                    <div>{note.content}</div>
                  </NoteContainer>
                </div>
              );
            })}
          </div>
        )}
        <div>
          {groupedNotes.fixed.length > 0 && <div>Другие</div>}

          {groupedNotes.other.map((note) => {
            return (
              <div className={css.noteListItem}>
                <NoteContainer>
                  <div>{note.title}</div>
                  <div>{note.content}</div>
                </NoteContainer>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { NoteList };
