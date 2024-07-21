import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteFromCart } from "@/services/apiCart.ts";
import { toast } from "sonner";

export const useDeleteItem = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteItem, isPending: isDeleting } = useMutation({
    mutationFn: deleteFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user/cart"],
      });
      toast.success("Item successfully deleted");
    },
    onError: () => {
      toast.error("Item deletion failed");
    },
  });

  return { deleteItem, isDeleting };
};
