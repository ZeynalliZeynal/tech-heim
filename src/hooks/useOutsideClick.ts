import React, { useEffect, useRef } from 'react';

export const useOutsideClick = (
  handler: () => void,
  listeningOption: boolean = true
) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e: Mouse) => {
      if (ref.current && !ref.current.contains(e.target)) handler();
    };

    document.addEventListener('click', handleClick, listeningOption);

    return () =>
      document.removeEventListener('click', handleClick, listeningOption);
  }, [handler, listeningOption]);

  return ref;
};
