import HomeHero from "./HomeHero.tsx";
import HomeCategories from "../../features/categories/HomeCategories.tsx";
import HomeCarousel from "@/features/products/homeCarousel/HomeCarousel.tsx";
import HomeNew from "../../features/products/HomeNew.tsx";
import HomeBanner from "./HomeBanner.tsx";
import HomeBrands from "../../features/brands/HomeBrands.tsx";
import HomeWearableBanner from "./HomeWearableBanner.tsx";
import HomeBlog from "./HomeBlog.tsx";
import HomeServices from "./HomeServices.tsx";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeCategories />
      <HomeCarousel />
      <HomeNew />
      <HomeBanner />
      <HomeBrands />
      <HomeWearableBanner />
      <HomeBlog />
      <HomeServices />
    </>
  );
};

export default Home;
