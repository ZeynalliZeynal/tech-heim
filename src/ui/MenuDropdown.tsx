import React, {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { MenuDropdownContextType } from "../types/contextTypes.ts";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../hooks/useOutsideClick.ts";
import Overlay from "./Overlay.tsx";
import { useHideScroll } from "../hooks/useHideScroll.ts";

const MenuDropdownContext = createContext<MenuDropdownContextType | null>(null);

const MenuDropdown = ({ children }: { children: ReactNode }) => {
  const [currentMenu, setCurrentMenu] = useState("");

  const closeMenu = () => setCurrentMenu("");
  const openMenu = setCurrentMenu;

  useHideScroll(Boolean(currentMenu));

  return (
    <MenuDropdownContext.Provider
      value={{
        currentMenu,
        openMenu,
        closeMenu,
      }}
    >
      {children}
    </MenuDropdownContext.Provider>
  );
};

const useMenuDropdownContext = () => {
  const context = useContext(MenuDropdownContext);
  if (!context)
    throw new Error("Menu Dropdown context is used outside the provider.");
  return context;
};

const Toggle = ({
  name,
  children,
}: {
  name: string;
  children: ReactElement;
}) => {
  const { openMenu, currentMenu, closeMenu } = useMenuDropdownContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    currentMenu === "" || currentMenu !== name ? openMenu(name) : closeMenu();
  };

  return cloneElement(children, { onClick: handleClick });
};

const Menu = ({ name, children }: { name: string; children: ReactNode }) => {
  const { currentMenu, closeMenu } = useMenuDropdownContext();

  const ref = useOutsideClick(closeMenu, false);

  if (currentMenu !== name) return null;

  return createPortal(
    <>
      <Overlay />
      <div className="fixed left-0 right-0 z-[500] top-16">
        <div className="container flex justify-end">
          <div
            ref={ref}
            className="rounded-md shadow-md bg-white p-4 animate-fadeIn"
          >
            {children}
          </div>
        </div>
      </div>
    </>,
    document.body,
  );
};

MenuDropdown.Toggle = Toggle;
MenuDropdown.Menu = Menu;

export default MenuDropdown;
