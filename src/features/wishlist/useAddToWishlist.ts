import { toast } from "sonner";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToWishlist } from "@/services/apiWhishlist.ts";

export const useAddToWishlist = () => {
  const queryClient = useQueryClient();
  const { mutate: addItem, isPending: isAdding } = useMutation({
    mutationFn: addToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user/wishlist"],
      });
      toast.success(`Item successfully added to your wishlist`);
    },
    onError: () => {
      toast.error("Item couldn't be added to your wishlist");
    },
  });

  return { addItem, isAdding };
};
