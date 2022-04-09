import * as React from "react";
import { useRef, useState } from "react";
import { InputText } from "src/components/inputs/InputText/InputText";
import { useOutsideClick } from "src/hooks/useOutsideHook";
import css from "src/components/NoteList/NoteList.module.scss";
import { INote } from "src/models/Note";
import { useAppContext } from "src/store/store";
import { addNote, updateNote } from "src/store/actions";

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

  if (createNew) {
    return (
      <div className={css.noteContainer} ref={ref}>
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
            <div>Заметка...</div>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className={css.noteContainer} ref={ref}>
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
            <div>{item.title}</div>
            <div>{item.content}</div>
          </div>
        )}
      </div>
    );
  }
};

export { Note };
