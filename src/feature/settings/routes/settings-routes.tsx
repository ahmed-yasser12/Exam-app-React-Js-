// src/feature/settings/routes/settings-routes.tsx
import { Navigate, type RouteObject } from "react-router";
import ProfilePage from "./pages/ProfilePage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import SettingsLayout from "../components/settings-layout";

export const settingsRoutes: RouteObject[] = [
  {
    path: "settings",
    element: <SettingsLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="profile" replace />, 
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "change-password",
        element: <ChangePasswordPage />,
      },
    ],
  },
];