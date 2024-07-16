import Container from "../../ui/Container.tsx";
import { SERVICES } from "../../utils/variables.tsx";

const HomeServices = () => {
  return (
    <section>
      <Container>
        <ul className="justify-between w-full lg:flex grid sm:grid-cols-2 grid-cols-1 gap-8 lg:gap-0">
          {SERVICES.map((service, i) => (
            <li
              key={i}
              className="gap-4 items-center lg:justify-start sm:justify-center"
            >
              <span className="size-10">{service.icon}</span>
              <span className="xl:text-body-xl text-black uppercase">
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
