import * as React from "react";
import { useRef, useState } from "react";
import { InputText } from "src/components/inputs/InputText/InputText";
import { useOutsideClick } from "src/hooks/useOutsideHook";
import css from "src/components/NoteList/NoteList.module.scss";
import { INote } from "src/models/Note";
import { useAppContext } from "src/store/store";
import { addNote, deleteNote, updateNote } from "src/store/actions";
import { ReactComponent as IconTrash } from "src/assets/icon-trash.svg";

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
            <IconTrash />
          </div>
        </div>
      )}
    </div>
  );
};

export { Note };
