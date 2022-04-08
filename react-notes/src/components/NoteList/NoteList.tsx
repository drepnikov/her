import * as React from "react";
import { AddNote } from "src/components/NoteList/AddNote/AddNote";
import { INote } from "src/models/Note";
import { NoteContainer } from "src/components/NoteList/NoteContainer/NoteContainer";
import css from "./NoteList.module.scss";

interface INoteListProps {
  items: INote[];
}

const NoteList: React.FC<INoteListProps> = ({ items }) => {
  const notes: { fixed: INote[]; other: INote[] } = {
    fixed: [],
    other: [],
  };

  items.forEach((item) => {
    item.fixed ? notes.fixed.push(item) : notes.other.push(item);
  });

  return (
    <div className={css.noteListContainer}>
      <div>
        <AddNote />
      </div>
      <div className={css.noteList}>
        {notes.fixed.length > 0 && (
          <div className={css.noteListFixedCategory}>
            <div>Закрепленные</div>

            {notes.fixed.map((note) => {
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
          {notes.fixed.length > 0 && <div>Другие</div>}

          {notes.other.map((note) => {
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
