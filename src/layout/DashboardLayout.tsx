import Sidebar from "@/features/auth/dashboardSidebar/sidebar/Sidebar.tsx";
import { Outlet } from "react-router-dom";
import Header from "@/layout/header/Header.tsx";
import Container from "@/ui/Container.tsx";

const DashboardLayout = () => {
  return (
    <div className="h-screen">
      <Header />
      <main className="my-6">
        <Container>
          <Sidebar />
          <main className="place-self-start overflow-auto">
            <Outlet />
          </main>
        </Container>
      </main>
    </div>
  );
};

export default DashboardLayout;
