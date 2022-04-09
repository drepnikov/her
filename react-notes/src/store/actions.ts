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

const updateNote: Action<INote> = (note) => {
  return {
    type: "UPDATE",
    payload: note,
  };
};

const deleteNote: Action<string> = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};

export { addNote, updateNote, deleteNote };
