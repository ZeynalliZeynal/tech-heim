import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/features/auth/useUser.ts";
import { getUserCart } from "@/services/apiUsers.ts";

export const useCart = () => {
  const { user } = useUser();
  // console.log(user);

  const { data: cart, isPending } = useQuery({
    queryKey: ["user/cart", user?.id],
    queryFn: () => getUserCart(user?.id),
  });

  return { cart, isPending };
};
