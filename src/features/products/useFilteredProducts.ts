import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "@/services/apiProducts.ts";

export const useFilteredProducts = (
  filterObj: {
    filter: { field: string; value: string | number };
    method: string;
  },
  key: string,
) => {
  const { data: products, isPending } = useQuery({
    queryKey: [`products/${key}`],
    queryFn: () => getFilteredProducts(filterObj),
  });

  return { products, isPending };
};
