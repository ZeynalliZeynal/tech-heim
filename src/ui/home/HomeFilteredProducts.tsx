import ProductCard from "../productCard/ProductCard.tsx";
import { ProductTypes } from "../../types/productTypes.ts";
import HomeSectionContainer from "./HomeSectionContainer.tsx";

const HomeFilteredProducts = ({
  title,
  to,
  products,
}: {
  title: string;
  to: string;
  products?: ProductTypes[];
}) => {
  return (
    <HomeSectionContainer title={title} to={to}>
      <div className="w-full grid sm:grid-cols-2 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 gap-6">
        {products?.map((product: ProductTypes) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </div>
    </HomeSectionContainer>
  );
};

export default HomeFilteredProducts;
