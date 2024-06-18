import { motion } from "framer-motion";

const Overlay = ({
  isActive,
  zIndex,
}: {
  isActive: boolean;
  zIndex: number;
}) => {
  return (
    <motion.div
      animate={isActive ? "active" : "initial"}
      variants={{
        active: {
          zIndex,
          opacity: 1,
        },
      }}
      initial={{
        zIndex: -1,
        opacity: 0,
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 500,
        backgroundColor: "rgb(0, 0, 0, 0.6)",
      }}
    />
  );
};

export default Overlay;
