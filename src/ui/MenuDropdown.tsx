import React, { cloneElement, ReactElement, ReactNode } from "react";
import WindowComponent from "../context/WindowComponent.tsx";
import { useWindowComponentContext } from "../hooks/useWindowComponentContext.ts";

const MenuDropdown = ({ children }: { children: ReactNode }) => {
  return <WindowComponent type="dropdown">{children}</WindowComponent>;
};
const Toggle = ({
  name,
  children,
}: {
  name: string;
  children: ReactElement;
}) => {
  const { open, currentWindow, close } = useWindowComponentContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    currentWindow === "" || currentWindow !== name ? open(name) : close();
  };

  return cloneElement(children, { onClick: handleClick });
};

const Menu = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <WindowComponent.Window zIndex={500} name={name}>
      <div className="rounded-b-md shadow-md bg-white p-4">{children}</div>
    </WindowComponent.Window>
  );
};

MenuDropdown.Toggle = Toggle;
MenuDropdown.Menu = Menu;

export default MenuDropdown;
