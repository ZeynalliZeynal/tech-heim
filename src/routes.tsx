import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "@/layout/MainLayout.tsx";
import Home from "@/pages/home/Home.tsx";
import Products from "@/pages/products/Products.tsx";
import Blog from "@/pages/blog/Blog.tsx";
import Faq from "@/pages/faq/Faq.tsx";
import ContactUs from "@/pages/contact/Contact.tsx";
import PersonalData from "@/pages/dashboard/PersonalData.tsx";
import DashboardLayout from "@/layout/DashboardLayout.tsx"; // todo: optimize chunks

// todo: optimize chunks

export const routes = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
        children: [
          {
            path: ":device",
            element: <Products />,
          },
        ],
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="personalData" replace={true} />,
      },
      {
        path: "personalData",
        element: <PersonalData />,
      },
    ],
  },
]);
