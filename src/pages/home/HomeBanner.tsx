import Container from "../../ui/Container.tsx";
import Button from "../../ui/Button.tsx";

const HomeBanner = () => {
  return (
    <section>
      <Container>
        <div className="flex gap-6">
          <div className="relative">
            <div className="h-full">
              <img src="/images/Banner.jpg" alt="Playstation 5" />
            </div>
            <div className="absolute left-[60px] bottom-9">
              <Button style="primary-regular" className="w-[150px]">
                Buy now
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeBanner;
