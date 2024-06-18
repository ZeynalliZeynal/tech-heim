import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

import { getSubcategoriesById } from "../../../services/apiGetters.ts";
import loadingSpinner from "../../../assets/animation/loading-spinner.json";
import emptyList from "../../../assets/animation/empty-list.json";
import styles from "./dropdown-nav-item.module.scss";

// TODO: dont forget to generate the link later

export default ({ categoryId }: { categoryId: number }) => {
  const { data: subcategories, isPending } = useQuery({
    queryKey: ["products/categories/subcategoriesById", categoryId],
    queryFn: () => getSubcategoriesById(categoryId),
  });

  return (
    <div className={styles.itemsContainer}>
      {isPending ? (
        <Lottie
          animationData={loadingSpinner}
          style={{
            width: "200px",
          }}
        />
      ) : !subcategories?.length || !subcategories ? (
        <div className={styles.empty}>
          <h4>No subcategory is available yet</h4>
          <Lottie
            animationData={emptyList}
            style={{
              width: "200px",
            }}
          />
        </div>
      ) : (
        <div className={styles.grid}>
          <ul className={styles.ul}>
            {subcategories?.map(
              ({
                id,
                name,
                image,
              }: {
                id: number;
                name: string;
                image: string;
              }) => (
                <li key={id} style={{ justifyContent: "center" }}>
                  <Link to="/">
                    <span className={styles.item} title={name}>
                      <img src={image} alt={name} />
                    </span>
                    <h6>{name}</h6>
                  </Link>
                </li>
              ),
            )}{" "}
          </ul>
          <div className={styles.viewAll}>
            <Link to="/">View All</Link>
          </div>
        </div>
      )}
    </div>
  );
};
