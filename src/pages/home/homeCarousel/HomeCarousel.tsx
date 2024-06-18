import { useQuery } from "@tanstack/react-query";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { getProductsHasDiscount } from "../../../services/apiGetters.ts";
import styles from "./carousel.module.scss";
import Container from "../../../ui/container/Container.tsx";
import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import CarouselItem from "./CarouselItem.tsx";

const HomeCarousel = () => {
  const { data: products, isPending } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsHasDiscount,
  });

  if (isPending) return "Loading...";

  return (
    <section>
      <Container>
        <div className={styles.container}>
          <div className={styles.title}>
            <h4>
              Products on Sale
              <p>Shop Now!</p>
            </h4>
            <Link to="/">
              View all
              <span style={{ width: "16px", height: "16px" }}>
                <FaAngleRight />
              </span>
            </Link>
          </div>
          <Swiper
            slidesPerView={5}
            spaceBetween={24}
            className={styles.carousel}
          >
            {products?.map((product) => (
              <SwiperSlide key={product.id}>
                <CarouselItem product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default HomeCarousel;
