import { cloneElement, ReactElement, ReactNode } from 'react';
import WindowComponent from './WindowComponent.tsx';
import { useWindowComponentContext } from '../hooks/useWindowComponentContext.ts';

const Modal = ({ children }: { children: ReactNode }) => {
  return <WindowComponent>{children}</WindowComponent>;
};

const Window = ({ children, name }: { children: ReactNode; name: string }) => {
  return (
    <WindowComponent.Window zIndex={1000} name={name}>
      <div className='rounded-md px-12 py-8 bg-white text-neutral-gray-dark'>
        <div className='flex flex-col gap-6'>{children}</div>
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

Modal.Open = WindowComponent.Toggle;
Modal.Head = WindowComponent.Head;
Modal.Window = Window;
Modal.Panel = Panel;

export default Modal;
