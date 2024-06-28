import { Link } from "react-router-dom";
import { TbExternalLink } from "react-icons/tb";
import ProductCard from "../productCard/ProductCard.tsx";
import { ProductTypes } from "../../types/productTypes.ts";
import HomeSectionTitle from "./HomeSectionTitle.tsx";
import HomeSectionContainer from "./HomeSectionContainer.tsx";

const HomeFilteredProducts = ({
  title,
  to,
  products,
}: {
  title: string;
  to: string;
  products: ProductTypes[];
}) => {
  return (
    <HomeSectionContainer>
      <HomeSectionTitle title={title}>
        <Link to={to} className="gap-2 group">
          <span className="group-hover:underline">View All</span>
          <span className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition">
            <TbExternalLink />
          </span>
        </Link>
      </HomeSectionTitle>

      <div className="w-full grid grid-cols-4 gap-6">
        {products?.map((product: ProductTypes) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </div>
    </HomeSectionContainer>
  );
};

export default HomeFilteredProducts;
