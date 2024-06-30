import React, { ReactNode, useRef } from "react";
import classNames from "classnames";

const Button = ({
  children,
  duration = 700,
  size = "md",
  type,
  className,
  disabled,
  onClick,
}: {
  children?: ReactNode;
  duration?: number;
  type?:
    | "primary-regular"
    | "primary-outline"
    | "primary-none"
    | "secondary-regular"
    | "secondary-outline"
    | "secondary-none";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}) => {
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
      ripple.classList.add("bg-ripple");

      button.appendChild(ripple);

      ripple.addEventListener("animationend", () => {
        button.removeChild(ripple);
      });
    }
  };

  return (
    <button
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        `relative overflow-hidden disabled:opacity-80 gap-2 md:text-button-lg text-button-sm ${className}`,
        {
          "h-9 rounded-md px-2": size === "sm",
          "md:h-12 h-10 rounded-md px-2": size === "md",
          "md:h-14 h-8 rounded-md px-2": size === "lg",
          "size-9 rounded-full p-1": size === "icon",
          "bg-primary text-white hover:bg-primary-400":
            type === "primary-regular",
          "bg-secondary text-white hover:bg-secondary-500":
            type === "secondary-regular",
          "bg-white text-primary border border-solid border-primary hover:bg-primary hover:text-white":
            type === "primary-outline",
          "bg-white text-secondary border border-solid border-secondary hover:bg-secondary hover:text-white":
            type === "secondary-outline",
          "bg-white text-primary": type === "primary-none",
          "bg-white text-secondary": type === "secondary-none",
        },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
