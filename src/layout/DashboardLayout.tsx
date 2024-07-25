import Container from "@/ui/Container.tsx";
import Header from "@/layout/header/Header.tsx";
import Sidebar from "@/features/auth/dashboardSidebar/sidebar/Sidebar.tsx";
import { Outlet, useNavigate } from "react-router-dom";
import { useUser } from "@/features/auth/useUser.ts";

const DashboardLayout = () => {
  const { isAuthenticated, isPending } = useUser();
  const navigate = useNavigate();

  if (!isAuthenticated) navigate("/");
  if (isPending) return null;
  return (
    <>
      <Header />
      <main>
        <Container>
          <Sidebar />
          <main>
            <Outlet />
          </main>
        </Container>
      </main>
    </>
  );
};

export default DashboardLayout;
