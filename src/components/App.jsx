import { createBrowserRouter, RouterProvider } from "react-router";

import AppLayout from "./ui/AppLayout";
import Cart from "./cart/Cart";
import Home from "./home/Home";
import Error from "./ui/Error";
import Products from "./products/Products";
import ProductPage from "./products/ProductPage";
import { Toaster } from "react-hot-toast";
import SavedProducts from "./user/SavedProducts";
import Login from "./user/Login";
import Signup from "./user/Signup";

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
      {
        path: "/user/saved",
        element: <SavedProducts />,
        errorElement: <Error />,
      },
      {
        path: "/user/login",
        element: <Login />,
        errorElement: <Error />,
      },
      {
        path: "/user/signup",
        element: <Signup />,
        errorElement: <Error />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />

      <Toaster
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "1.2rem",
            fontFamily: "Bebas Neue, sans-serif",
            color: "#0F0F0F",
            backgroundColor: "rgba(244, 244, 242, 0.8)",
            backdropFilter: "blur(2px)",
            border: "2px solid #D19BF3",
            borderRadius: "1em",
            boxShadow: "0 0 15px rgba(15,15,15,0.1)",
          },
        }}
      />
    </>
  );
}
