import { motion } from "framer-motion";
import { useState } from "react";
import { getBorderColor } from "../../helpers/tinycolorFuncs.ts";
import { ProductColorTypes } from "../../types/productTypes.ts";

const ProductCardColors = ({
  colors,
}: {
  colors: ProductColorTypes[] | undefined;
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
          className="cursor-auto size-4 border rounded-full relative"
          onMouseLeave={handleMouseLeave}
          onMouseEnter={() => handleMouseEnter(i)}
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
