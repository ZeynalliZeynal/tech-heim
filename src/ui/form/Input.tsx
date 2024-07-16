import classNames from "classnames";
import { EyeIcon } from "@/ui/svgs/icons.tsx";
import { ReactElement, ReactNode, useState } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

const Input = ({
  label,
  icon,
  error,
  hasValue,
  children,
}: {
  label: string;
  icon: ReactNode;
  error:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  hasValue: boolean;
  children: ReactElement;
}) => {
  const [activeInput, setActiveInput] = useState("");
  return (
    <div className="space-y-1">
      <div
        className={classNames(
          "relative grid grid-cols-[24px_1fr_24px] gap-2 border p-3 rounded-md transition-colors duration-300 border-neutral-gray-500 text-neutral-gray-500 group focus-within:border-primary focus-within:text-primary",
          {
            "border-error text-error": error,
          },
        )}
        onFocus={() => setActiveInput(label)}
        onBlur={() => setActiveInput("")}
      >
        <span className="size-6">{icon}</span>
        <span
          className={classNames(
            "capitalize absolute font-light z-10 bg-white px-1 transition-all duration-300 -translate-y-1/2",
            {
              "top-0 left-5 text-body-xs text-primary":
                hasValue || activeInput === label,
              "top-1/2 text-body-md left-[44px]":
                hasValue || activeInput !== label,
            },
          )}
        >
          {label}
        </span>
        <span className="relative z-20">{children}</span>{" "}
        {label === "password" && (
          <button type="button" className="transition-none">
            <EyeIcon />
          </button>
        )}
      </div>
      <div className="text-body-xs text-error">{error && String(error)}</div>
    </div>
  );
};

export default Input;
