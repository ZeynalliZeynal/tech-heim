import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductCardColors from "./ProductCardColors.tsx";
import ProductCardImage from "./ProductCardImage.tsx";
import ProductCardBadges from "./ProductCardBadges.tsx";
import ProductCardBottom from "./ProductCardBottom.tsx";
import { useProductColors } from "@/features/products/useProductDetails.ts";
import useWindowSize from "@/hooks/useWindowSize.ts";
import { ProductTypes } from "@/types/productTypes.ts";

const ProductCard = ({ product }: { product: ProductTypes }) => {
  const { colors } = useProductColors(product.id);
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width < 768) setIsHovering(false);
  }, [width]);

  return (
    <Link
      to="/"
      className="md:min-h-[370px] md:h-full min-h-[280px] rounded-md shadow-sm hover:shadow-md p-4 justify-between sm:items-start items-center flex-col w-full group relative"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <ProductCardImage
        detail={product.product_details}
        brand={product.product_details.product_brands}
      />
      <ProductCardColors colors={colors} />
      <ProductCardBadges product={product} />
      <ProductCardBottom product={product} isHovering={isHovering} />
    </Link>
  );
};

export default ProductCard;
