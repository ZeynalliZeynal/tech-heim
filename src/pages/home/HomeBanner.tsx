import Container from "../../ui/Container.tsx";
import Button from "../../ui/Button.tsx";

const HomeBanner = () => {
  return (
    <section>
      <Container>
        <div className="flex justify-between w-full">
          <div className="flex flex-col justify-center text-primary-700">
            <h1 className="text-display-1 font-bold">Tech Heim</h1>
            <h3>
              "Join the{" "}
              <span className="mt-[50px] mb-[110px] text-secondary">
                digital revolution
              </span>
              "
            </h3>
            <Button className="bg-secondary text-white hover:bg-secondary-500 h-14 rounded-md">
              Explore More
            </Button>
          </div>
          <div className="flex flex-col justify-center">
            <div className='w-[750px] h-[450px] bg-no-repeat bg-cover bg-[url("/images/home_banner_bg.jpg")]' />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
