import Container from "../../ui/Container.tsx";
import { SERVICES } from "../../utils/variables.tsx";

const HomeServices = () => {
  return (
    <section>
      <Container>
        <ul className="justify-between w-full">
          {SERVICES.map((service, i) => (
            <li key={i} className="gap-4 items-center">
              {service.icon}{" "}
              <span className="text-body-xl text-black uppercase">
                {service.text}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HomeServices;
