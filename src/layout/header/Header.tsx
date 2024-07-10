import Navbar from "./navbar/Navbar.tsx";
import Container from "../../ui/Container.tsx";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [lastScrollY, setLastScrollY] = useState(0);

  const headerRef = useRef<HTMLHRElement>(null);
  useEffect(() => {
    const header = headerRef.current;
    const handleScroll = () => {
      const currentScrollY = scrollY;
      if (header) {
        if (currentScrollY <= 84) {
          // at the top
          header.classList.remove("border-primary");
          header.classList.add("border-white");
          header.classList.remove("-translate-y-full");
        } else if (currentScrollY < lastScrollY) {
          // scrolling up
          header.classList.remove("border-white");
          header.classList.add("border-primary");
          header.classList.remove("-translate-y-full");
          header.classList.add("translate-y-0");
        } else if (currentScrollY > lastScrollY) {
          // scrolling down
          header.classList.remove("border-white");
          header.classList.add("border-primary");
          header.classList.add("-translate-y-full");
          header.classList.remove("translate-y-0");
        }
        setLastScrollY(currentScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full text-body-lg z-[900] bg-white h-16 transition border-b border-white"
    >
      <Container>
        <Navbar />
      </Container>
    </header>
  );
};

export default Header;
