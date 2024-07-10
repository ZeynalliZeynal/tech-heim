import { ReactNode } from "react";
import WindowComponent from "../context/WindowComponent.tsx";

const Drawer = ({ children }: { children: ReactNode }) => {
  return <WindowComponent>{children}</WindowComponent>;
};

export default Drawer;
