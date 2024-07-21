import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductCardColors from "./ProductCardColors.tsx";
import ProductCardImage from "./ProductCardImage.tsx";
import ProductCardBadges from "./ProductCardBadges.tsx";
import ProductCardBottom from "./ProductCardBottom.tsx";
import { useProductColors } from "@/features/products/useProductColors.ts";
import useWindowSize from "@/hooks/useWindowSize.ts";

const ProductCard = ({ product }: { product: DProducts }) => {
  const { colors } = useProductColors(product.id);

  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [selectedColor, setSelectedColor] = useState<number>(0);

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
        image={product.image}
        model={product.model}
        brand={product.product_brands}
      />
      <ProductCardColors
        colors={colors}
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />
      <ProductCardBadges product={product} />
      <ProductCardBottom
        product={product}
        isHovering={isHovering}
        selectedColor={colors?.at(selectedColor)?.name}
      />
    </Link>
  );
};

export default ProductCard;
