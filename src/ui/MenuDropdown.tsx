import React, {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from 'react';
import { MenuDropdownContextType } from '../types/contextTypes.ts';
import { createPortal } from 'react-dom';
import Container from './Container.tsx';

const MenuDropdownContext = createContext<MenuDropdownContextType | null>(null);

const MenuDropdown = ({ children }: { children: ReactNode }) => {
  const [currentMenu, setCurrentMenu] = useState('');
  const [position, setPosition] = useState(null);

  const closeMenu = () => setCurrentMenu('');
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
    throw new Error('Menu Dropdown context is used outside the provider.');
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
    const rect = e.target?.closest('button').getBoundingClientRect();
    console.log(rect.height);
    setPosition({
      x: window.innerWidth - rect.x - rect.width,
      y: rect.y + rect.height + 8,
    });
    currentMenu === '' || currentMenu !== name ? openMenu(name) : closeMenu();
  };

  return cloneElement(children, { onClick: handleClick });
};

const Menu = ({ name, children }: { name: string; children: ReactNode }) => {
  const { currentMenu } = useMenuDropdownContext();

  if (currentMenu !== name) return null;

  return createPortal(
    <div className='fixed left-0 right-0 z-[900] top-[100px]'>
      <div className='container flex justify-end'>
        <div className='border rounded-md shadow-md bg-white'>{children}</div>
      </div>
    </div>,
    document.body
  );
};

MenuDropdown.Toggle = Toggle;
MenuDropdown.Menu = Menu;

export default MenuDropdown;
