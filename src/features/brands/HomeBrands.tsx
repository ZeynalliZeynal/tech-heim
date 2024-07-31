import Container from "../../ui/Container.tsx";
import HomeSectionContainer from "../../ui/home/HomeSectionContainer.tsx";

import "swiper/css/free-mode";
import { useEffect, useRef } from "react";
import { useBrands } from "@/features/brands/useBrands.ts";
import Skeleton from "@/ui/Skeleton.tsx";

const HomeBrands = () => {
  const { brands, isPending } = useBrands();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLUListElement>(null);

  const addAnimation = () => {
    if (scrollerRef.current && scrollerInnerRef.current) {
      scrollerRef.current.setAttribute("data-animated", String(true));

      const scrollerContent = Array.from(scrollerInnerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerInnerRef.current?.appendChild(duplicatedItem);
      });
    }
  };

  useEffect(() => {
    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      brands
    ) {
      addAnimation();
    }
  }, [brands]);

  return (
    <section>
      <Container>
        <HomeSectionContainer title="Top Brands" to="/">
          <div
            ref={scrollerRef}
            className="overflow-hidden"
            style={{
              mask: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)",
            }}
          >
            {isPending ? (
              <Skeleton h={100} />
            ) : (
              <ul
                ref={scrollerInnerRef}
                className="justify-start gap-8 py-4 shrink-0 w-max animate-swipe"
              >
                {brands?.map((brand) => (
                  <li key={brand.id} className="lg:h-auto md:h-12 h-6">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="object-contain"
                    />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </HomeSectionContainer>
      </Container>
    </section>
  );
};

export default HomeBrands;
