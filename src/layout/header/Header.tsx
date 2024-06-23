import Navbar from "./navbar/Navbar.tsx";
import Container from "../../ui/Container.tsx";
import Overlay from "../../ui/Overlay.tsx";
import { useDropdown } from "../../context/DropdownContext.tsx";

const Header = () => {
  const { isNavMenuOpen } = useDropdown();
  return (
    <>
      <Overlay isActive={isNavMenuOpen} zIndex={5} />
      <header className="relative text-body-lg z-[900] bg-white border-b border-[#A8C9FB] h-[100px]">
        <Container>
          <Navbar />
        </Container>
      </header>
    </>
  );
};

export default Header;
