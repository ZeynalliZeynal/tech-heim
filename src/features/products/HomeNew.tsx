import Container from "@/ui/Container.tsx";
import HomeFilteredProducts from "@/ui/home/HomeFilteredProducts.tsx";
import { ProductTypes } from "@/types/productTypes.ts";
import { useFilteredProducts } from "@/features/products/useFilteredProducts.ts";
import { getWithinHours } from "@/helpers/converters.ts";

const HomeNew = () => {
  const { newProducts, isPending } = useFilteredProducts({
    filter: { field: "created_at", value: getWithinHours(24 * 60) },
    method: "gte",
  });

  const lastFourProducts: ProductTypes[] = newProducts?.slice(0, 4);

  return (
    <section>
      <Container>
        <HomeFilteredProducts
          title="New Products"
          to="/"
          products={lastFourProducts}
        />
      </Container>
    </section>
  );
};

export default HomeNew;
