import { CartIcon, EnterIcon, SearchIcon } from "../../../ui/svgs/icons.tsx";
import Button from "../../../ui/Button.tsx";

const NavRight = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <Button size="icon" className="hover:text-primary">
          <SearchIcon />
        </Button>
      </div>
      <div>
        <Button size="icon" className="hover:text-primary">
          <CartIcon />
        </Button>
      </div>
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
