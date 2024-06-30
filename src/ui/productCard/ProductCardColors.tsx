import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { getBorderColor } from "../../helpers/tinycolorFuncs.ts";
import { ProductColorTypes } from "../../types/productTypes.ts";
import classNames from "classnames";

const ProductCardColors = ({
  colors,
}: {
  colors: ProductColorTypes[] | undefined;
}) => {
  const [tooltipIndex, setTooltipIndex] = useState(-1);
  const tooltipRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [tooltipPosition, setTooltipPosition] = useState<"left" | "right">(
    "right",
  );

  const handleMouseLeave = () => {
    setTooltipIndex(-1);
  };

  const handleMouseEnter = (i: number) => {
    setTooltipIndex(i);
    console.log(tooltipPosition);

    const tooltipEl = tooltipRefs.current[i];
    if (tooltipEl) {
      const { right, left } = tooltipEl.getBoundingClientRect();
      console.log(right, window.innerWidth);
      const overflowRight = right > window.innerWidth;
      const overflowLeft = left < 0;
      if (overflowRight) {
        setTooltipPosition("left");
      } else if (overflowLeft) {
        setTooltipPosition("right");
      } else {
        setTooltipPosition("right");
      }
    }
  };

  return (
    <div className="flex flex-col gap-2 absolute right-4 top-1/3 -translate-y-1/3 z-50">
      {colors?.map((color, i) => (
        <div
          key={color.id}
          className="cursor-auto size-3 border rounded-full relative"
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
              x: 15,
              y: "-50%",
              opacity: 0,
              visibility: "hidden",
            }}
            variants={{
              active: {
                x: 0,
                y: "-50%",
                scale: 1,
                opacity: 1,
                visibility: "visible",
              },
            }}
            transition={{ duration: 0.4, type: "spring" }}
            animate={tooltipIndex === i ? "active" : "initial"}
            className={classNames(
              "absolute pointer-events-none top-1/2 text-body-sm w-max bg-white px-1.5 py-1 rounded-md shadow-lg",
              {
                "left-[calc(100%+1rem)]": tooltipPosition === "right",
                "right-[calc(100%+1rem)]": tooltipPosition === "left",
              },
            )}
            ref={(el) => (tooltipRefs.current[i] = el)}
          >
            {color.name}
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default ProductCardColors;
