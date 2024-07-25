import Header from "@/layout/header/Header.tsx";
import { Outlet } from "react-router-dom";
import Footer from "@/layout/footer/Footer.tsx";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
