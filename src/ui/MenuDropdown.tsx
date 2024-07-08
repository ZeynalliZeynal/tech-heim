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
  const [position, setPosition] = useState(null);

  const closeMenu = () => setCurrentMenu("");
  const openMenu = setCurrentMenu;

  useHideScroll(Boolean(currentMenu));

  return (
    <MenuDropdownContext.Provider
      value={{
        currentMenu,
        position,
        setPosition,
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
  const { openMenu, currentMenu, closeMenu, setPosition } =
    useMenuDropdownContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    console.log("clicked");
    const rect = e.target?.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - rect.x - rect.width,
      y: rect.y + rect.height + 8,
    });
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
      <div className="fixed left-0 right-0 z-[500] top-[84px]">
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
