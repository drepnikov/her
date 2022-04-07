import * as React from "react";
import css from "./List.module.scss";

export interface ITodo {
  value: string;
  id: number;
  completed: boolean;
}

interface IListProps {
  items: ITodo[];
  edit: boolean;
}

const List: React.FC<IListProps> = ({ items }) => {
  return (
    <div className={css.container}>
      <ul>
        {items.map((todo) => {
          return (
            <li className={todo.completed ? css.checkedItem : ""} key={todo.id}>
              <label>
                <input type={"checkbox"} checked={todo.completed} />
                <span>{todo.value}</span>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { List };
