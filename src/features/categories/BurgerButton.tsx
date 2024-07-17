import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import Drawer from "@/ui/Drawer";
import Button from "@/ui/Button";
import Logo from "@/ui/svgs/logo";
import Accordion from "@/ui/Accordion";
import { CATEGORIES_ICONS, NAV_LINKS } from "@/utils/variables";
import { NavLinksProps } from "@/types/variableTypes";
import { useCategories } from "./useCategories";
import { memo } from "react";

const BurgerButton = memo(() => {
  const { categories } = useCategories();

  return (
    <Drawer>
      <Drawer.Open name="burger-menu">
        <Button size="icon" className="md:hidden">
          <span className="size-6">
            <RxHamburgerMenu />
          </span>
        </Button>
      </Drawer.Open>
      <Drawer.Body name="burger-menu">
        <Drawer.Head>
          <Logo />
        </Drawer.Head>
        <Accordion>
          <div className="flex flex-col">
            {NAV_LINKS.map((link: NavLinksProps, index) =>
              link.children ? (
                <Accordion.Body key={index}>
                  <Accordion.Head name={`${link.name}-${index}`}>
                    <NavLink
                      className={({ isActive }) =>
                        classNames(
                          "relative hover:text-primary w-full justify-between transition py-2.5",
                          {
                            "text-primary": isActive,
                          },
                        )
                      }
                      to={link.to}
                    >
                      {link.name}
                    </NavLink>
                  </Accordion.Head>
                  <Accordion.Item name={`${link.name}-${index}`}>
                    <div className="flex flex-col text-body-md ps-3">
                      {link.children &&
                        link.name === "Products" &&
                        categories?.map((c: { name: string }, i: number) => (
                          <NavLink
                            to={`/products/${c.name
                              .replaceAll(" ", "")
                              .toLowerCase()}`}
                            key={i}
                            className="justify-start py-2 gap-2 hover:text-primary-100 hover:gap-2.5 transition-all"
                          >
                            {CATEGORIES_ICONS[c.name]} {c.name}
                          </NavLink>
                        ))}
                    </div>
                  </Accordion.Item>
                </Accordion.Body>
              ) : (
                <NavLink
                  key={index}
                  className={({ isActive }) =>
                    classNames(
                      "relative hover:text-primary w-full justify-between transition py-2.5",
                      {
                        "text-primary": isActive,
                      },
                    )
                  }
                  to={link.to}
                >
                  {link.name}
                </NavLink>
              ),
            )}
          </div>
        </Accordion>
      </Drawer.Body>
    </Drawer>
  );
});

export default BurgerButton;
