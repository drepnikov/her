import * as React from "react";
import { useRef, useState } from "react";
import { InputText } from "src/components/inputs/InputText/InputText";
import { useOutsideClick } from "src/hooks/useOutsideHook";
import css from "src/components/NoteList/NoteList.module.scss";
import { INote } from "src/models/Note";
import { useAppContext } from "src/store/store";
import { addNote, deleteNote, updateNote } from "src/store/actions";

interface IInputFieldProps {
  item: INote;
  createNew?: boolean;
}

const Note: React.FC<IInputFieldProps> = ({ item, createNew }) => {
  const { dispatch } = useAppContext();

  const [updatedNote, setUpdatedNote] = useState<INote>({ ...item });

  const onTitleChange = (val: string) =>
    setUpdatedNote((prev) => ({ ...prev, title: val }));

  const onContentChange = (val: string) =>
    setUpdatedNote((prev) => ({ ...prev, content: val }));

  const deleteNoteHanlder = (id: string) => {
    dispatch(deleteNote(id));
  };

  const [editMode, setEditMode] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    if (editMode) {
      if (updatedNote.title.length || updatedNote.content.length) {
        createNew
          ? dispatch(addNote(updatedNote))
          : dispatch(updateNote(updatedNote));
      }

      setUpdatedNote({ ...item });
      setEditMode(false);
    }
  });

  return (
    <div className={css.noteContainer} ref={ref}>
      <div>
        {editMode && (
          <div>
            <div className={css.inputContainer}>
              <InputText
                onValueChange={onTitleChange}
                value={updatedNote.title}
                placeholder={"Введите заголовок"}
              />
            </div>
            <div className={css.inputContainer}>
              <InputText
                value={updatedNote.content}
                onValueChange={onContentChange}
                placeholder={"Заметка..."}
              />
            </div>
          </div>
        )}

        {!editMode && (
          <div onClick={() => setEditMode(true)}>
            {createNew && <div>Заметка...</div>}
            {!createNew && (
              <>
                <div>{item.title}</div>
                <div>{item.content}</div>
              </>
            )}
          </div>
        )}
      </div>
      {!createNew && (
        <div className={css.noteActionsPanel}>
          <div
            onClick={() => deleteNoteHanlder(updatedNote.id)}
            className={css.deleteBtn}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M15 4V3H9v1H4v2h1v13c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V6h1V4h-5zm2 15H7V6h10v13z"></path>
              <path d="M9 8h2v9H9zm4 0h2v9h-2z"></path>
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export { Note };
