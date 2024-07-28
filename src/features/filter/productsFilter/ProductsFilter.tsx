import Accordion from "@/ui/Accordion.tsx";
import { useBrands } from "@/features/brands/useBrands.ts";
import Checkbox from "@/ui/form/Checkbox.tsx";
import { useMultipleParams } from "@/hooks/useMultipleParams.ts";
import { useSearchParams } from "react-router-dom";

const ProductsFilter = () => {
  const { brands, isPending } = useBrands();
  const [searchParams] = useSearchParams();

  const handleCheck = useMultipleParams();
  console.log(searchParams.getAll("brand"));

  return (
    <div className="flex flex-col">
      <div className="grid grid-cols-2 items-center p-4">
        <h5>Filters</h5>
        <button className="text-primary justify-self-end">Clear all</button>
      </div>
      <Accordion>
        <ul className="flex-col">
          <li className="w-full">
            <Accordion.Body>
              <span className="p-4">
                <Accordion.Head name="product-brands">Brands</Accordion.Head>
              </span>
              <Accordion.Item name="product-brands">
                <ul className="flex-col items-start w-full gap-2 px-4">
                  {brands?.map((b) => (
                    <li key={b.id}>
                      <Checkbox
                        checked={searchParams.getAll("brand").includes(b.name)}
                        color="blue"
                        onChange={() => handleCheck("brand", b.name)}
                      >
                        {b.name}
                      </Checkbox>
                    </li>
                  ))}
                </ul>
              </Accordion.Item>
            </Accordion.Body>
          </li>
        </ul>
      </Accordion>
    </div>
  );
};

export default ProductsFilter;
