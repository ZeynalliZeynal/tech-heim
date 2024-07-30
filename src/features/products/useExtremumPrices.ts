import { getMinMaxPricedProduct } from '@/services/apiProducts';
import { useQuery } from '@tanstack/react-query';

export const useExtremumPrices = () => {
  const { data, isPending } = useQuery({
    queryKey: ['products/extremumPrices'],
    queryFn: getMinMaxPricedProduct,
  });

  return {
    minPrice: data?.minPrice.price,
    maxPrice: data?.maxPrice.price,
    isPending,
  };
};
