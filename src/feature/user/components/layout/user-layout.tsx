import { Outlet} from "react-router";
import Sidebar from "../Sidebar/sidebar";

function UserLayout() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className={"flex-1 min-w-0"}>
    
        <Outlet />
      </main>
    </div>
  );
}

export default UserLayout;
