import Accordion from "@/ui/Accordion.tsx";
import ProductsBrandsAccordionItem from "@/features/brands/ProductsBrandsAccordionItem";
import ProductPrice from "./ProductPrice";
import ProductDiscount from "./ProductDiscount";
import { useSearchParams } from "react-router-dom";

const ProductsFilter = () => {
  const [_, setSearchParams] = useSearchParams();
  return (
    <div>
      <div className="flex flex-col sticky top-[80px]">
        <div className="grid grid-cols-2 items-center p-4">
          <h5>Filters</h5>
          <button
            className="text-primary justify-self-end"
            onClick={() => setSearchParams("")}
          >
            Clear all
          </button>
        </div>
        <Accordion>
          <ul className="flex-col">
            <li className="w-full">
              <ProductsBrandsAccordionItem />
            </li>
            <li className="w-full">
              <ProductDiscount />
            </li>
            <li className="w-full">
              <ProductPrice />
            </li>
          </ul>
        </Accordion>
      </div>
    </div>
  );
};

export default ProductsFilter;
