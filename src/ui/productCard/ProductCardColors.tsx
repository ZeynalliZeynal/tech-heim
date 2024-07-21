import { motion } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";
import classNames from "classnames";
import { getBorderColor } from "@/helpers/tinycolorFuncs.ts";

const ProductCardColors = ({
  colors,
  selectedColor,
  setSelectedColor,
}: {
  colors: DColors[] | undefined;
  selectedColor: number;
  setSelectedColor: Dispatch<SetStateAction<number>>;
}) => {
  const [tooltipIndex, setTooltipIndex] = useState(-1);

  const handleMouseLeave = () => {
    setTooltipIndex(-1);
  };

  const handleMouseEnter = (i: number) => {
    setTooltipIndex(i);
  };

  return (
    <div className="flex flex-col gap-2 absolute right-4 top-1/3 -translate-y-1/3 z-50">
      {colors?.map((color, i) => (
        <div
          key={color.id}
          className={classNames(
            "cursor-auto size-4 border rounded-full relative",
            {
              "outline outline-primary": selectedColor === i,
            },
          )}
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => handleMouseEnter(i)}
          onClick={() => setSelectedColor(i)}
          style={{
            background: color.hex_code,
            borderColor: getBorderColor(color.hex_code),
          }}
        >
          <motion.div
            initial={{
              scale: 0.9,
              y: "-50%",
              opacity: 0,
              visibility: "hidden",
            }}
            variants={{
              active: {
                scale: 1,
                y: "-50%",
                opacity: 1,
                visibility: "visible",
              },
            }}
            transition={{ duration: 0.4, type: "spring" }}
            animate={tooltipIndex === i ? "active" : "initial"}
            className="absolute pointer-events-none top-1/2 right-[calc(100%+0.5rem)] text-body-sm w-max bg-white px-1.5 py-1 rounded-md shadow-lg"
          >
            {color.name}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardColors;
