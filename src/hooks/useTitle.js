import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Coder Library | ${title}`;
  }, [title]);

  return null;
};
