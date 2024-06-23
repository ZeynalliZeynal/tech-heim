import Logo from "../../../ui/svgs/logo.tsx";
import NavList from "./NavList.tsx";
import NavRight from "./NavRight.tsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between">
      <Link to="/">
        <Logo />
      </Link>
      <NavList />
      <NavRight />
    </nav>
  );
};

export default Navbar;
