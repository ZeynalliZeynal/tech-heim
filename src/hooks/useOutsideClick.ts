import { MouseEvent, useEffect, useRef } from "react";

export const useOutsideClick = (
  handler: () => void,
  listeningOption: boolean = true,
) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClick: EventListener = (evt) => {
      const e = evt as unknown as MouseEvent;
      if (ref.current && !ref.current.contains(e.target as Node)) handler();
    };

    document.addEventListener("click", handleClick, listeningOption);

    return () =>
      document.removeEventListener("click", handleClick, listeningOption);
  }, [handler, listeningOption]);

  return ref;
};
