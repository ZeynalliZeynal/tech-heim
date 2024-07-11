import { useQuery } from '@tanstack/react-query';
import { getProductDetails } from '../services/apiGetters.ts';

export const useProductDetails = (productId: number) => {
  const { data: productDetails, isPending } = useQuery({
    queryKey: ['products/details', productId],
    queryFn: () => getProductDetails(productId),
  });

  const detail = productDetails?.details;
  const brand = productDetails?.brands;
  const colors = productDetails?.colors;

  return {
    detail,
    brand,
    colors,
    isPending,
  };
};
