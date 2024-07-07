import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { IoIosClose } from "react-icons/io";

import { ModalContextType } from "../types/contextTypes";
import Button from "./Button";
import { useOutsideClick } from "../hooks/useOutsideClick";

const ModalContext = createContext<ModalContextType>(null);

const Modal = ({ children }: { children: ReactNode }) => {
  const [openWindowName, setOpenWindowName] = useState<string>("");
  const openWindow = setOpenWindowName;
  const closeWindow = () => setOpenWindowName("");

  useEffect(() => {
    if (openWindowName) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [openWindowName]);

  return (
    <ModalContext.Provider
      value={{
        openWindowName,
        openWindow,
        closeWindow,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);

  if (!context)
    throw new Error("Component cannot be used outside the provider");

  return context;
};

const Open = ({
  children,
  opens,
}: {
  children: ReactElement<{ onClick: () => void }>;
  opens: string;
}) => {
  const { openWindow } = useModalContext();

  return cloneElement(children, { onClick: () => openWindow(opens) });
};

const Window = ({ children, name }: { children: ReactNode; name: string }) => {
  const { openWindowName, closeWindow } = useModalContext();
  const ref = useOutsideClick(closeWindow);

  if (openWindowName !== name) return null;

  return createPortal(
    <div className="fixed flex justify-center items-center inset-0 w-full h-screen bg-black/60 transition duration-500 z-[1000] animate-fadeIn opacity-0 scale-110">
      <div
        ref={ref}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md px-12 py-8 bg-white text-neutral-gray-dark"
      >
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </div>,
    document.body,
  );
};

const Panel = ({
  children,
}: {
  children: ReactElement<{ onCloseModal: () => void }>;
}) => {
  const { closeWindow } = useModalContext();

  return <div>{cloneElement(children, { onCloseModal: closeWindow })}</div>;
};

const Head = ({ children }: { children: ReactNode }) => {
  const { closeWindow } = useModalContext();

  return (
    <div className="flex justify-between">
      <h5>{children}</h5>
      <Button size="icon" onClick={closeWindow}>
        <IoIosClose />
      </Button>
    </div>
  );
};

Modal.Open = Open;
Modal.Head = Head;
Modal.Window = Window;
Modal.Panel = Panel;

export default Modal;
