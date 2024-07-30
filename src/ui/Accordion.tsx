import { ReactNode } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useWindowComponentContext } from "../hooks/useWindowComponentContext";
import WindowComponent from "@/ui/WindowComponent.tsx";
import Spinner from "./Spinner";
import { ArrowDownIcon } from "@/ui/svgs/icons/arrowIcons.tsx";

const Accordion = ({ children }: { children: ReactNode }) => {
  return <WindowComponent hideScroll>{children}</WindowComponent>;
};
const Body = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col overflow-hidden w-full">{children}</div>;
};

const Head = ({
  children,
  name,
  loading,
}: {
  children: ReactNode;
  name: string;
  loading: boolean;
}) => {
  const { currentWindow, open, close } = useWindowComponentContext();
  const handleClick = () => {
    currentWindow === "" || currentWindow !== name ? open(name) : close();
  };

  return (
    <div className="flex w-full justify-between">
      {children}{" "}
      {loading ? (
        <Spinner color="black" />
      ) : (
        <button
          className={classNames("size-5", {
            "rotate-180 text-primary": currentWindow === name,
          })}
          onClick={handleClick}
        >
          <ArrowDownIcon />
        </button>
      )}
    </div>
  );
};

const Item = ({ children, name }: { children: ReactNode; name: string }) => {
  const { currentWindow, isAnimating } = useWindowComponentContext();

  if (currentWindow !== name) return null;

  return (
    <motion.div
      animate={
        !isAnimating
          ? {
              gridTemplateRows: ["0fr", "1fr"],
            }
          : { gridTemplateRows: ["1fr", "0fr"] }
      }
      transition={{
        duration: 0.3,
      }}
      className="grid"
    >
      <div className="overflow-hidden">{children}</div>
    </motion.div>
  );
};

Accordion.Body = Body;
Accordion.Head = Head;
Accordion.Item = Item;

export default Accordion;
