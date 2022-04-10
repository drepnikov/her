export interface INote {
  title: string;
  content: string;
  pinned: boolean;
  id: string;
}

export const getNewNote = (): INote => ({
  pinned: false,
  title: "",
  content: "",
  id: String(Date.now()),
});
