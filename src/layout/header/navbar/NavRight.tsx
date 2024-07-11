import Cart from '@/features/cart/Cart';
import Button from '@/ui/Button';
import Modal from '@/ui/Modal';
import { EnterIcon, SearchIcon } from '@/ui/svgs/icons';

const NavRight = () => {
  return (
    <div className='flex items-center gap-2'>
      <Modal>
        <Modal.Open name='search-window'>
          <Button size='icon'>
            <SearchIcon />
          </Button>
        </Modal.Open>
        <Modal.Window name='search-window'>
          <Modal.Head>
            <h5>Search</h5>
          </Modal.Head>
          <Modal.Panel>
            <div>hello</div>
          </Modal.Panel>
        </Modal.Window>
      </Modal>
      <Cart />
      <div>
        <Button size='sm' type='primary-none' className='md:hidden'>
          <EnterIcon /> Login
        </Button>
        <Button size='sm' type='primary-regular' className='md:flex hidden'>
          Login / Register
        </Button>
      </div>
    </div>
  );
};

export default NavRight;
