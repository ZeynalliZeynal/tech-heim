import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { removeFromWishlist } from "@/services/apiWhishlist.ts";

export const useDeleteFromWishlist = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteItem, isPending: isDeleting } = useMutation({
    mutationFn: removeFromWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user/wishlist"],
      });
      toast.success("Item successfully deleted from your wishlist");
    },
    onError: () => {
      toast.error("Item failed to be deleted from your wishlist");
    },
  });

  return { deleteItem, isDeleting };
};
