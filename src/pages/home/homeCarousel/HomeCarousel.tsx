import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { Swiper, SwiperSlide } from 'swiper/react';

import { getProductsHasDiscount } from '../../../services/apiGetters.ts';
import Container from '../../../ui/Container.tsx';
import CarouselItem from './CarouselItem.tsx';
import Button from '../../../ui/Button.tsx';
import { useRef, useState } from 'react';
import { Swiper as SwiperTypes } from 'swiper/types';
import HomeCarouselButtons from './HomeCarouselButtons.tsx';

const HomeCarousel = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const { data: products, isPending } = useQuery({
    queryKey: ['products'],
    queryFn: getProductsHasDiscount,
  });

  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.swiper.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.swiper.slideNext();
  };

  const handleSlideChange = (swiper: SwiperTypes) => {
    setSlideIndex(swiper.activeIndex);
  };

  const totalSlides = products ? products.length : 0;

  if (isPending) return 'Loading...';

  return (
    <section>
      <Container>
        <div className="grid grid-cols-1 bg-primary-500 bg-[url('/images/random-shape-in-blue.png')] bg-no-repeat bg-contain px-8 py-11 gap-2 rounded-md select-none">
          <div className='flex items-center gap-8 w-full'>
            <div className='flex flex-col justify-between flex-wrap basis-[264px] h-[200px] text-white text-center'>
              <h4>
                Products on Sale
                <p className='mt-2 font-light text-body-xl'>Shop Now!</p>
              </h4>
              <Link to='/' className='py-3 px-2 group gap-1'>
                View all
                <span className='size-[14px] group-hover:translate-x-1 transition-all'>
                  <FaAngleRight />
                </span>
              </Link>
            </div>
            <Swiper
              onSlideChange={handleSlideChange}
              ref={swiperRef}
              slidesPerView={5}
              spaceBetween={24}
              className='flex-1 cursor-grab active:cursor-grabbing'
            >
              {products?.map((product) => (
                <SwiperSlide key={product.id}>
                  <CarouselItem product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <HomeCarouselButtons
            slideIndex={slideIndex}
            handleNext={handleNext}
            handlePrev={handlePrev}
            totalSlides={totalSlides}
          />
        </div>
      </Container>
    </section>
  );
};

export default HomeCarousel;
