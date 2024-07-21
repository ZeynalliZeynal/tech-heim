import Button from "@/ui/Button.tsx";
import MenuDropdown from "@/ui/MenuDropdown.tsx";
import { BasketIcon } from "@/ui/svgs/icons.tsx";
import CartMenu from "@/features/cart/CartMenu.tsx";
import { useCart } from "@/features/cart/useCart.ts";
import Spinner from "@/ui/Spinner.tsx";

const Cart = () => {
  const { cartSize, isPending } = useCart();

  if (isPending) return <Spinner />;

  return (
    <MenuDropdown>
      <MenuDropdown.Toggle name="cart">
        <Button size="icon">
          <span className="size-6">
            <BasketIcon />
          </span>{" "}
          {cartSize && (
            <span className="absolute text-body-xs inline-flex items-center justify-center rounded-full bg-primary size-4 text-white top-[calc(50%+10px)] left-[calc(50%+10px)] -translate-y-1/2 -translate-x-1/2">
              {cartSize}
            </span>
          )}
        </Button>
      </MenuDropdown.Toggle>
      <MenuDropdown.Menu name="cart">
        <CartMenu />
      </MenuDropdown.Menu>
    </MenuDropdown>
  );
};

export default Cart;
