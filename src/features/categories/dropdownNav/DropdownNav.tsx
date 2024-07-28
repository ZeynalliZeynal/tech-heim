import { memo, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import classNames from "classnames";
import { useDropdown } from "@/context/DropdownContext";
import { CATEGORIES_ICONS } from "@/utils/variables";
import DropdownNavItems from "./DropdownNavItems";
import { useCategories } from "../useCategories";

const DropdownNav = memo(() => {
  const { isNavMenuOpen } = useDropdown();
  const [categoryId, setCategoryId] = useState<number>(1);
  const { categories } = useCategories();

  return (
    <div className="fixed top-16 left-1/2 -translate-x-1/2 font-light container perspective-[2000px] perspective-origin-top">
      <motion.div
        className="origin-top rounded-bl-md rounded-br-md overflow-hidden"
        animate={isNavMenuOpen ? "active" : "initial"}
        variants={{
          active: {
            rotateX: 0,
            opacity: 1,
            display: "block",
          },
        }}
        transition={{
          duration: 0.2,
        }}
        initial={{
          rotateX: -90,
          opacity: 0,
          display: "none",
        }}
      >
        <div className="p-3 absolute w-full -top-6 z-[900]" />
        <div className="grid bg-white grid-cols-[300px_1fr]">
          <ul className="relative flex-col items-start gap-4 z-[900] border-r border-neutral-gray-600 px-6 py-4">
            {categories?.map(({ id, name }) => (
              <li key={id}>
                <NavLink
                  className={({ isActive }) =>
                    classNames("gap-4", {
                      "text-primary": isActive,
                      "text-primary-100": categoryId === id,
                    })
                  }
                  to={`/products/${name.replaceAll(" ", "").toLowerCase()}`}
                  onMouseEnter={() => setCategoryId(id)}
                >
                  <span className="size-4 md:size-6">
                    {CATEGORIES_ICONS[name]}
                  </span>{" "}
                  {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <DropdownNavItems categoryId={categoryId} />
        </div>
      </motion.div>
    </div>
  );
});

export default DropdownNav;
