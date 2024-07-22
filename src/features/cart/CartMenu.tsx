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
      <div className="sm:w-[200px] w-full h-full justify-between flex items-center flex-col">
        <h4 className="sm:text-h4 text-body-xl">No item added</h4>
        <Lottie animationData={emptyList} />
        <Button full size="sm" style="primary-outline" className="mb-16">
          Add items
        </Button>
      </div>
    );

  return (
    <div className="flex flex-col gap-3 sm:w-[500px] w-full sm:h-auto h-full sm:justify-start justify-between">
      <div className="overflow-auto h-full mb-16 sm:mb-0">
        <p className="text-body-lg sticky top-0 bg-white">
          {cartSize > 1 ? `${cartSize} items` : `${cartSize} item`}
        </p>
        <CartItems />
      </div>
      <CartProceed />
    </div>
  );
};

export default CartMenu;
