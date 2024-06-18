import React, { FC, ReactNode, useRef } from "react";

import styles from "./button.module.scss";

const Button: FC<{
  children?: ReactNode;
  duration?: number;
  rounded?: "sm" | "md" | "full";
  size?: "sm" | "lg";
  color?: "primary" | "secondary";
  type?: "regular" | "outline" | "no-border";
  icon?: boolean;
  onClick?: () => {};
}> = ({
  children,
  duration = 700,
  rounded,
  size,
  type,
  color,
  icon = false,
  onClick,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = buttonRef.current;

    if (button) {
      const rect = button.getBoundingClientRect();
      const ripple = document.createElement("span");
      ripple.className = styles.ripple;

      const { left, top } = rect;
      const leftPos = e.clientX - left;
      const topPos = e.clientY - top;

      ripple.style.left = `${leftPos}px`;
      ripple.style.top = `${topPos}px`;
      ripple.style.animationDuration = duration / 1000 + "s";
      ripple.style.background = "var(--ripple-bg)";

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
      className={`${styles.button} ${rounded ? styles[`rounded-${rounded}`] : ""} ${size ? styles[`size-${size}`] : ""} ${color ? styles[`${color}-${type}`] : ""}`.trim()}
    >
      <span
        className={`${styles.children} ${icon ? styles.iconChild : undefined}`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
