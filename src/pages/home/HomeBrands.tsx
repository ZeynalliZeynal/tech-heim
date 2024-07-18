import Container from "../../ui/Container.tsx";
import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../../services/apiProducts.ts";
import HomeSectionContainer from "../../ui/home/HomeSectionContainer.tsx";

import "swiper/css/free-mode";
import { useEffect, useRef } from "react";

const HomeBrands = () => {
  const { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: getBrands,
  });

  const scrollerRef = useRef<HTMLDivElement>(null);
  const scrollerInnerRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      brands
    ) {
      addAnimation();
    }
  }, [brands]);

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
        <HomeSectionContainer title="Top Brands" to="/">
          <div
            ref={scrollerRef}
            className="overflow-hidden"
            style={{
              mask: "linear-gradient(90deg, transparent, white 10%, white 90%, transparent)",
            }}
          >
            <ul
              ref={scrollerInnerRef}
              className="justify-start gap-8 py-4 shrink-0 w-max animate-swipe"
            >
              {distinctBrands?.map((brand) => (
                <li key={brand.id} className="lg:h-auto md:h-12 h-6">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="object-contain"
                  />
                </li>
              ))}
            </ul>
          </div>
        </HomeSectionContainer>
      </Container>
    </section>
  );
};

export default HomeBrands;
