import { formatCurrency } from "@/helpers/converters.ts";
import Button from "@/ui/Button.tsx";
import { CartIcon } from "@/ui/svgs/icons.tsx";
import { useUpdateQuantity } from "@/features/cart/useUpdateQuantity.ts";
import { useCart } from "@/features/cart/useCart.ts";

const CartProceed = () => {
  const { cart } = useCart();
  const { isUpdating } = useUpdateQuantity();

  return (
    <div className="grid grid-cols-[100px_1fr] pt-4">
      <p className="text-neutral-gray-dark">
        <span className="font-light text-body-md">Grand total</span>
        <p className="font-medium">
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
        </p>
      </p>
      <Button style="primary-regular">
        Proceed to Cart{" "}
        <span className="size-6">
          <CartIcon />
        </span>
      </Button>
    </div>
  );
};

export default CartProceed;
