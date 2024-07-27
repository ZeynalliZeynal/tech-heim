import { ReactNode } from "react";
import classNames from "classnames";
import { useRipple } from "../hooks/useRipple.ts";

const Button = ({
  children,
  type = "button",
  duration = 1000,
  size = "md",
  style,
  className,
  disabled,
  rippleBg = "rgba(255, 255, 255, 0.1)",
  full = false,
  onClick,
}: {
  children?: ReactNode;
  type?: "button" | "reset" | "submit";
  duration?: number;
  style?:
    | "primary-regular"
    | "primary-outline"
    | "primary-none"
    | "secondary-regular"
    | "secondary-outline"
    | "secondary-none";
  size?: "sm" | "md" | "lg" | "icon";
  className?: string;
  disabled?: boolean;
  rippleBg?: string;
  full?: boolean;
  onClick?: () => void;
}) => {
  const { handleMouseDown, buttonRef } = useRipple(duration, rippleBg);

  return (
    <button
      type={type}
      ref={buttonRef}
      onMouseDown={handleMouseDown}
      onClick={onClick}
      disabled={disabled}
      className={classNames(
        `relative overflow-hidden disabled:opacity-50 disabled:scale-100 gap-2 text-button-lg hover:shadow-button ${className}`,
        {
          "h-9 rounded-md px-2": size === "sm",
          "md:h-12 h-10 rounded-md px-2": size === "md",
          "md:h-14 h-8 rounded-md px-2": size === "lg",
          "size-9 rounded-xl p-1 hover:shadow-none focus-within:border-2 focus-within:border-solid focus-within:border-primary transition":
            size === "icon",
          "bg-primary text-white md:hover:bg-primary/80 disabled:bg-primary":
            style === "primary-regular",
          "bg-secondary text-white md:hover:bg-secondary/80 disabled:bg-secondary":
            style === "secondary-regular",
          "bg-white text-primary border-2 border-solid border-primary hover:bg-primary hover:text-white disabled:bg-white":
            style === "primary-outline",
          "bg-white text-secondary border-2 border-solid border-secondary hover:bg-secondary hover:text-white disabled:bg-white":
            style === "secondary-outline",
          "bg-white text-primary disabled:bg-white": style === "primary-none",
          "bg-white text-secondary disabled:bg-white":
            style === "secondary-none",
          "w-full": full,
        },
      )}
    >
      {children}
    </button>
  );
};

export default Button;
