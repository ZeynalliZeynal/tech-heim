import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { HiMiniChevronDown } from "react-icons/hi2";

import { useDropdown } from "@/context/DropdownContext";
import { NAV_LINKS } from "@/utils/variables";
import DropdownNav from "../../../features/categories/dropdownNav/DropdownNav";
import Overlay from "@/ui/Overlay";

const NavList = () => {
  const { isNavMenuOpen, setIsNavMenuOpen } = useDropdown();
  return (
    <ul className="hidden md:flex md:gap-4 lg:gap-14">
      {NAV_LINKS.map((link, index) => (
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
                'relative after:h-0.5 hover:text-primary w-max transition after:content-[""] after:absolute after:top-[calc(100%+4px)] after:bg-gradient-to-r after:from-0% after:from-primary-50 after:via-50% after:via-primary after:to-100% after:to-primary-50 after:rounded-full after:transition',
                {
                  "after:w-full": isActive,
                },
              )
            }
            to={link.to}
          >
            {link.name}{" "}
            {link.children && (
              <span
                className={`size-5 transition ${
                  isNavMenuOpen ? "rotate-180" : ""
                }`}
              >
                <HiMiniChevronDown />
              </span>
            )}
          </NavLink>{" "}
          {link.children && <DropdownNav />}
        </li>
      ))}{" "}
      {isNavMenuOpen && <Overlay />}
    </ul>
  );
};

export default NavList;
