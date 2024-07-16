import { Link } from "react-router-dom";

import Container from "../../ui/Container.tsx";
import { useSubcategories } from "@/features/categories/useSubcategories.ts";

const HomeCategories = () => {
  const { subcategories, isPending } = useSubcategories();

  return (
    <section>
      <Container>
        <ul className="w-full justify-between overflow-auto items-stretch gap-4">
          {subcategories
            ?.slice(0, 6)
            .map(
              ({
                id,
                name,
                image,
              }: {
                id: number;
                name: string;
                image: string;
              }) =>
                isPending ? (
                  "Loading subcategories..."
                ) : (
                  <li key={id}>
                    <Link
                      to="/"
                      className="flex-col md:py-2 py-1 md:px-4 px-2 items-center shadow-sm font-light rounded-md gap-2 group w-full text-body-sm h-full"
                    >
                      <span className="lg:size-[150px] md:size-[100px] size-16 overflow-hidden">
                        <img
                          src={image}
                          alt={name}
                          className="grayscale-[0.3] transition duration-300 group-hover:scale-110 group-hover:grayscale-0"
                        />
                      </span>{" "}
                      <p className="text-center">{name}</p>
                    </Link>
                  </li>
                ),
            )}
        </ul>
      </Container>
    </section>
  );
};

export default HomeCategories;
