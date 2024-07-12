import { useQuery } from "@tanstack/react-query";
import { getProductColors } from "../services/apiGetters.ts";

export const useProductColors = (productId: number) => {
  const {
    data: colors,
    isPending,
    error,
  } = useQuery({
    queryKey: ["products/colors", productId],
    queryFn: () => getProductColors(productId),
  });

  return {
    colors,
    isPending,
    error,
  };
};
