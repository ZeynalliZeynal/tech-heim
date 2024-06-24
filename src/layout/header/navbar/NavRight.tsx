import { CartIcon, SearchIcon } from "../../../ui/svgs/icons.tsx";
import Button from "../../../ui/Button.tsx";

const NavRight = () => {
  return (
    <div className="flex items-center gap-2">
      <div>
        <Button className="rounded-full size-9 hover:text-primary">
          <SearchIcon />
        </Button>
      </div>
      <div>
        <Button className="rounded-full size-9 hover:text-primary">
          <CartIcon />
        </Button>
      </div>
      <div>
        <Button className="h-9 rounded-md bg-primary text-white hover:bg-primary-400 px-4">
          Login / Register
        </Button>
      </div>
    </div>
  );
};

export default NavRight;
