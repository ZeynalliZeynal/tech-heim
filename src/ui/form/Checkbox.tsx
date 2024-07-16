import classNames from "classnames";
import { ReactNode } from "react";
import { IoClose } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";

const Checkbox = ({
  children,
  checked,
  onChange,
  disabled,
  icon = "check",
  color,
}: {
  children?: ReactNode;
  checked: boolean;
  onChange: () => void;
  disabled?: boolean;
  icon?: "check" | "close";
  color: "dark" | "blue";
}) => {
  return (
    <div className="flex gap-3 items-center">
      <button
        type="button"
        onClick={onChange}
        className={classNames("size-5 border rounded-md text-white", {
          "border-neutral-gray-800": color === "dark" && !disabled,
          "border-primary": color === "blue" && !disabled,
          "bg-primary": color === "blue" && checked,
          "bg-neutral-gray-800": color === "dark" && checked,
          "border-neutral-gray-500 bg-neutral-gray-500": disabled,
        })}
      >
        <span
          className={classNames("p-0.5", {
            "scale-100": checked,
            "scale-0": !checked,
          })}
        >
          {icon === "check" ? <FaCheck /> : <IoClose />}
        </span>
      </button>{" "}
      {children && (
        <span className="cursor-default select-none" onClick={onChange}>
          {children}
        </span>
      )}
    </div>
  );
};

export default Checkbox;
