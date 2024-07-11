import Button from '@/ui/Button.tsx';
import { CartIcon } from '@/ui/svgs/icons.tsx';
import MenuDropdown from '@/ui/MenuDropdown.tsx';

const Cart = () => {
  return (
    <MenuDropdown>
      <MenuDropdown.Toggle name='cart'>
        <Button size='icon'>
          <CartIcon />
        </Button>
      </MenuDropdown.Toggle>
      <MenuDropdown.Menu name='cart'>Cart</MenuDropdown.Menu>
    </MenuDropdown>
  );
};

export default Cart;
