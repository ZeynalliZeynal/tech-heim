import Accordion from "@/ui/Accordion.tsx";
import ProductsBrandsAccordionItem from "@/features/brands/ProductsBrandsAccordionItem";
import ProductPrice from "./ProductPrice";
import ProductDiscount from "./ProductDiscount";
import { useNavigate } from "react-router-dom";

const ProductsFilter = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex flex-col sticky top-[80px]">
        <div className="grid grid-cols-2 items-center p-4">
          <h5>Filters</h5>
          <button
            className="text-primary justify-self-end"
            onClick={() => navigate("")}
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
