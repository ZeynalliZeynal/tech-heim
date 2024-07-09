export type DropdownContextType = {
  isNavMenuOpen: boolean;
  setIsNavMenuOpen: (isOpen: boolean) => void;
};

export type WindowComponentContextType = {
  currentWindow?: string;
  open: (opens: string) => void;
  close: () => void;
  isAnimating: boolean;
} | null;

export type MenuDropdownContextType = {
  currentMenu: string;
  openMenu: (name: string) => void;
  closeMenu: () => void;
};
