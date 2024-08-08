import { getMultiFilteredProducts } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

export interface IMultiFilters {
  brands?: number[];
  discount?: string;
  minPrice?: string;
  maxPrice?: string;
  category?: number;
}

export const useMultiFilteredProducts = (filters: IMultiFilters) => {
  const { data: multiFilteredProducts, isPending } = useQuery({
    queryKey: ["products", filters],
    queryFn: () => getMultiFilteredProducts(filters),
  });

  return { multiFilteredProducts, isPending };
};
