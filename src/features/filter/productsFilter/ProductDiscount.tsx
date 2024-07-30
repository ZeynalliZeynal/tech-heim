import { useMultipleParams } from '@/hooks/useMultipleParams';
import Switch from '@/ui/Switch';
import { useSearchParams } from 'react-router-dom';

const ProductDiscount = () => {
  const handleSwitch = useMultipleParams();
  const [searchParams] = useSearchParams();

  return (
    <>
      <span className='p-4'>Discount</span>
      <Switch
        isSwitched={searchParams.get('discount') === 'true'}
        onSwitch={() => handleSwitch('discount', 'true', true)}
      />
    </>
  );
};

export default ProductDiscount;
