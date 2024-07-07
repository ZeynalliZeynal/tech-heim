import Navbar from "./navbar/Navbar.tsx";
import Container from "../../ui/Container.tsx";

const Header = () => {
  return (
    <header className="sticky top-0 text-body-lg z-[900] bg-white border-b border-[#A8C9FB] h-[100px]">
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
