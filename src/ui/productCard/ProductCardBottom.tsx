import { motion } from "framer-motion";
import { formatCurrency } from "../../helpers/converters.ts";
import Button from "../Button.tsx";
import { CiHeart } from "react-icons/ci";
import { ProductTypes } from "../../types/productTypes.ts";
import ProductAddToCart from "@/features/cart/ProductAddToCart.tsx";

const ProductCardBottom = ({
  isHovering,
  product,
  selectedColor,
}: {
  isHovering: boolean;
  selectedColor?: string;
  product: ProductTypes;
}) => {
  return (
    <>
      <div className="flex flex-col w-full overflow-hidden lg:hidden gap-4">
        <div className="w-full flex justify-between items-center md:text-body-lg text-body-sm">
          {product.discount_percent && (
            <del className="text-neutral-gray-700">
              {formatCurrency(product.price)}
            </del>
          )}{" "}
          {formatCurrency(product.price, product.discount_percent)}
        </div>
        <div className="flex items-center w-full justify-between">
          <ProductAddToCart productId={product.id} />

          <Button size="icon" className="text-primary">
            <CiHeart />
          </Button>
        </div>
      </div>
      <div className="lg:flex hidden flex-col h-12 w-full overflow-hidden">
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
          className="w-full flex justify-between items-center md:text-body-lg text-body-sm min-h-12"
        >
          {product.discount_percent > 0 && (
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
          <ProductAddToCart
            productId={product.id}
            selectedColor={selectedColor}
          />

          <Button size="icon" className="text-primary">
            <CiHeart />
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default ProductCardBottom;
