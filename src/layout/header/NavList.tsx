import { NavLink } from "react-router-dom";

import { NAV_LINKS } from "../../utils/variables.tsx";
import { useDropdown } from "../../context/DropdownContext.tsx";
import { NavLinksProps } from "../../types/variableTypes.ts";
import DropdownNav from "./dropdownNav/DropdownNav.tsx";
import styles from "./nav-list.module.scss";

const NavList = () => {
  const { setIsNavMenuOpen } = useDropdown();
  return (
    <ul className={styles.list}>
      {NAV_LINKS.map((link: NavLinksProps, index) => (
        <li
          className={styles.listItem}
          key={index}
          onMouseEnter={
            link.name === "Products" ? () => setIsNavMenuOpen(true) : undefined
          }
          onMouseLeave={
            link.name === "Products" ? () => setIsNavMenuOpen(false) : undefined
          }
        >
          <NavLink className={styles.link} to={link.to}>
            {link.name}
          </NavLink>{" "}
          {link.children && <DropdownNav />}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
