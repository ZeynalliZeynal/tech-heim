import React, { createContext, ReactNode, useContext, useState } from "react";
import { useHideScroll } from "@/hooks/useHideScroll.ts";

interface IDropdownContext {
  isNavMenuOpen: boolean;
  setIsNavMenuOpen: (isOpen: boolean) => void;
}

const DropdownContext = createContext<IDropdownContext | null>(null);

const DropdownProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  useHideScroll(isNavMenuOpen);

  return (
    <DropdownContext.Provider
      value={{
        isNavMenuOpen,
        setIsNavMenuOpen,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context)
    throw new Error("Dropdown Context is used outside the provider");
  return context;
};

export { DropdownProvider, useDropdown };
