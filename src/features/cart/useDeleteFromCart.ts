import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFromCart } from "@/services/apiCart.ts";
import { toast } from "sonner";

export const useDeleteFromCart = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteItem, isPending: isDeleting } = useMutation({
    mutationFn: deleteFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user/cart"],
      });
      toast.success("Item successfully deleted from your cart");
    },
    onError: () => {
      toast.error("Item failed to be deleted from your cart");
    },
  });

  return { deleteItem, isDeleting };
};
