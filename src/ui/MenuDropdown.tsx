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

const MenuDropdownContext = createContext<MenuDropdownContextType | null>(null);

const MenuDropdown = ({ children }: { children: ReactNode }) => {
  const [currentMenu, setCurrentMenu] = useState("");
  const [position, setPosition] = useState(null);

  const closeMenu = () => setCurrentMenu("");
  const openMenu = setCurrentMenu;

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
    const rect = e.target?.closest("button").getBoundingClientRect();
    console.log(rect.height);
    setPosition({
      x: window.innerWidth - rect.x - rect.width,
      y: rect.y + rect.height + 8,
    });
    currentMenu === "" || currentMenu !== name ? openMenu(name) : closeMenu();
  };

  return cloneElement(children, { onClick: handleClick });
};

const Menu = ({ name, children }: { name: string; children: ReactNode }) => {
  const { currentMenu, position } = useMenuDropdownContext();
  if (currentMenu !== name) return null;

  return createPortal(
    <div
      className="fixed z-[900] bg-white rounded-md shadow-md -translate-x-1/2 -translate-y-1/2"
      style={{
        right: position?.x + "px",
        top: position?.y + "px",
      }}
    >
      {currentMenu} {children}
    </div>,
    document.body,
  );
};

MenuDropdown.Toggle = Toggle;
MenuDropdown.Menu = Menu;

export default MenuDropdown;
