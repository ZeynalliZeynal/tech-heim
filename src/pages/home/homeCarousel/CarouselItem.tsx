import { Link } from "react-router-dom";

import { ProductTypes } from "@/types/productTypes.ts";
import { formatCurrency } from "@/helpers/converters.ts";

const CarouselItem = ({ product }: { product: ProductTypes }) => {
  return (
    <Link
      to="/"
      className="relative flex flex-col justify-between bg-white rounded-sm py-3 px-2 h-[255px]"
    >
      <span className="inline-flex justify-center absolute top-2 left-0 text-body-sm bg-secondary-100 text-secondary rounded-tr-md rounded-br-md w-[42px] py-1.5">
        {product.discount_percent}%
      </span>
      <div className="flex items-center flex-col gap-3">
        <span className="h-[150px]">
          <img
            src={product.product_details?.img_url}
            alt={product.product_details.product_brands?.name}
            className="object-contain"
          />
        </span>
        <p className="text-body-xs w-full">
          <b>{product.product_details.product_brands?.name}</b>,{" "}
          {product.product_details?.model}
        </p>
      </div>
      <div className="w-full flex justify-between text-body-sm">
        <del className="text-neutral-gray-700">
          {formatCurrency(product.price)}
        </del>
        <span>{formatCurrency(product.price, product.discount_percent)}</span>
      </div>
    </Link>
  );
};

export default CarouselItem;
