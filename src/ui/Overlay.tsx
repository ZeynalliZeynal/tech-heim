import { createPortal } from "react-dom";

const Overlay = () => {
  return createPortal(
    <div className="fixed inset-0 w-full h-screen bg-black/60 transition duration-500 z-[500] animate-fadeIn opacity-0 scale-110" />,
    document.body,
  );
};

export default Overlay;
