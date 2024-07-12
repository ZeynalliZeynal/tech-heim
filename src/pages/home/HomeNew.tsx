import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "../../services/apiGetters.ts";
import { getWithinHours } from "@/helpers/converters.ts";
import Container from "@/ui/Container.tsx";
import HomeFilteredProducts from "@/ui/home/HomeFilteredProducts.tsx";

const HomeNew = () => {
  const { data: newProducts } = useQuery({
    queryKey: ["products/new"],
    queryFn: () =>
      getFilteredProducts({
        filter: { field: "created_at", value: getWithinHours(24 * 30) },
        method: "gte",
      }),
  });

  const lastFourProducts = newProducts?.slice(0, 4);

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
