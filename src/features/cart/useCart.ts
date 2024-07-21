import { useQuery } from "@tanstack/react-query";
import { useUser } from "@/features/auth/useUser.ts";
import { getUserCart } from "@/services/apiCart.ts";

export const useCart = () => {
  const { user } = useUser();
  // console.log(user);

  const { data: cart, isPending } = useQuery({
    queryKey: ["user/cart", user?.id],
    queryFn: () => getUserCart(user?.id),
  });

  const cartSize = cart?.reduce((acc, cur) => acc + cur.quantity, 0);

  return { cart, isPending, cartSize };
};
