import { Link } from "react-router-dom";
import { TbExternalLink } from "react-icons/tb";
import ProductCard from "./productCard/ProductCard.tsx";

const HomeFilteredProducts = ({
  title,
  to,
  products,
}: {
  title: string;
  to: string;
  products: any;
}) => {
  return (
    <div className="flex text-black w-full flex-col">
      <div className="w-full flex justify-between h-16 items-center border-b-2 border-neutral-gray-500">
        <h3>{title}</h3>
        <Link to={to} className="gap-2 group">
          <span className="group-hover:underline">View All</span>
          <span className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition">
            <TbExternalLink />
          </span>
        </Link>
      </div>
      <div className="w-full grid grid-cols-4 gap-6">
        {products?.map((product: any) => (
          <ProductCard product={product} key={product?.id} />
        ))}
      </div>
    </div>
  );
};

export default HomeFilteredProducts;
