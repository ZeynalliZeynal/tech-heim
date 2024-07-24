import { useQuery } from "@tanstack/react-query";
import { getBrands } from "@/services/apiProducts.ts";

export const useBrands = () => {
  const { data: brands, isPending } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  return { brands, isPending };
};
