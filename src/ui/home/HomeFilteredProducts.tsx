import ProductCard from "../../features/products/productCard/ProductCard.tsx";
import HomeSectionContainer from "./HomeSectionContainer.tsx";
import ProductCardSkeleton from "@/features/products/productCard/ProductCardSkeleton.tsx";

const HomeFilteredProducts = ({
  title,
  to,
  products = [],
  isLoading,
}: {
  title: string;
  to: string;
  products?: DProducts[];
  isLoading: boolean;
}) => {
  return (
    <HomeSectionContainer title={title} to={to}>
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 4 }, () => <ProductCardSkeleton />)
          : products.map((product: DProducts) => (
              <ProductCard product={product} key={product.id} />
            ))}
      </div>
    </HomeSectionContainer>
  );
};

export default HomeFilteredProducts;
