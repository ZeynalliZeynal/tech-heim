import { Link } from "react-router-dom";
import { useState } from "react";

import { useProductDetails } from "../../hooks/useProductDetails.ts";

import ProductCardColors from "./ProductCardColors.tsx";
import ProductCardImage from "./ProductCardImage.tsx";
import ProductCardBadges from "./ProductCardBadges.tsx";
import ProductCardBottom from "./ProductCardBottom.tsx";

const ProductCard = ({ product }: { product: any }) => {
  const { detail, brand, colors, isPending } = useProductDetails(product.id);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="w-[300px]">
      <Link
        to="/"
        className="h-[370px] rounded-md shadow-sm hover:shadow-md w-full p-4 justify-between items-start flex-col group relative"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <ProductCardImage detail={detail} brand={brand} />
        <ProductCardColors colors={colors} />
        <ProductCardBadges product={product} />
        <ProductCardBottom product={product} isHovering={isHovering} />
      </Link>
    </div>
  );
};

export default ProductCard;
