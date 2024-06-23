import { CartIcon, SearchIcon } from '../../../ui/svgs/icons.tsx';
import Button from '../../../ui/Button.tsx';

const NavRight = () => {
  return (
    <div className='flex items-center gap-2'>
      <div>
        <Button icon rounded='full' customStyles='hover:text-primary'>
          <SearchIcon />
        </Button>
      </div>
      <div>
        <Button icon rounded='full' customStyles='hover:text-primary'>
          <CartIcon />
        </Button>
      </div>
      <div>
        <Button customStyles='bg-primary text-white hover:bg-primary-400'>
          Login / Register
        </Button>
      </div>
    </div>
  );
};

export default NavRight;
