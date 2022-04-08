import * as React from "react";
import { useRef, useState } from "react";
import css from "./AddNote.module.scss";
import { InputText } from "src/components/inputs/InputText/InputText";
import { useOutsideClick } from "src/hooks/useOutsideHook";

interface IInputFieldProps {}

const AddNote: React.FC<IInputFieldProps> = () => {
  const [inputMode, setInputMode] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, () => {
    if (inputMode) setInputMode(false);
  });

  return (
    <div ref={ref} className={css.addNote}>
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
    </div>
  );
};

export { AddNote };
