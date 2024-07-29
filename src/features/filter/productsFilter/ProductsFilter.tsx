import Accordion from '@/ui/Accordion.tsx';
import Checkbox from '@/ui/form/Checkbox.tsx';
import { useMultipleParams } from '@/hooks/useMultipleParams.ts';
import { useSearchParams } from 'react-router-dom';
import ProductsBrandsAccordionItem from '@/features/brands/ProductsBrandsAccordionItem';
import { useMultiFilteredProducts } from '@/features/products/useMultiFilteredProducts';
import { useBrandIds } from '@/features/brands/useBrandIds';
import Switch from '@/ui/Switch';
import { useSingleParams } from '@/hooks/useSingleParams';

const ProductsFilter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { brandIds } = useBrandIds(searchParams.get('brand')?.split(','));
  const { multiFilteredProducts } = useMultiFilteredProducts({
    brands: brandIds,
  });

  const handleSwitch = useMultipleParams();

  // console.log(multiFilteredProducts);

  return (
    <div className='flex flex-col'>
      <div className='grid grid-cols-2 items-center p-4'>
        <h5>Filters</h5>
        <button className='text-primary justify-self-end'>Clear all</button>
      </div>
      <Accordion>
        <ul className='flex-col'>
          <li className='w-full'>
            <ProductsBrandsAccordionItem />
          </li>
          <li className='w-full'>
            <span className='p-4'>Discount</span>
            <Switch
              isSwitched={searchParams.get('discount') === 'true'}
              onSwitch={() => handleSwitch('discount', 'true', true)}
            />
          </li>
        </ul>
      </Accordion>
    </div>
  );
};

export default ProductsFilter;
