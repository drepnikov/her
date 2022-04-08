import * as React from "react";
import css from "./NoteContainer.module.scss";

interface INoteContainerProps {}

const NoteContainer = React.forwardRef<
  HTMLDivElement | null,
  INoteContainerProps
>(({ children }, ref) => {
  return (
    <div ref={ref} className={css.noteContainer}>
      {children}
    </div>
  );
});

export { NoteContainer };
