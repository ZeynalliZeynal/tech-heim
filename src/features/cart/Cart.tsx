import Button from "@/ui/Button.tsx";
import MenuDropdown from "@/ui/MenuDropdown.tsx";
import { BasketIcon } from "@/ui/svgs/icons.tsx";
import CartMenu from "@/features/cart/CartMenu.tsx";
import { useCart } from "@/features/cart/useCart.ts";
import Spinner from "@/ui/Spinner.tsx";

const Cart = () => {
  const { isPending } = useCart();

  if (isPending) return <Spinner />;

  return (
    <MenuDropdown>
      <MenuDropdown.Toggle name="cart">
        <Button size="icon">
          <span className="size-6">
            <BasketIcon />
          </span>
        </Button>
      </MenuDropdown.Toggle>
      <MenuDropdown.Menu name="cart">
        <CartMenu />
      </MenuDropdown.Menu>
    </MenuDropdown>
  );
};

export default Cart;
