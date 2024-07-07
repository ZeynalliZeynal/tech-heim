import { CartIcon, EnterIcon, SearchIcon } from "../../../ui/svgs/icons.tsx";
import Button from "../../../ui/Button.tsx";
import Modal from "../../../ui/Modal.tsx";

const NavRight = () => {
  return (
    <div className="flex items-center gap-2">
      <Modal>
        <Modal.Open opens="search-window">
          <Button size="icon">
            <SearchIcon />
          </Button>
        </Modal.Open>
        <Modal.Window name="search-window">
          <Modal.Head>Search</Modal.Head>
          <Modal.Panel>
            <div>hello</div>
          </Modal.Panel>
        </Modal.Window>
      </Modal>
      <Button size="icon">
        <CartIcon />
      </Button>
      <div>
        <Button size="sm" type="primary-none" className="md:hidden">
          <EnterIcon /> Login
        </Button>
        <Button size="sm" type="primary-regular" className="md:flex hidden">
          Login / Register
        </Button>
      </div>
    </div>
  );
};

export default NavRight;
