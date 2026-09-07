import useToken from "@/feature/auth/hooks/use-token";
// import { ROLES } from "@/feature/user/constants/user.const";
import { Navigate, Outlet } from "react-router";

function Authguard() {
  
  // hooks
  const { getToken } = useToken();
  // variables
  const token = getToken();
  if (!token) return <Navigate to={"/login"} />;
// if (!roles.includes(user.role)) {
//   return <Navigate to="/unauthorized" replace />;
// }
  return <Outlet/>;
}

export default Authguard;
