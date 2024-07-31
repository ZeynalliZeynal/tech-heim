import Sidebar from "@/features/auth/dashboardSidebar/sidebar/Sidebar.tsx";
import { Outlet } from "react-router-dom";
import Header from "@/layout/header/Header.tsx";
import Container from "@/ui/Container.tsx";

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <main className="py-6 mt-16">
        <Container>
          <Sidebar />
          <main className="place-self-start overflow-auto">
            <Outlet />
          </main>
        </Container>
      </main>
    </>
  );
};

export default DashboardLayout;
