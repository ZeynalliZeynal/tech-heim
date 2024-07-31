import { useSearchParams } from "react-router-dom";
import { useBrandIds } from "../brands/useBrandIds";
import { useMultiFilteredProducts } from "./useMultiFilteredProducts";
import ProductCard from "./productCard/ProductCard";
import ProductCardSkeleton from "@/features/products/productCard/ProductCardSkeleton.tsx";

const ProductsMultiFiltered = () => {
  const [searchParams] = useSearchParams();
  const { brandIds } = useBrandIds(searchParams.get("brand")?.split(",") || []);
  const { multiFilteredProducts, isPending } = useMultiFilteredProducts({
    brands: brandIds?.length ? brandIds : undefined,
    discount: searchParams.get("discount") || undefined,
    minPrice: searchParams.get("minPrice") || undefined,
    maxPrice: searchParams.get("maxPrice") || undefined,
  });

  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
      {isPending
        ? Array.from({ length: 6 }, (_, i) => <ProductCardSkeleton key={i} />)
        : multiFilteredProducts?.map((product) => (
            <ProductCard key={product?.id} product={product} />
          ))}
    </div>
  );
};

export default ProductsMultiFiltered;
