import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "../enums/AppRoutes.enum";
import type { FC } from "react";
import AuthPage from "../pages/AuthPage";

const router = createBrowserRouter([
  {
    path: appRoutes.AUTH,
    element: <AuthPage />,
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
