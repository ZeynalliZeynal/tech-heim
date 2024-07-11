import { ReactNode } from 'react';
import WindowComponent from './WindowComponent.tsx';

const MenuDropdown = ({ children }: { children: ReactNode }) => {
  return <WindowComponent type='dropdown'>{children}</WindowComponent>;
};

const Menu = ({ name, children }: { name: string; children: ReactNode }) => {
  return (
    <WindowComponent.Window zIndex={500} name={name}>
      <div className='rounded-b-md shadow-md bg-white p-4'>{children}</div>
    </WindowComponent.Window>
  );
};

MenuDropdown.Toggle = WindowComponent.Toggle;
MenuDropdown.Menu = Menu;

export default MenuDropdown;
