import { formatCurrency } from "@/helpers/converters.ts";
import Button from "@/ui/Button.tsx";
import { CartIcon } from "@/ui/svgs/icons.tsx";
import { useUpdateQuantityInCart } from "@/features/cart/useUpdateQuantityInCart.ts";
import { useCart } from "@/features/cart/useCart.ts";

const CartProceed = () => {
  const { cart } = useCart();
  const { isUpdating } = useUpdateQuantityInCart();

  return (
    <div className="grid grid-cols-[100px_1fr] py-2 items-center sticky bottom-0 bg-white">
      <p className="text-neutral-gray-dark">
        <span className="font-light text-body-md">Grand total</span>
        <span className="font-medium">
          {isUpdating
            ? "Loading..."
            : formatCurrency(
                cart?.reduce(
                  (acc, cur) =>
                    acc +
                    (cur.products.price -
                      (cur.products.price * cur.products.discount_percent) /
                        100) *
                      cur.quantity,
                  0,
                ),
              )}
        </span>
      </p>
      <Button style="primary-regular">
        <span className="size-6">
          <CartIcon />
        </span>
        Proceed to Cart
      </Button>
    </div>
  );
};

export default CartProceed;
