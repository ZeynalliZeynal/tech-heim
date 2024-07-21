import { motion } from "framer-motion";
import Button from "../Button.tsx";
import { CiHeart } from "react-icons/ci";
import ProductAddToCart from "@/features/cart/ProductAddToCart.tsx";
import { formatCurrency } from "@/helpers/converters.ts";

interface IProductCardBottom {
  isHovering: boolean;
  selectedColor?: string;
  product: DProducts;
}

const ProductCardBottom = ({
  isHovering,
  product,
  selectedColor,
}: IProductCardBottom) => {
  return (
    <>
      <div className="flex flex-col w-full overflow-hidden lg:hidden gap-4">
        <div className="w-full flex justify-between items-center md:text-body-lg text-body-sm">
          {Boolean(product.discount_percent) && (
            <del className="text-neutral-gray-700">
              {formatCurrency(product.price)}
            </del>
          )}{" "}
          {formatCurrency(product.price, product.discount_percent)}
        </div>
        <div className="flex items-center w-full justify-between">
          <ProductAddToCart
            productId={product.id}
            selectedColor={selectedColor}
          />

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
          {Boolean(product.discount_percent) && (
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
