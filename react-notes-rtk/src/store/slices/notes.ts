import { INote } from "src/models/Note";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "src/store/store";

export interface NotesState {
  notes: INote[];
}

const initialState: NotesState = {
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

export const notesSlice = createSlice({
  initialState,
  name: "notes",
  reducers: {
    addNote: (state, action: PayloadAction<INote>) => {
      state.notes.unshift(action.payload);
    },

    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((item) => item.id !== action.payload);
    },

    updateNote: (state, action: PayloadAction<INote>) => {
      const targetIndex = state.notes.findIndex(
        (item) => item.id === action.payload.id
      );

      if (targetIndex !== -1) {
        state.notes.splice(targetIndex, 1, action.payload);
      }
    },
  },
});

export const { updateNote, deleteNote, addNote } = notesSlice.actions;
export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;
