import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateQuantity } from "@/services/apiCart.ts";
import { toast } from "sonner";

export const useUpdateQuantity = () => {
  const queryClient = useQueryClient();
  const { mutate: update, isPending: isUpdating } = useMutation({
    mutationFn: updateQuantity,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user/cart"],
      });
    },
    onError: () => {
      toast.error("Error while updating quantity");
    },
  });

  return { update, isUpdating };
};
