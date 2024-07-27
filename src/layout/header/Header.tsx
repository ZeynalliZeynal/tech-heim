import { memo, useEffect, useRef, useState } from "react";

import Container from "@/ui/Container.tsx";
import Navbar from "@/layout/navbar/Navbar.tsx";
import classNames from "classnames";

const Header = memo(() => {
  const [lastScrollY, setLastScrollY] = useState(0);

  const headerRef = useRef<HTMLHRElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      setLastScrollY(scrollY);
      /*
      if (header) {
        if (currentScrollY <= 84) {
          // at the top
          header.classList.remove("border-primary");
          header.classList.remove("fixed");
          header.classList.add("relative");
          header.classList.add("border-white");
          header.classList.remove("-translate-y-full");
        } else if (currentScrollY < lastScrollY) {
          // scrolling up
          header.classList.add("fixed");
          header.classList.remove("relative");
          header.classList.remove("border-white");
          header.classList.add("border-primary");
          header.classList.remove("-translate-y-full");
          header.classList.add("translate-y-0");
        } else if (currentScrollY > lastScrollY) {
          // scrolling down
          header.classList.add("fixed");
          header.classList.remove("relative");
          header.classList.remove("border-white");
          header.classList.add("border-primary");
          header.classList.add("-translate-y-full");
          header.classList.remove("translate-y-0");
        }
        setLastScrollY(currentScrollY);
      }
       */
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      ref={headerRef}
      className={classNames(
        "top-0 left-0 w-full relative text-body-lg z-[900] h-16 transition border-b bg-white",
        {
          "border-primary backdrop-blur backdrop-filter bg-white/80":
            lastScrollY > 64,
          "border-white": lastScrollY < 64,
        },
      )}
    >
      <Container>
        <Navbar />
      </Container>
    </header>
  );
});

export default Header;
