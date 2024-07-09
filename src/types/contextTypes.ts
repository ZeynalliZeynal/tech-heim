export type DropdownContextType = {
  isNavMenuOpen: boolean;
  setIsNavMenuOpen: (isOpen: boolean) => void;
};

export type ModalContextType = {
  openWindowName: string;
  openWindow: (opens: string) => void;
  closeWindow: () => void;
} | null;

export type MenuDropdownContextType = {
  currentMenu: string;
  openMenu: (name: string) => void;
  closeMenu: () => void;
};
