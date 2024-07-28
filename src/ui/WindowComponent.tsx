import React, {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useCallback,
  useReducer,
} from "react";
import { useWindowComponentContext } from "../hooks/useWindowComponentContext.ts";
import { useOutsideClick } from "../hooks/useOutsideClick.ts";
import { createPortal } from "react-dom";
import classNames from "classnames";
import Button from "./Button.tsx";
import { IoIosClose } from "react-icons/io";

enum WindowActionKind {
  open = "window/open",
  close = "window/close",
  animate = "window/animate",
}

interface IWindowContext {
  currentWindow?: string;
  open: (opens: string) => void;
  close: () => void;
  isAnimating: boolean;
  type?: string;
}

interface IWindowAction {
  type: WindowActionKind;
  payload?: string;
}

interface IWindowState {
  currentWindow?: string;
  isAnimating: boolean;
}

const initialState: IWindowState = {
  currentWindow: "",
  isAnimating: false,
};

const reducer = (state: IWindowState, action: IWindowAction): IWindowState => {
  switch (action.type) {
    case WindowActionKind.open:
      return { ...state, currentWindow: action.payload, isAnimating: false };
    case WindowActionKind.close:
      return { ...state, currentWindow: "", isAnimating: false };
    case WindowActionKind.animate:
      return { ...state, isAnimating: true };
    default:
      return state;
  }
};

export const WindowComponentContext = createContext<IWindowContext | null>(
  null,
);

const WindowComponent = ({
  children,
  type = "modal",
  hideScroll,
}: {
  children: ReactNode;
  hideScroll?: true;
  type?: "dropdown" | "modal" | "drawer";
}) => {
  const [{ currentWindow, isAnimating }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const open = (name: string) => {
    if (!hideScroll) document.body.style.overflow = "hidden";
    dispatch({ type: WindowActionKind.open, payload: name });
  };

  const close = useCallback(() => {
    document.body.style.overflow = "";
    dispatch({ type: WindowActionKind.animate });
    setTimeout(() => {
      dispatch({ type: WindowActionKind.close });
    }, 300);
  }, []);

  return (
    <WindowComponentContext.Provider
      value={{
        currentWindow,
        isAnimating,
        open,
        close,
        type,
      }}
    >
      {children}
    </WindowComponentContext.Provider>
  );
};

const Window = ({
  children,
  name,
  zIndex = 1000,
}: {
  children: ReactElement;
  name: string;
  zIndex: number;
}) => {
  const { currentWindow, close, isAnimating, type } =
    useWindowComponentContext();
  const ref = useOutsideClick(close);

  if (currentWindow !== name) return null;

  return createPortal(
    <div
      className={classNames("fixed inset-0 w-full h-screen bg-black/60", {
        "animate-fadeIn": !isAnimating,
        "animate-fadeOut": isAnimating,
        "top-16": type === "dropdown",
      })}
      style={{
        zIndex,
      }}
    >
      <div
        className={classNames("flex", {
          "sm:container sm:h-auto w-dvw h-dvh justify-end": type === "dropdown",
          "justify-center items-center h-full": type === "modal",
          "justify-start h-full": type === "drawer",
        })}
      >
        {cloneElement(children, { ref })}
      </div>
    </div>,
    document.body,
  );
};

const Toggle = ({
  name,
  children,
}: {
  name: string;
  children: ReactElement;
}) => {
  const { open, currentWindow, close } = useWindowComponentContext();
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    currentWindow === "" || currentWindow !== name ? open(name) : close();
  };

  return cloneElement(children, { onClick: handleClick });
};

const Head = ({ children }: { children: ReactElement }) => {
  const { close } = useWindowComponentContext();

  return (
    <div className="flex justify-between items-center sticky -top-4 py-4 bg-white z-50">
      {children}{" "}
      <Button size="icon" onClick={close}>
        <IoIosClose />
      </Button>
    </div>
  );
};

WindowComponent.Window = Window;
WindowComponent.Head = Head;
WindowComponent.Toggle = Toggle;

export default WindowComponent;
