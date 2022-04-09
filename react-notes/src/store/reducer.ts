const initialState = {
  notes: [
    { title: "Привет мир", content: "Содержимое заметки", fixed: false },
    { title: "Привет мир", content: "Содержимое заметки", fixed: false },
    { title: "Привет мир", content: "Содержимое заметки", fixed: true },
    { title: "Привет мир", content: "Содержимое заметки", fixed: false },
    { title: "Привет мир", content: "Содержимое заметки", fixed: false },
    { title: "Привет мир", content: "Содержимое заметки", fixed: false },
  ],
};

const appReducer = (
  state: typeof initialState,
  action: { type: string; payload: any }
) => {
  const { type, payload } = action;

  switch (type) {
    case "ADD":
      return { ...state, notes: [...state.notes, payload] };
      break;
    default:
      return state;
  }
};

export { appReducer, initialState };
