import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "@/services/apiProducts.ts";

export const useFilteredProducts = (filterObj: {
  filter: { field: string; value: string | number };
  method: string;
}) => {
  const { data: products, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: () => getFilteredProducts(filterObj),
  });

  return { products, isPending };
};
