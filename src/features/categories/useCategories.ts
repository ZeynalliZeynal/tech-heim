import { useQuery } from "@tanstack/react-query";
import { getCategories } from "@/services/apiProducts.ts";

export const useCategories = () => {
  const { data: categories, isPending } = useQuery({
    queryKey: ["products/categories"],
    queryFn: getCategories,
  });

  return { categories, isPending };
};
