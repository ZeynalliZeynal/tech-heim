import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '@/layout/MainLayout.tsx';
import Home from '@/pages/home/Home.tsx';
import Products from '@/pages/products/Products.tsx';
import Blog from '@/pages/blog/Blog.tsx';
import Faq from '@/pages/faq/Faq.tsx';
import ContactUs from '@/pages/contact/Contact.tsx';
import PersonalData from '@/features/auth/dashboardSidebar/PersonalData';
import DashboardLayout from '@/layout/DashboardLayout.tsx';
import PaymentInstallments from './pages/dashboard/PaymentInstallments';
import Orders from './pages/dashboard/Orders';
import Wishlist from './pages/dashboard/Wishlist';
import Notifications from './pages/dashboard/Notifications';
import Discounts from './pages/dashboard/Discounts';
import Security from './pages/dashboard/Security';

// todo: optimize chunks

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/products',
        element: <Products />,
        children: [
          {
            path: ':device',
            element: <Products />,
          },
        ],
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/faq',
        element: <Faq />,
      },
      {
        path: '/contact',
        element: <ContactUs />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <Navigate to='personalData' replace={true} />,
      },
      {
        path: 'personalData',
        element: <PersonalData />,
      },
      {
        path: 'paymentInstallments',
        element: <PaymentInstallments />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
      {
        path: 'wishlist',
        element: <Wishlist />,
      },
      {
        path: 'notifications',
        element: <Notifications />,
      },
      {
        path: 'discounts',
        element: <Discounts />,
      },
      {
        path: 'security',
        element: <Security />,
      },
    ],
  },
]);
