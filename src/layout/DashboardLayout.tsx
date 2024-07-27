import Container from '@/ui/Container.tsx';
import Header from '@/layout/header/Header.tsx';
import Sidebar from '@/features/auth/dashboardSidebar/sidebar/Sidebar.tsx';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <main className='mt-16'>
        <Container>
          <Sidebar />
          <main className='place-self-start overflow-y-auto'>
            <Outlet />
          </main>
        </Container>
      </main>
    </>
  );
};

export default DashboardLayout;
