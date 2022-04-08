import * as React from "react";
import { AddNote } from "src/components/NoteList/AddNote/AddNote";
interface INoteListProps {}

const NoteList: React.FC<INoteListProps> = () => {
  return (
    <div>
      <div>
        <AddNote />
      </div>
      <div>Здесь будет выводится список</div>
    </div>
  );
};

export { NoteList };
