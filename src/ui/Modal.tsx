import { cloneElement, ReactElement, ReactNode } from "react";
import { IoIosClose } from "react-icons/io";
import Button from "./Button";
import WindowComponent from "../context/WindowComponent.tsx";
import { useWindowComponentContext } from "../hooks/useWindowComponentContext.ts";

const Modal = ({ children }: { children: ReactNode }) => {
  return <WindowComponent>{children}</WindowComponent>;
};

const Open = ({
  children,
  opens,
}: {
  children: ReactElement<{ onClick: () => void }>;
  opens: string;
}) => {
  const { open } = useWindowComponentContext();

  return cloneElement(children, { onClick: () => open(opens) });
};

const Window = ({ children, name }: { children: ReactNode; name: string }) => {
  return (
    <WindowComponent.Window zIndex={1000} name={name}>
      <div className="rounded-md px-12 py-8 bg-white text-neutral-gray-dark">
        <div className="flex flex-col gap-6">{children}</div>
      </div>
    </WindowComponent.Window>
  );
};

const Panel = ({
  children,
}: {
  children: ReactElement<{ onCloseModal: () => void }>;
}) => {
  const { close } = useWindowComponentContext();

  return <div>{cloneElement(children, { onCloseModal: close })}</div>;
};

const Head = ({ children }: { children: ReactNode }) => {
  const { close } = useWindowComponentContext();

  return (
    <div className="flex justify-between">
      <h5>{children}</h5>
      <Button size="icon" onClick={close}>
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
