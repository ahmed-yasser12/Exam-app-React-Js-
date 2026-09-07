import type { RouteObject } from "react-router";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import ForgetPasswordPage from "./pages/forget-password";
import ResetPasswordPage from "./pages/ResetPasswordPage";

export const authRoutes: RouteObject[] = [
  
  { path: "login", element: <LoginPage /> },
  { path: "register", element: <RegisterPage /> },
  { path: "forget-password", element: <ForgetPasswordPage /> },
  {path: "reset-password",element: <ResetPasswordPage /> },
];
