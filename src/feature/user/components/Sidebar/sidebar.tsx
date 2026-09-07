import { FolderCode } from "lucide-react";
import Logo from "@/assets/logo.png";
import SidebarNav from "../layout/sidebar-nav";
import UserProfile from "../user-profile";
function Sidebar() {
  return (
    <aside className="flex  h-screen w-90.5 shrink-0 flex-col border-r bg-blue-50 ps-10">
      {/* Logo */}
      <div className="mt-10">
        <img
          className="text-2xl font-bold mb-2.5  bg-black text-black max-w-48"
          src={Logo}
          alt="Logo"
        />
        <p className="text-xl text-blue-600 flex items-center gap-2.5">
          <FolderCode className="size-7.5 text-blue-600" />
          Exam App
        </p>
      </div>
      {/* Links  && user profile */}
      <div className="mt-15 flex flex-col justify-end h-full ">
        <SidebarNav/>
      {/* userProfile */}
        <UserProfile/>
      </div>
    </aside>
  );
}

export default Sidebar;
