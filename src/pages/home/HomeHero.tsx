import Container from "../../ui/Container.tsx";
import Button from "../../ui/Button.tsx";
import { useNavigate } from "react-router-dom";

const HomeHero = () => {
  const navigate = useNavigate();

  return (
    <section>
      <Container>
        <div className="grid sm:grid-cols-[5fr_7fr] grid-cols-2 justify-items-end w-full">
          <div className="flex flex-col justify-around text-primary-700 justify-self-start gap-3">
            <h1 className="lg:text-display-1">Tech Heim</h1>
            <h3 className="">
              "Join the{" "}
              <span className="text-secondary">digital revolution</span>"
            </h3>
            <Button
              size="lg"
              style="secondary-regular"
              onClick={() => navigate("/todo")}
            >
              Explore More
            </Button>
          </div>
          <div className="flex flex-col justify-center">
            <div className="max-w-[750px] max-h-[450px]">
              <img
                src="/images/home_banner_bg.jpg"
                alt="Banner"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeHero;
