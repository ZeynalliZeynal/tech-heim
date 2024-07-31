import { getBrandIds } from "@/services/apiProducts";
import { useQuery } from "@tanstack/react-query";

export const useBrandIds = (brandNames: string[]) => {
  const { data: brandIds, isPending } = useQuery({
    queryKey: ["brands", brandNames],
    queryFn: () => getBrandIds(brandNames),
  });

  return { brandIds, isPending };
};
