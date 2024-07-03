import React, { useRef } from "react";

export const useRipple = (duration: number) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;

    if (button) {
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = "ripple animate-ripple";

      const { left, top } = rect;
      const leftPos = e.clientX - left;
      const topPos = e.clientY - top;

      ripple.style.left = `${leftPos}px`;
      ripple.style.top = `${topPos}px`;
      ripple.style.animationDuration = duration / 1000 + "s";
      // ripple.classList.add("bg-ripple");

      button.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        button.removeChild(ripple);
      });
    }
  };

  return { handleMouseDown, buttonRef };
};
