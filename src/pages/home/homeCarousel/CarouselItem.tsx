import { useQuery } from "@tanstack/react-query";

import styles from "./carousel.module.scss";
import { getProductDetails } from "../../../services/apiGetters.ts";
import { formatCurrency } from "../../../helpers/converters.ts";
import { Link } from "react-router-dom";

const CarouselItem = ({ product }: any) => {
  const { data } = useQuery({
    queryKey: ["products/details", product?.id],
    queryFn: () => getProductDetails(product?.id),
  });

  const productDetail = data?.details?.at(0);
  const productBrand = data?.brands?.at(0);

  const price = formatCurrency(
    product.price - (product.price * product.discount_percent) / 100,
  );

  return (
    <Link to="/" className={styles.item}>
      <span className={styles.discount}>{product.discount_percent}%</span>
      <span className={styles.image}>
        <img src={productDetail?.img_url} alt={productBrand?.name} />
      </span>
      <p>
        <b>{productBrand?.name}</b>, {productDetail?.model}
      </p>
      <div>
        <del>{formatCurrency(product.price)}</del>
        <span>{price}</span>
      </div>
    </Link>
  );
};

export default CarouselItem;
