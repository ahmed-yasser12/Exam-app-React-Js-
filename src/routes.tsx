import { Navigate, type RouteObject } from "react-router";
import { authRoutes } from "./feature/auth/routes/auth-routes";
import AuthLayout from "./feature/auth/components/layout/auth-layout";
import Authguard from "../src/feature/auth/components/authGuard/Authguard";
import { diplomaRoutes } from "./feature/diploma/diploma-route";
import UserLayout from "./feature/user/components/layout/user-layout";
import { examsRoutes } from "./feature/exam/routes/exams-route";
import { settingsRoutes } from "./feature/settings/routes/settings-routes";

export const routes: RouteObject[] = [
  {
    // authentication routes
    path: "/",
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />,
      },
      { element: <AuthLayout />, children: authRoutes },
      // user Routes
      {
        element: <Authguard />,
        children: [
          {
            element: <UserLayout />,
            children: [...diplomaRoutes, ...examsRoutes, ...settingsRoutes],
          },
        ],
      },
    ],
  },
  // admin routes
  {
    path: "/dashboard",
    element: (
      <div className="text-2xl text-amber-800 font-bold"> admin dashboard</div>
    ),
  },
];
