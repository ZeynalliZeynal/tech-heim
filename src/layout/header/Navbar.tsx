import Logo from "../../ui/svgs/logo.tsx";
import NavList from "./NavList.tsx";
import NavRight from "./NavRight.tsx";
import { Link } from "react-router-dom";

import styles from "./header.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.logo}>
        <Logo />
        <div>Tech Heim</div>
      </Link>
      <NavList />
      <NavRight />
    </nav>
  );
};

export default Navbar;
