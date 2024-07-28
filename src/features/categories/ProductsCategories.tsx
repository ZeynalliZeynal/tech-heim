import Container from "@/ui/Container.tsx";
import { useCategories } from "@/features/categories/useCategories.ts";
import { NavLink } from "react-router-dom";
import { CATEGORIES_ICONS } from "@/utils/variables.tsx";

const ProductsCategories = () => {
  const { categories } = useCategories();
  return (
    <section>
      <Container>
        <ul className="items-stretch gap-8 justify-center w-full">
          {categories?.map((c) => (
            <li key={c.id} className="items-stretch">
              <NavLink
                to={c.name.replaceAll(" ", "").toLowerCase()}
                className={({ isActive }) =>
                  `flex-col gap-2 w-max justify-between text-center text-body-lg relative ${isActive ? "before:absolute before:w-full before:h-1 before:rounded before:bg-primary before:top-[calc(100%+8px)]" : ""}`
                }
              >
                <span className="size-6">{CATEGORIES_ICONS[c.name]}</span>{" "}
                {c.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ProductsCategories;
