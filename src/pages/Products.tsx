import ProductsCategories from "@/features/categories/ProductsCategories.tsx";
import ProductsFilter from "@/features/filter/productsFilter/ProductsFilter.tsx";
import ProductsMultiFiltered from "@/features/products/ProductsMultiFiltered.tsx";
import Container from "@/ui/Container.tsx";

const Products = () => {
  return (
    <>
      <ProductsCategories />
      <section>
        <Container>
          <div className="grid grid-cols-[280px_1fr] gap-6">
            <ProductsFilter />
            <ProductsMultiFiltered />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Products;
