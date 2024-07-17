import { createContext, ReactNode, useState } from "react";

export const ModalFormTabContext = createContext<{
  activeTab?: "login" | "signup";
  toggleTab: () => void;
} | null>(null);

const ModalFormTabProvider = ({ children }: { children: ReactNode }) => {
  const [activeTab, setActiveTab] = useState<"login" | "signup">("login");
  const toggleTab = () => {
    if (activeTab === "login") setActiveTab("signup");
    else setActiveTab("login");
  };

  return (
    <ModalFormTabContext.Provider
      value={{
        activeTab,
        toggleTab,
      }}
    >
      {children}
    </ModalFormTabContext.Provider>
  );
};

export default ModalFormTabProvider;
