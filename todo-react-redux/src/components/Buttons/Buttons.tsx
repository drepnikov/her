import * as React from "react";
import css from "./Buttons.module.scss";

interface IButtonsProps {}

const Buttons: React.FC<IButtonsProps> = () => {
  return (
    <div className={css.container}>
      <button className={css.addTodoBtn}>
        <span>+</span>
      </button>
    </div>
  );
};

export { Buttons };
