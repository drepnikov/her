import { INote } from "src/models/Note";

interface IAppState {
  notes: INote[];
}

const initialState: IAppState = {
  notes: [
    {
      title: "Привет мир",
      content: "Содержимое заметки",
      fixed: false,
      id: "1",
    },
    {
      title: "Привет мир",
      content: "Содержимое заметки2",
      fixed: false,
      id: "2",
    },
    {
      title: "Привет мир",
      content: "Содержимое заметки3",
      fixed: true,
      id: "3",
    },
    {
      title: "Привет мир",
      content: "Содержимое заметки4",
      fixed: false,
      id: "4",
    },
    {
      title: "Привет мир",
      content: "Содержимое заметки5",
      fixed: false,
      id: "5",
    },
    {
      title: "Привет мир",
      content: "Содержимое заметки6",
      fixed: false,
      id: "6",
    },
  ],
};

const appReducer = (
  state: IAppState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return { ...state, notes: [payload, ...state.notes] };
    case "UPDATE":
      const targetIndex = state.notes.findIndex(
        (item) => item.id === payload.id
      );

      if (targetIndex !== -1) {
        const copiedNotes = [...state.notes];

        copiedNotes.splice(targetIndex, 1, payload);

        return {
          ...state,
          notes: copiedNotes,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export { appReducer, initialState };
