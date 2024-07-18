import { useQuery } from "@tanstack/react-query";
import { getDistinctSubcategories } from "@/services/apiProducts.ts";

export const useSubcategories = () => {
  const { data: subcategories, isPending } = useQuery({
    queryKey: ["products/categories/subcategories"],
    queryFn: getDistinctSubcategories,
  });

  return { subcategories, isPending };
};
