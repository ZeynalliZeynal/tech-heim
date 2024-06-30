import { motion } from "framer-motion";
import { formatCurrency } from "../../helpers/converters.ts";
import Button from "../Button.tsx";
import { AddToCartIcon } from "../svgs/icons.tsx";
import { CiHeart } from "react-icons/ci";
import { ProductTypes } from "../../types/productTypes.ts";

const ProductCardBottom = ({
  isHovering,
  product,
}: {
  isHovering: boolean;
  product: ProductTypes;
}) => {
  return (
    <div className="flex flex-col h-12 w-full overflow-hidden">
      <motion.div
        animate={isHovering ? "active" : "initial"}
        variants={{
          active: {
            y: "-100%",
          },
        }}
        initial={{
          y: 0,
        }}
        className="w-full flex justify-between items-center text-body-lg min-h-12"
      >
        {product.discount_percent && (
          <del className="text-neutral-gray-700">
            {formatCurrency(product.price)}
          </del>
        )}{" "}
        {formatCurrency(product.price, product.discount_percent)}
      </motion.div>
      <motion.div
        animate={isHovering ? "active" : "initial"}
        variants={{
          active: {
            y: "-100%",
          },
        }}
        initial={{
          y: 0,
        }}
        className="min-h-12 flex items-center w-full justify-between"
      >
        <Button size="sm" type="primary-outline">
          <AddToCartIcon />
          Add to Cart
        </Button>

        <Button size="icon" className="text-primary">
          <CiHeart />
        </Button>
      </motion.div>
    </div>
  );
};

export default ProductCardBottom;
