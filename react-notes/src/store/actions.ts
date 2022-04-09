import { INote } from "src/models/Note";

export interface ActionReturnType<T = any> {
  type: string;
  payload: T;
}

type Action<T> = (payload: T) => ActionReturnType<T>;

const addNote: Action<INote> = (note) => {
  return {
    type: "ADD",
    payload: note,
  };
};

export { addNote };
