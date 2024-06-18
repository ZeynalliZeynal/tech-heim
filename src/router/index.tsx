import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/mainLayout/MainLayout.tsx";
import Home from "../pages/home/Home.tsx";
import Products from "../pages/products/Products.tsx";
import Blog from "../pages/blog/Blog.tsx";
import Faq from "../pages/faq/Faq.tsx";
import ContactUs from "../pages/contact/Contact.tsx";

export const router = createBrowserRouter([
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
]);
