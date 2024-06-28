import { HiStar } from "react-icons/hi2";
import { ProductTypes } from "../../types/productTypes.ts";

const ProductCardBadges = ({ product }: { product: ProductTypes }) => {
  return (
    <div className="flex flex-col absolute top-2 left-0 text-body-sm gap-2">
      {product.discount_percent && (
        <span className="inline-flex justify-center bg-secondary-100 text-secondary rounded-tr-md rounded-br-md w-[42px] py-1.5">
          {product.discount_percent}%
        </span>
      )}{" "}
      <span className="inline-flex justify-center items-center gap-0.5 bg-primary-50 text-primary-500 rounded-tr-md rounded-br-md w-min py-1.5 px-1.5 font-bold">
        <span className="size-3">
          <HiStar />
        </span>{" "}
        {product.rating}
      </span>
    </div>
  );
};

export default ProductCardBadges;
