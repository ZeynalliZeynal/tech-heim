import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import { DropdownContextType } from '../types/contextTypes.ts';

const DropdownContext = createContext<DropdownContextType | null>(null);

const DropdownProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
  const [isCartMenuOpen, setIsCartMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isNavMenuOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isNavMenuOpen]);

  return (
    <DropdownContext.Provider
      value={{
        isNavMenuOpen,
        setIsCartMenuOpen,
        isCartMenuOpen,
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
    throw new Error('Dropdown Context is used outside the provider');
  return context;
};

export { DropdownProvider, useDropdown };
