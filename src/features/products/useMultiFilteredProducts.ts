import { getMultiFilteredProducts } from '@/services/apiProducts';
import { useQuery } from '@tanstack/react-query';

export const useMultiFilteredProducts = (filters) => {
  const { data: multiFilteredProducts, isPending } = useQuery({
    queryKey: ['products', filters],
    queryFn: () => getMultiFilteredProducts(filters),
  });

  return { multiFilteredProducts, isPending };
};
