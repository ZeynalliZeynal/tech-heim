import { useCart } from "@/features/cart/useCart.ts";
import Lottie from "lottie-react";
import emptyList from "@/assets/animation/empty-list.json";
import Button from "@/ui/Button.tsx";

const CartMenu = () => {
  const { cart } = useCart();

  if (!cart?.length)
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
      <p className="text-body-lg">
        {cart?.length > 1 ? `${cart.length} items` : `${cart.length} item`}
      </p>
      <ul></ul>
      <div></div>
    </div>
  );
};

export default CartMenu;
