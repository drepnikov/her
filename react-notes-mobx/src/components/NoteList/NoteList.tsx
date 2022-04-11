import * as React from "react";
import { Note } from "src/components/NoteList/Note/Note";
import { getNewNote } from "src/models/Note";
import css from "./NoteList.module.scss";
import { store } from "src/store/store";
import { observer } from "mobx-react-lite";

interface INoteListProps {}

const NoteList: React.FC<INoteListProps> = observer(() => {
  const { groupedNotes } = store;

  return (
    <div className={css.noteListContainer}>
      <div>
        <Note createNew={true} item={getNewNote()} />
      </div>
      <div className={css.noteList}>
        {groupedNotes.fixed.length > 0 && (
          <div className={css.noteListFixedCategory}>
            <div>Закрепленные</div>

            {groupedNotes.fixed.map((note) => (
              <div key={note.id} className={css.noteListItem}>
                <Note item={note} />
              </div>
            ))}
          </div>
        )}
        <div>
          {groupedNotes.fixed.length > 0 && groupedNotes.other.length > 0 && (
            <div>Другие</div>
          )}

          {groupedNotes.other.map((note) => (
            <div key={note.id} className={css.noteListItem}>
              <Note item={note} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export { NoteList };
