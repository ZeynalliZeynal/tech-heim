import ProductsCategories from "@/features/categories/ProductsCategories.tsx";
import ProductsFilter from "@/features/filter/productsFilter/ProductsFilter.tsx";
import Container from "@/ui/Container.tsx";

const Products = () => {
  return (
    <>
      <ProductsCategories />
      <Container>
        <div className="grid grid-cols-[300px_1fr]">
          <ProductsFilter />
        </div>
      </Container>
    </>
  );
};

export default Products;
