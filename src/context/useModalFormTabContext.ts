import { useContext } from "react";
import { ModalFormTabContext } from "@/context/ModalFormTabContext.tsx";

export const useModalFormTabContext = () => {
  const context = useContext(ModalFormTabContext);

  if (!context) throw new Error("Context cannot be used outside");

  return context;
};
