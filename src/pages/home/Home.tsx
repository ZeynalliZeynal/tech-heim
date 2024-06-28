import HomeHero from "./HomeHero.tsx";
import HomeCategories from "./HomeCategories.tsx";
import HomeCarousel from "./homeCarousel/HomeCarousel.tsx";
import HomeNew from "./homeNew/HomeNew.tsx";
import HomeBanner from "./homeBanner/HomeBanner.tsx";
import HomeBrands from "./homeBrands/HomeBrands.tsx";

const Home = () => {
  return (
    <>
      <HomeHero />
      <HomeCategories />
      <HomeCarousel />
      <HomeNew />
      <HomeBanner />
      <HomeBrands />
    </>
  );
};

export default Home;
