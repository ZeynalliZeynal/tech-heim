import React, { ReactNode, useRef } from "react";

const Button = ({
  children,
  duration = 700,
  className,
  disabled,
  onClick,
}: {
  children?: ReactNode;
  duration?: number;
  rounded?: "sm" | "md" | "full";
  size?: "sm" | "md" | "lg";
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
      ripple.className = "ripple";

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
      className={`relative overflow-hidden gap-1 hover:-translate-y-0.5 active:scale-[0.98] text-body-md ${className} disabled:translate-y-0 disabled:opacity-80 disabled:active:scale-100 gap-2`}
    >
      {children}
    </button>
  );
};

export default Button;
