export type DropdownContextType = {
  isNavMenuOpen: boolean;
  setIsNavMenuOpen: (isOpen: boolean) => void;

  isCartMenuOpen: boolean;
  setIsCartMenuOpen: (isOpen: boolean) => void;
};

export type ModalContextType = {
  openWindowName: string;
  openWindow: (opens: string) => void;
  closeWindow: () => void;
} | null;
