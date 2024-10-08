import { useContext } from 'react';
import { WindowComponentContext } from '../ui/WindowComponent.tsx';

export const useWindowComponentContext = () => {
  const context = useContext(WindowComponentContext);

  if (!context)
    throw new Error('Component cannot be used outside the provider');

  return context;
};
