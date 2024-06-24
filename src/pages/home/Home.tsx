import HomeBanner from "./HomeBanner.tsx";
import HomeCategories from "./HomeCategories.tsx";
import HomeCarousel from "./homeCarousel/HomeCarousel.tsx";
import HomeNew from "./homeNew/HomeNew.tsx";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCategories />
      <HomeCarousel />
      <HomeNew />
    </>
  );
};

export default Home;
