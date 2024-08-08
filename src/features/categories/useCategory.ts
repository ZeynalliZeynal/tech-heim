import { useQuery } from "@tanstack/react-query";
import { getCategory } from "@/services/apiCategories.ts";

export const useCategory = (filterObj: {
  filter: { field: string; value?: string | number };
  method: string;
}) => {
  const { data: category, isPending } = useQuery({
    queryKey: ["categories", filterObj],
    queryFn: () => getCategory(filterObj),
  });

  return { category, isPending };
};
