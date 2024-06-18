import Navbar from "./Navbar.tsx";
import styles from "./header.module.scss";
import Container from "../../ui/container/Container.tsx";
import Overlay from "../../ui/Overlay.tsx";
import { useDropdown } from "../../context/DropdownContext.tsx";

const Header = () => {
  const { isNavMenuOpen } = useDropdown();
  return (
    <>
      <Overlay isActive={isNavMenuOpen} zIndex={5} />
      <header className={styles.header}>
        <Container>
          <Navbar />
        </Container>
      </header>
    </>
  );
};

export default Header;
