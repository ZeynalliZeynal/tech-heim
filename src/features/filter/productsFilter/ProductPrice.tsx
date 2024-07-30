import { useExtremumPrices } from "@/features/products/useExtremumPrices";
import { formatCurrency } from "@/helpers/converters";
import { useSingleParams } from "@/hooks/useSingleParams";
import Accordion from "@/ui/Accordion";
import Slider from "@/ui/Slider";
import { useSearchParams } from "react-router-dom";

const GAP = 1;

const ProductPrice = () => {
  const { maxPrice, minPrice, isPending } = useExtremumPrices();
  const handleSingleParams = useSingleParams();

  const [searchParams] = useSearchParams();

  return (
    <Accordion.Body>
      <span className="p-4">
        <Accordion.Head name="price" loading={isPending}>
          Price
        </Accordion.Head>
      </span>
      <Accordion.Item name="price">
        <div className="flex flex-col px-4 gap-4">
          <div className="grid grid-cols-2 place-items-center gap-6">
            <span className="border border-neutral-gray-700 rounded-md h-11 px-5 py-2">
              <input
                type="number"
                placeholder={formatCurrency(minPrice)}
                value={Number(searchParams.get("minPrice")) || ""}
                onChange={({ target: { value } }) =>
                  handleSingleParams("minPrice", value)
                }
              />
            </span>
            <span className="border border-neutral-gray-700 rounded-md h-11 px-5 py-2">
              <input
                type="number"
                placeholder={formatCurrency(maxPrice)}
                value={Number(searchParams.get("maxPrice")) || ""}
                onChange={({ target: { value } }) =>
                  handleSingleParams("maxPrice", value)
                }
              />
            </span>
          </div>
          <div className="mb-16">
            <Slider
              maxValue={maxPrice}
              minValue={minPrice}
              gap={GAP}
              field="Price"
            />
          </div>
        </div>
      </Accordion.Item>
    </Accordion.Body>
  );
};

export default ProductPrice;
