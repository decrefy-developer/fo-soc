import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "./layout/LoginLayout";
import RootLayout from "./layout/RootLayout";
import { HomePage, LoginPage, OrderPage } from "./pages";

export const router = createBrowserRouter([
  {
    path: "",
    element: <LoginLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/",
        element: <LoginPage />,
        errorElement: <div>Error</div>,
      },
    ],
  },
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: "/home",
        element: <HomePage />,
        errorElement: <div>Error</div>,
      },
      {
        path: "/orders",
        element: <OrderPage />,
        errorElement: <div>Error</div>,
      },
    ],
  },
]);
