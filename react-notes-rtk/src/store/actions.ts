import { INote } from "src/models/Note";

export interface ActionReturnType<T = any> {
  type: string;
  payload: T;
}

type Action<T> = (payload: T) => ActionReturnType<T>;

enum ACTION_TYPES {
  ADD = "ADD",
  UPDATE = "UPDATE",
  DELETE = "DELETE",
}

const addNote: Action<INote> = (note) => {
  return {
    type: ACTION_TYPES.ADD,
    payload: note,
  };
};

const updateNote: Action<INote> = (note) => {
  return {
    type: ACTION_TYPES.UPDATE,
    payload: note,
  };
};

const deleteNote: Action<string> = (id) => {
  return {
    type: ACTION_TYPES.DELETE,
    payload: id,
  };
};

export { addNote, updateNote, deleteNote, ACTION_TYPES };
