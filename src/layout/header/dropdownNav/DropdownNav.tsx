import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import { useDropdown } from "../../../context/DropdownContext.tsx";
import { getCategories } from "../../../services/apiGetters.ts";
import { CATEGORIES_ICONS } from "../../../utils/variables.tsx";
import DropdownNavItems from "./DropdownNavItems.tsx";
import classNames from "classnames";

const DropdownNav = () => {
  const { isNavMenuOpen } = useDropdown();
  const [categoryId, setCategoryId] = useState<number>(1);

  const { data: categories } = useQuery({
    queryKey: ["products/categories"],
    queryFn: getCategories,
  });

  return (
    <div className="fixed top-[84px] left-1/2 -translate-x-1/2 font-light container perspective-[2000px] perspective-origin-top">
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
        <div className="p-6 absolute w-full -top-10 z-[900]" />
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
                  data-ishovering={categoryId === id}
                  to={`/products/${name.replaceAll(" ", "").toLowerCase()}`}
                  onMouseEnter={() => setCategoryId(id)}
                >
                  {CATEGORIES_ICONS[name]} {name}
                </NavLink>
              </li>
            ))}
          </ul>
          <DropdownNavItems categoryId={categoryId} />
        </div>
      </motion.div>
    </div>
  );
};

export default DropdownNav;
