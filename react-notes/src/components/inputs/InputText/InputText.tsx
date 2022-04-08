import * as React from "react";
import css from "../Inputs.module.scss";

interface IInputTextProps {
  placeholder: string;
}

const InputText: React.FC<IInputTextProps> = (props) => {
  return <input className={css.input} type={"text"} {...props} />;
};

export { InputText };
