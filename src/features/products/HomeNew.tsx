import Container from "@/ui/Container.tsx";
import HomeFilteredProducts from "@/ui/home/HomeFilteredProducts.tsx";
import { useFilteredProducts } from "@/features/products/useFilteredProducts.ts";
import { getWithinHours } from "@/helpers/converters.ts";
import { ProductTypes } from "@/types/productTypes.ts";

const HomeNew = () => {
  const { products, isPending } = useFilteredProducts(
    {
      filter: { field: "created_at", value: getWithinHours(24 * 18000) },
      method: "gte",
    },
    "new",
  );

  const lastFourProducts: ProductTypes[] = products?.slice(0, 4);

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
