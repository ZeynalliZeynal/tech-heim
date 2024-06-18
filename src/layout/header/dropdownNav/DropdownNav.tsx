import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import { useDropdown } from "../../../context/DropdownContext.tsx";
import { getCategories } from "../../../services/apiGetters.ts";
import { CATEGORIES_ICONS } from "../../../utils/variables.tsx";
import DropdownNavItems from "./DropdownNavItems.tsx";
import styles from "./dropdown-nav.module.scss";

const DropdownNav = () => {
  const { isNavMenuOpen } = useDropdown();
  const [categoryId, setCategoryId] = useState<number>(1);

  const { data: categories } = useQuery({
    queryKey: ["products/categories"],
    queryFn: getCategories,
  });

  return (
    <div className={styles.wrap}>
      <motion.div
        className={styles.container}
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
        <div className={styles.bridge} />
        <div className={styles.grid}>
          <ul className={styles.list}>
            {categories?.map(({ id, name }) => (
              <li className={styles.listItem} key={id}>
                <NavLink
                  className={styles.link}
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
