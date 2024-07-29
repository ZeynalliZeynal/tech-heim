import Accordion from '@/ui/Accordion';
import Checkbox from '@/ui/form/Checkbox';
import { useSearchParams } from 'react-router-dom';
import { useBrands } from './useBrands';
import { useMultipleParams } from '@/hooks/useMultipleParams';
const ProductsBrandsAccordionItem = () => {
  const [searchParams] = useSearchParams();
  const { brands, isPending } = useBrands();

  const handleCheck = useMultipleParams();

  return (
    <Accordion.Body>
      <span className='p-4'>
        <Accordion.Head name='product-brands'>Brands</Accordion.Head>
      </span>
      <Accordion.Item name='product-brands'>
        <ul className='flex-col items-start w-full gap-2 px-4'>
          {brands?.map((b) => (
            <li key={b.id}>
              <Checkbox
                checked={searchParams.get('brand')?.includes(b.name)}
                color='blue'
                onChange={() => handleCheck('brand', b.name)}
              >
                {b.name}
              </Checkbox>
            </li>
          ))}
        </ul>
      </Accordion.Item>
    </Accordion.Body>
  );
};

export default ProductsBrandsAccordionItem;
