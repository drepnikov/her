import { INote } from "src/models/Note";
import { ACTION_TYPES } from "src/store/actions";

interface IAppState {
  notes: INote[];
}

const initialState: IAppState = {
  notes: [
    {
      title: "Привет мир",
      content: "Содержимое заметки",
      pinned: false,
      id: "1",
    },
    {
      title: "Привет мир",
      content: "Содержимое заметки2",
      pinned: false,
      id: "2",
    },
    {
      title: "Привет мир",
      content: "Содержимое заметки3",
      pinned: true,
      id: "3",
    },
    {
      title: "Привет мир",
      content: "Содержимое заметки4",
      pinned: false,
      id: "4",
    },
    {
      title: "Привет мир",
      content: "Содержимое заметки5",
      pinned: false,
      id: "5",
    },
    {
      title: "Привет мир",
      content: "Содержимое заметки6",
      pinned: false,
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
    case ACTION_TYPES.ADD:
      return { ...state, notes: [payload, ...state.notes] };
    case ACTION_TYPES.UPDATE:
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

    case ACTION_TYPES.DELETE:
      return {
        ...state,
        notes: state.notes.filter((item) => item.id !== payload),
      };
    default:
      return state;
  }
};

export { appReducer, initialState };
