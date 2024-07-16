import Button from "@/ui/Button.tsx";
import MenuDropdown from "@/ui/MenuDropdown.tsx";
import { BasketIcon } from "@/ui/svgs/icons.tsx";

const Cart = () => {
  return (
    <MenuDropdown>
      <MenuDropdown.Toggle name="cart">
        <Button size="icon">
          <span className="size-6">
            <BasketIcon />
          </span>
        </Button>
      </MenuDropdown.Toggle>
      <MenuDropdown.Menu name="cart">Cart</MenuDropdown.Menu>
    </MenuDropdown>
  );
};

export default Cart;
