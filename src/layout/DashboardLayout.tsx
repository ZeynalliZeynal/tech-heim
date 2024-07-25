import Container from '@/ui/Container.tsx';
import Header from '@/layout/header/Header.tsx';
import Sidebar from '@/features/auth/dashboardSidebar/sidebar/Sidebar.tsx';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
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
