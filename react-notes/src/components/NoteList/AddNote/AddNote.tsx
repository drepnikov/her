import * as React from "react";
import { useRef, useState } from "react";
import css from "src/components/NoteList/AddNote/AddNote.module.scss";
import { InputText } from "src/components/inputs/InputText/InputText";
import { useOutsideClick } from "src/hooks/useOutsideHook";
import { NoteContainer } from "src/components/NoteList/NoteContainer/NoteContainer";

interface IInputFieldProps {}

const AddNote: React.FC<IInputFieldProps> = () => {
  const [inputMode, setInputMode] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useOutsideClick(ref, () => {
    if (inputMode) setInputMode(false);
  });

  return (
    //@ts-ignore //todo: Разрули!!!
    <NoteContainer ref={ref}>
      {inputMode && (
        <div>
          <div className={css.inputContainer}>
            <InputText placeholder={"Введите заголовок"} />
          </div>
          <div className={css.inputContainer}>
            <InputText placeholder={"Заметка..."} />
          </div>
        </div>
      )}

      {!inputMode && <div onClick={() => setInputMode(true)}>Заметка...</div>}
    </NoteContainer>
  );
};

export { AddNote };
