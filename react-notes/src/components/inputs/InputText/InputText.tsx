import * as React from "react";
import css from "../Inputs.module.scss";

interface IInputTextProps {
  placeholder: string;
  value: string;
  onValueChange: (val: string) => void;
}

const InputText: React.FC<IInputTextProps> = ({
  value,
  onValueChange,
  placeholder,
}) => {
  return (
    <input
      value={value}
      onChange={(e) => {
        onValueChange(e.target.value);
      }}
      className={css.input}
      type={"text"}
      placeholder={placeholder}
    />
  );
};

export { InputText };
