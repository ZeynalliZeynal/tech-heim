import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

import { getDistinctSubcategories } from "../../../services/apiGetters.ts";
import Container from "../../../ui/container/Container.tsx";
import styles from "./categories.module.scss";

export default () => {
  const { data: subcategories, isPending } = useQuery({
    queryKey: ["products/categories/subcategories"],
    queryFn: getDistinctSubcategories,
  });

  return (
    <section>
      <Container>
        <ul className={styles.container}>
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
                  <li key={id} className={styles.li}>
                    <Link to="/">
                      <span className={styles.image}>
                        <img src={image} alt={name} />
                      </span>{" "}
                      <p>{name}</p>
                    </Link>
                  </li>
                ),
            )}
        </ul>
      </Container>
    </section>
  );
};
