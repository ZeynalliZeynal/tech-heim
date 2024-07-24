import Container from "@/ui/Container.tsx";
import HomeFilteredProducts from "@/ui/home/HomeFilteredProducts.tsx";
import { useFilteredProducts } from "@/features/products/useFilteredProducts.ts";
import { getWithinHours } from "@/helpers/converters.ts";
import Skeleton from "@/ui/Skeleton.tsx";

const HomeNew = () => {
  const { products, isPending } = useFilteredProducts(
    {
      filter: { field: "created_at", value: getWithinHours(24 * 18000) },
      method: "gte",
    },
    "new",
  );

  const lastFourProducts: DProducts[] = (products || []).slice(0, 4);

  return (
    <section>
      <Container>
        {isPending ? (
          <div className="w-full space-y-4">
            <Skeleton h="[50px]" />
            <Skeleton h="[350px]" />
          </div>
        ) : (
          <HomeFilteredProducts
            title="New Products"
            to="/"
            products={lastFourProducts}
          />
        )}
      </Container>
    </section>
  );
};

export default HomeNew;
