import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "../enums/AppRoutes.enum";
import type { FC } from "react";
import AuthPage from "../pages/AuthPage";
import ChatPage from "../pages/ChatPage";
import LandingPage from "../pages/LadingPage";

const router = createBrowserRouter([
  {
    path: appRoutes.HOME,
    element: <LandingPage />,
  },
  {
    path: appRoutes.CHAT,
    element: <ChatPage />,
  },
  {
    path: appRoutes.AUTH,
    element: <AuthPage />,
  },
]);

const Router: FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
