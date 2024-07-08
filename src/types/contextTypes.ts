import { Dispatch, Ref, SetStateAction } from "react";

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
  position: {
    x: number;
    y: number;
  } | null;
  setPosition: Dispatch<SetStateAction<null | { x: number; y: number }>>;
  openMenu: (name: string) => void;
  closeMenu: () => void;
  toggleRef: Ref<HTMLButtonElement>;
};
