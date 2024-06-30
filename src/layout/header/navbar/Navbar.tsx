import Logo from "../../../ui/svgs/logo.tsx";
import NavList from "./NavList.tsx";
import NavRight from "./NavRight.tsx";
import { Link } from "react-router-dom";
import { ADMIN_INFO } from "../../../data/adminInfo.tsx";
import Button from "../../../ui/Button.tsx";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between">
      <Button size="icon" className="md:hidden">
        <span className="size-6">
          <RxHamburgerMenu />
        </span>
      </Button>
      <Link to="/">
        <span className="md:inline-flex hidden">
          <Logo />
        </span>
        <h1 className="md:hidden text-primary-400 text-h4">
          {ADMIN_INFO.title}
        </h1>
      </Link>

      <NavList />
      <NavRight />
    </nav>
  );
};

export default Navbar;
