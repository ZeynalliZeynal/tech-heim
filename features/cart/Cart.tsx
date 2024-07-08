import Button from "../../src/ui/Button.tsx";
import { CartIcon } from "../../src/ui/svgs/icons.tsx";
import MenuDropdown from "../../src/ui/MenuDropdown.tsx";

const Cart = () => {
  return (
    <MenuDropdown>
      <MenuDropdown.Toggle name="cart">
        <Button size="icon">
          <CartIcon />
        </Button>
      </MenuDropdown.Toggle>
      <MenuDropdown.Menu name="cart">Bucket</MenuDropdown.Menu>
    </MenuDropdown>
  );
};

export default Cart;
