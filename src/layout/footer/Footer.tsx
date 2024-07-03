import Container from "../../ui/Container";
import FooterBlur from "./FooterBlur.tsx";
import FooterCards from "./FooterCards.tsx";
import FooterTop from "./FooterTop.tsx";
import { FooterBottom } from "./FooterBottom.tsx";

const Footer = () => {
  return (
    <footer className="bg-primary-900">
      <Container>
        <div className="flex flex-col w-full gap-3">
          <div className="flex flex-col w-full relative">
            <FooterTop />
            <FooterBlur />
            <FooterCards />
          </div>
          <div className="text-neutral-gray-400 text-body-sm flex items-center h-14">
            <FooterBottom />
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
