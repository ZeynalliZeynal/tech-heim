import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/features/auth/useUser.ts";
import { getUserWishlist } from "@/services/apiWhishlist.ts";

export const useWishlist = () => {
  const { user } = useUser();

  const { data: wishlist, isPending } = useQuery({
    queryKey: ["user/wishlist", user?.id],
    queryFn: () => getUserWishlist(user?.id),
  });

  return { wishlist, isPending };
};
