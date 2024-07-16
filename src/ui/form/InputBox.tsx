import classNames from "classnames";
import { EyeIcon, EyeSlashIcon } from "@/ui/svgs/icons.tsx";
import { ReactElement, ReactNode } from "react";
import {
  FieldError,
  FieldErrorsImpl,
  FieldValues,
  Merge,
} from "react-hook-form";
import { useInputContext } from "@/context/InputContext.tsx";
import { Link } from "react-router-dom";

const InputBox = ({
  label,
  type,
  icon,
  error,
  children,
}: {
  label: string;
  type?: "login" | "signup";
  icon: ReactNode;
  error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<FieldValues>>;
  children: ReactElement;
}) => {
  const { togglePassword, isShown } = useInputContext();

  return (
    <div className="flex flex-col gap-3">
      <div
        className={classNames(
          "grid items-center grid-cols-[24px_1fr_24px] gap-2 border p-3 rounded-md transition-all duration-300 group focus-within:border-primary",
          {
            "border-error text-error": error,
            "border-neutral-gray-500 text-neutral-gray-500": !error,
          },
        )}
      >
        <span className="size-6 group-focus-within:text-primary">{icon}</span>
        <span
          id="default-input"
          className="relative group-focus-within:text-primary"
        >
          {children} <span className="capitalize bg-white">{label}</span>
        </span>{" "}
        {label === "password" && (
          <button
            type="button"
            className="transition-none group-focus-within:text-primary transition-all"
            onClick={togglePassword}
          >
            {isShown ? <EyeIcon /> : <EyeSlashIcon />}
          </button>
        )}
      </div>
      {error && <div className="text-body-xs text-error">{String(error)}</div>}{" "}
      {type === "login" && label === "password" && (
        <Link
          to="/"
          className="text-body-md self-end text-primary hover:underline"
        >
          Forgot password?
        </Link>
      )}
    </div>
  );
};

export default InputBox;
