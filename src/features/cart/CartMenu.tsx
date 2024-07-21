import { useCart } from "@/features/cart/useCart.ts";
import Lottie from "lottie-react";
import emptyList from "@/assets/animation/empty-list.json";
import Button from "@/ui/Button.tsx";
import CartItems from "@/features/cart/CartItems.tsx";
import CartProceed from "@/features/cart/CartProceed.tsx";

const CartMenu = () => {
  const { cartSize } = useCart();

  if (!cartSize)
    return (
      <div className="w-[200px] flex items-center flex-col">
        <h4>No item added</h4>
        <Lottie animationData={emptyList} />
        <Button full size="sm" style="primary-outline">
          Add items
        </Button>
      </div>
    );

  return (
    <div className="flex flex-col gap-3 w-[500px]">
      <p className="text-body-lg sticky top-0 bg-white">
        {cartSize > 1 ? `${cartSize} items` : `${cartSize} item`}
      </p>
      <CartItems />
      <CartProceed />
    </div>
  );
};

export default CartMenu;
