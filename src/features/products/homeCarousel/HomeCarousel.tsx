import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

import Container from "../../../ui/Container.tsx";
import CarouselItem from "./CarouselItem.tsx";
import { useRef, useState } from "react";
import { Swiper as SwiperTypes } from "swiper/types";
import HomeCarouselButtons from "./HomeCarouselButtons.tsx";
import { useFilteredProducts } from "@/features/products/useFilteredProducts.ts";
import Skeleton from "@/ui/Skeleton.tsx";

const HomeCarousel = () => {
  const [isBeginning, setIsBeginning] = useState<boolean>(true);
  const [isEnd, setIsEnd] = useState<boolean>(false);

  const { products, isPending } = useFilteredProducts(
    {
      filter: { field: "discount_percent", value: 0 },
      method: "gt",
    },
    "with-discount",
  );

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      // @ts-expect-error doesnt have a type
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    // @ts-expect-error doesnt have a type
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  const handleSlideChange = (swiper: SwiperTypes) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  return (
    <section>
      <Container>
        {isPending ? (
          <Skeleton h="[250px]" />
        ) : (
          <div className="grid grid-cols-1 bg-primary-500 bg-[url('/images/random-shape-in-blue.png')] bg-no-repeat bg-contain px-8 py-11 gap-2 rounded-md select-none">
            <div className="flex sm:flex-row flex-col items-center gap-8 w-full">
              <div className="flex sm:flex-col sm:justify-around justify-between w-full flex-wrap sm:basis-[264px] sm:h-full text-white sm:text-center">
                <h4>
                  Products on Sale
                  <p className="font-light md:text-body-xl text-body-sm">
                    Shop Now!
                  </p>
                </h4>
                <Link to="/" className="py-3 px-2 group gap-1 text-body-md">
                  View all
                  <span className="size-[14px] group-hover:translate-x-1 transition-all">
                    <FaAngleRight />
                  </span>
                </Link>
              </div>
              <Swiper
                onSlideChange={handleSlideChange}
                ref={swiperRef}
                slidesPerView={1}
                spaceBetween={24}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 16,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 5,
                    spaceBetween: 24,
                  },
                }}
                className="flex-1 cursor-grab active:cursor-grabbing w-full items-stretch"
              >
                {products?.map((product) => (
                  <SwiperSlide key={product.id}>
                    <CarouselItem product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <HomeCarouselButtons
              handleNext={handleNext}
              handlePrev={handlePrev}
              isBeginning={isBeginning}
              isEnd={isEnd}
            />
          </div>
        )}
      </Container>
    </section>
  );
};

export default HomeCarousel;
