import Container from "../../ui/Container.tsx";
import Button from "../../ui/Button.tsx";

const HomeWearableBanner = () => {
  return (
    <section>
      <Container>
        <div className="w-full h-[420px] relative overflow-hidden text-white rounded-md bg-banner-wearable-primary">
          <div className="absolute flex inset-0 px-16 justify-around items-center z-10">
            <div className="flex flex-col items-center">
              <h3 className="text-h1">Smart Watches</h3>
              <h4>Various designs and brands</h4>
              <div className="mt-8">
                <Button
                  size="sm"
                  className="bg-banner-wearable-secondary text-banner-wearable-primary"
                >
                  View
                </Button>
              </div>
            </div>
            <div className="w-[500px]">
              <img
                src="/images/watches.png"
                alt="Smart Watches"
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute -right-1/4 top-1/2 -translate-y-1/2 text-banner-wearable-secondary">
            <svg
              width="800"
              height="420"
              viewBox="0 0 800 420"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                cx="400"
                cy="258.5"
                rx="400"
                ry="327.5"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeWearableBanner;
