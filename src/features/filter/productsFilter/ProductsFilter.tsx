import Accordion from '@/ui/Accordion.tsx';
import ProductsBrandsAccordionItem from '@/features/brands/ProductsBrandsAccordionItem';
import ProductPrice from './ProductPrice';
import ProductDiscount from './ProductDiscount';

const ProductsFilter = () => {
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
            <ProductDiscount />
          </li>
          <li className='w-full'>
            <ProductPrice />
          </li>
        </ul>
      </Accordion>
    </div>
  );
};

export default ProductsFilter;
