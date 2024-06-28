import Container from "../../../ui/Container.tsx";
import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../../../services/apiGetters.ts";
import HomeSectionTitle from "../../../ui/home/HomeSectionTitle.tsx";
import HomeSectionContainer from "../../../ui/home/HomeSectionContainer.tsx";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";

import "swiper/css/free-mode";

const HomeBrands = () => {
  const { data: brands, isPending } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  const set = new Set();
  const distinctBrands = brands?.filter((brand) => {
    if (set.has(brand.name)) {
      return false;
    } else {
      set.add(brand.name);
      return true;
    }
  });

  return (
    <section>
      <Container>
        <HomeSectionContainer>
          <HomeSectionTitle title="Top Brands" />
          <Swiper
            slidesPerView={6}
            spaceBetween={64}
            freeMode={true}
            modules={[FreeMode]}
            className="w-full"
          >
            {distinctBrands?.map((brand) => (
              <SwiperSlide>
                <div className="h-16">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}{" "}
            {distinctBrands?.map((brand) => (
              <SwiperSlide>
                <div className="h-16">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </HomeSectionContainer>
      </Container>
    </section>
  );
};

export default HomeBrands;
