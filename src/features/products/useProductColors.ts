import { useQuery } from "@tanstack/react-query";
import { getColors } from "@/services/apiProducts.ts";

export const useProductColors = (productId: number) => {
  const {
    data: colors,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products/colors", productId],
    queryFn: () => getColors(productId),
  });

  return {
    colors,
    isPending,
    error,
  };
};
