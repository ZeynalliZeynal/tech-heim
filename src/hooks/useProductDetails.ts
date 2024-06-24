import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../services/apiGetters.ts";

export const useProductDetails = (productId: number) => {
  const { data: productDetails, isPending } = useQuery({
    queryKey: ["products/details", productId],
    queryFn: () => getProductDetails(productId),
  });

  const detail = productDetails?.details?.at(0);
  const brand = productDetails?.brands?.at(0);
  const color = productDetails?.colors?.at(0);

  return {
    detail,
    brand,
    color,
    isPending,
  };
};
