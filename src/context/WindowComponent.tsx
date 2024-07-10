import {
  cloneElement,
  createContext,
  ReactElement,
  ReactNode,
  useReducer,
} from "react";
import { WindowComponentContextType } from "../types/contextTypes.ts";
import { useHideScroll } from "../hooks/useHideScroll.ts";
import { useWindowComponentContext } from "../hooks/useWindowComponentContext.ts";
import { useOutsideClick } from "../hooks/useOutsideClick.ts";
import { createPortal } from "react-dom";
import classNames from "classnames";
import Button from "../ui/Button.tsx";
import { IoIosClose } from "react-icons/io";

enum WindowActionKind {
  open = "window/open",
  close = "window/close",
  animate = "window/animate",
}

type WindowActionType = {
  type: WindowActionKind;
  payload?: string;
};

type WindowStateType = {
  currentWindow?: string;
  isAnimating: boolean;
};

const initialState: WindowStateType = {
  currentWindow: "",
  isAnimating: false,
};

const reducer = (
  state: WindowStateType,
  action: WindowActionType,
): WindowStateType => {
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

export const WindowComponentContext =
  createContext<WindowComponentContextType>(null);

const WindowComponent = ({
  children,
  type = "modal",
}: {
  children: ReactNode;
  type?: "dropdown" | "modal";
}) => {
  const [{ currentWindow, isAnimating }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const open = (name: string) =>
    dispatch({ type: WindowActionKind.open, payload: name });

  const close = () => {
    dispatch({ type: WindowActionKind.animate });
    setTimeout(() => {
      dispatch({ type: WindowActionKind.close });
    }, 300);
  };

  useHideScroll(Boolean(currentWindow));

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
        className={classNames({
          "container flex justify-end": type === "dropdown",
          "flex justify-center items-center h-full": type === "modal",
        })}
      >
        {cloneElement(children, { ref })}
      </div>
    </div>,
    document.body,
  );
};

const Head = ({ children }: { children: ReactElement }) => {
  const { close } = useWindowComponentContext();

  return (
    <div className="flex justify-between">
      {children}{" "}
      <Button size="icon" onClick={close}>
        <IoIosClose />
      </Button>
    </div>
  );
};

WindowComponent.Window = Window;

export default WindowComponent;
