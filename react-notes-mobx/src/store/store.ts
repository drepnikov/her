import { INote } from "src/models/Note";
import { makeAutoObservable } from "mobx";

interface IGroupedNotes {
  fixed: INote[];
  other: INote[];
}

class Store {
  notes: INote[] = [
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
  ];

  constructor() {
    makeAutoObservable(this);
  }

  addNote(note: INote) {
    this.notes.unshift(note);
  }

  deleteNote(id: string) {
    this.notes = this.notes.filter((item) => item.id !== id);
  }

  updateNote(note: INote) {
    const targetIndex = this.notes.findIndex((item) => item.id === note.id);

    if (targetIndex !== -1) {
      this.notes.splice(targetIndex, 1, note);
    }
  }

  get groupedNotes() {
    const groupedNotes: IGroupedNotes = {
      fixed: [],
      other: [],
    };

    this.notes.forEach((item) => {
      item.pinned
        ? groupedNotes.fixed.push(item)
        : groupedNotes.other.push(item);
    });

    return groupedNotes;
  }
}

const store = new Store();

export { store };
