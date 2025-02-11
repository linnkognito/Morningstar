import { createBrowserRouter, RouterProvider } from "react-router";

import AppLayout from "./ui/AppLayout";
import Cart from "./cart/Cart";
import Home from "./home/Home";
import Error from "./ui/Error";
import Products from "./products/Products";
import ProductPage from "./products/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/category/:categoryName",
        element: <Products />,
        errorElement: <Error />,
      },
      {
        path: "/products/:id",
        element: <ProductPage />,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
