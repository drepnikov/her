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
          return <li key={todo.id}>{todo.value}</li>;
        })}
      </ul>
    </div>
  );
};

export { List };
