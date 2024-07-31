import { useSearchParams } from 'react-router-dom';
import { useBrandIds } from '../brands/useBrandIds';
import { useMultiFilteredProducts } from './useMultiFilteredProducts';
import ProductCard from './productCard/ProductCard';

const ProductsMultiFiltered = () => {
  const [searchParams] = useSearchParams();
  const { brandIds } = useBrandIds(searchParams.get('brand')?.split(','));
  const { multiFilteredProducts } = useMultiFilteredProducts({
    brands: brandIds?.length ? brandIds : undefined,
    discount: searchParams.get('discount') || undefined,
    minPrice: searchParams.get('minPrice') || undefined,
    maxPrice: searchParams.get('maxPrice') || undefined,
  });

  return (
    <div className='grid grid-cols-3 gap-6'>
      {multiFilteredProducts?.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsMultiFiltered;
