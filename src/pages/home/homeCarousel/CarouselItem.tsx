import { Link } from "react-router-dom";

import { formatCurrency } from "../../../helpers/converters.ts";
import { useProductDetails } from "../../../hooks/useProductDetails.ts";

const CarouselItem = ({ product }: any) => {
  const { detail: productDetail, brand: productBrand } = useProductDetails(
    product?.id,
  );

  return (
    <Link
      to="/"
      className="relative flex flex-col gap-3 bg-white rounded-sm py-3 px-2"
    >
      <span className="inline-flex justify-center absolute top-2 left-0 text-body-sm bg-secondary-100 text-secondary rounded-tr-md rounded-br-md w-[42px] py-1.5">
        {product.discount_percent}%
      </span>
      <span className="h-[150px]">
        <img
          src={productDetail?.img_url}
          alt={productBrand?.name}
          className="object-contain"
        />
      </span>
      <p className="text-body-xs w-full">
        <b>{productBrand?.name}</b>, {productDetail?.model}
      </p>
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
