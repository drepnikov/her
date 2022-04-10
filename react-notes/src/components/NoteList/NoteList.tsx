import * as React from "react";
import { Note } from "src/components/NoteList/AddNote/Note";
import { getNewNote, INote } from "src/models/Note";
import { useAppContext } from "src/store/store";
import css from "./NoteList.module.scss";
import { useEffect, useState } from "react";

interface INoteListProps {}

interface IGroupedNotes {
  fixed: INote[];
  other: INote[];
}
const NoteList: React.FC<INoteListProps> = () => {
  const {
    state: { notes },
  } = useAppContext();

  const [groupedNotes, setGroupedNotes] = useState<IGroupedNotes>({
    fixed: [],
    other: [],
  });

  useEffect(() => {
    const newGroupedNotes: IGroupedNotes = {
      fixed: [],
      other: [],
    };

    notes.forEach((item) => {
      item.pinned
        ? newGroupedNotes.fixed.push(item)
        : newGroupedNotes.other.push(item);
    });

    setGroupedNotes(newGroupedNotes);
  }, [notes]);

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
};

export { NoteList };
