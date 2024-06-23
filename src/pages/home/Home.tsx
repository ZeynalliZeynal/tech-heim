import HomeBanner from "./HomeBanner.tsx";
import HomeCategories from "./HomeCategories.tsx";
import HomeCarousel from "./homeCarousel/HomeCarousel.tsx";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <HomeCategories />
      <HomeCarousel />
    </>
  );
};

export default Home;
