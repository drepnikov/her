import { RefObject, useEffect } from "react";

const useOutsideClick = (ref: RefObject<any>, callback: () => void) => {
  const handleNativeDocClick = (event: any) => {
    if (!ref.current || ref.current.contains(event.target)) return;

    callback();
  };

  useEffect(() => {
    document.addEventListener("click", handleNativeDocClick);

    return () => {
      document.removeEventListener("click", handleNativeDocClick);
    };
  });
};

export { useOutsideClick };
