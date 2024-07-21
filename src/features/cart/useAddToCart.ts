import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addItemToCart } from "@/services/apiCart.ts";
import { toast } from "sonner";

export const useAddToCart = () => {
  const queryClient = useQueryClient();
  const { mutate: addItem, isPending: isAdding } = useMutation({
    mutationFn: addItemToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user/cart"],
      });
      toast.success(`Item successfully added`);
    },
    onError: () => {
      toast.error("Item couldn't be added");
    },
  });

  return { addItem, isAdding };
};
