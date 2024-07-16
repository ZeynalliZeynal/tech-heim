import { useQuery } from "@tanstack/react-query";
import { getFilteredProducts } from "@/services/apiGetters.ts";

export const useFilteredProducts = (filterObj: {
  filter: { field: string; value: string };
  method: string;
}) => {
  const { data: newProducts, isPending } = useQuery({
    queryKey: ["products/new"],
    queryFn: () => getFilteredProducts(filterObj),
  });

  return { newProducts, isPending };
};
