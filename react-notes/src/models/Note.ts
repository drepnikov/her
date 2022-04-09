export interface INote {
  title: string;
  content: string;
  fixed: boolean;
  id: string;
}

export const getNewNote = (): INote => ({
  fixed: false,
  title: "",
  content: "",
  id: String(Date.now()),
});
