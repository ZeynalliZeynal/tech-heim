import { useEffect } from "react";

export const useHideScroll = (when: boolean) => {
  useEffect(() => {
    if (when) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [when]);
};
