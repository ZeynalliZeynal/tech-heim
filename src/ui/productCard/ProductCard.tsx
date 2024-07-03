import { Link } from "react-router-dom";
import { useState } from "react";

import { useProductDetails } from "../../hooks/useProductDetails.ts";

import ProductCardColors from "./ProductCardColors.tsx";
import ProductCardImage from "./ProductCardImage.tsx";
import ProductCardBadges from "./ProductCardBadges.tsx";
import ProductCardBottom from "./ProductCardBottom.tsx";
import { ProductTypes } from "../../types/productTypes.ts";

const ProductCard = ({ product }: { product: ProductTypes }) => {
  const { detail, brand, colors } = useProductDetails(product.id);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <Link
      to="/"
      className="h-[370px] rounded-md shadow-sm hover:shadow-md p-4 justify-between items-start flex-col w-full group relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <ProductCardImage detail={detail} brand={brand} />
      <ProductCardColors colors={colors} />
      <ProductCardBadges product={product} />
      <ProductCardBottom product={product} isHovering={isHovering} />
    </Link>
  );
};

export default ProductCard;
