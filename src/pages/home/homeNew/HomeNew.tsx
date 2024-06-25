import Container from "../../../ui/Container.tsx";
import HomeFilteredProducts from "../../../ui/HomeFilteredProducts.tsx";
import { useQuery } from "@tanstack/react-query";
import { getNewProducts } from "../../../services/apiGetters.ts";

const HomeNew = () => {
  const { data: newProducts, isPending } = useQuery({
    queryKey: ["products/new", 24 * 30],
    queryFn: () => getNewProducts(24 * 30),
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
