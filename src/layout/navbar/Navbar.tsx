import { Link } from "react-router-dom";

import BurgerButton from "../../features/categories/BurgerButton.tsx";
import Logo from "@/ui/svgs/logo.tsx";
import { ADMIN_INFO } from "@/data/adminInfo.tsx";
import NavList from "./NavList.tsx";
import NavRight from "./NavRight.tsx";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between">
      <BurgerButton />
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
