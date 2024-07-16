import { createContext, ReactNode, useContext, useState } from "react";

const InputContext = createContext<{
  isShown: boolean;
  togglePassword: () => void;
} | null>(null);

const InputProvider = ({ children }: { children: ReactNode }) => {
  const [isShown, setIsShown] = useState(false);
  const togglePassword = () => {
    setIsShown((prevState) => !prevState);
  };
  return (
    <InputContext.Provider
      value={{
        isShown,
        togglePassword,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

export const useInputContext = () => {
  const context = useContext(InputContext);

  if (!context) throw new Error("Context cannot be used outside");

  return context;
};

export default InputProvider;
