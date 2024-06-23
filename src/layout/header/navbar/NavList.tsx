import { NavLink } from "react-router-dom";

import { NAV_LINKS } from "../../../utils/variables.tsx";
import { useDropdown } from "../../../context/DropdownContext.tsx";
import { NavLinksProps } from "../../../types/variableTypes.ts";
import DropdownNav from "../dropdownNav/DropdownNav.tsx";
import classNames from "classnames";

const NavList = () => {
  const { setIsNavMenuOpen } = useDropdown();
  return (
    <ul className="gap-14">
      {NAV_LINKS.map((link: NavLinksProps, index) => (
        <li
          className="relative"
          key={index}
          onMouseEnter={
            link.name === "Products" ? () => setIsNavMenuOpen(true) : undefined
          }
          onMouseLeave={
            link.name === "Products" ? () => setIsNavMenuOpen(false) : undefined
          }
        >
          <NavLink
            className={({ isActive }) =>
              classNames(
                'relative after:h-0.5 hover:text-primary transition after:content-[""] after:absolute after:top-[calc(100%+4px)] after:bg-gradient-to-r after:from-0% after:from-primary-50 after:via-50% after:via-primary after:to-100% after:to-primary-50 after:rounded-full after:transition',
                {
                  "after:w-full": isActive,
                },
              )
            }
            to={link.to}
          >
            {link.name}
          </NavLink>{" "}
          {link.children && <DropdownNav />}
        </li>
      ))}
    </ul>
  );
};

export default NavList;
