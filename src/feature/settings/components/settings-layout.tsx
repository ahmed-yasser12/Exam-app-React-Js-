// src/feature/settings/components/settings-layout.tsx
import { NavLink, Outlet, useNavigate } from "react-router";
import { User, Lock, ChevronLeft, LogOut } from "lucide-react";
import Heading from "@/feature/auth/shared/components/heading";

export default function SettingsLayout() {
  const navigate = useNavigate();
  function Logout() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div className="min-h-screen bg-gray-50/50 font-mono p-6">
      {/* Top Header Banner */}
         <header className="mb-8 flex items-center gap-2.5">
            <button
          type="button"
          onClick={() => navigate(-1)}
          className="px-1.5 py-6 w-9 h-20 text-center border-blue-500 border bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
          <Heading className="flex items-center gap-1 w-full bg-blue-600 py-5 text-3xl text-white">
            <User className="ms-4 size-11" />
            Account Settings
          </Heading>
        </header>


      {/* Main Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Sub-Sidebar */}
        <div className="md:col-span-3 flex flex-col justify-between bg-white p-4 rounded-xl border border-gray-100 min-h-[500px]">
          <div className="space-y-2">
            <NavLink
              to="/settings/profile"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              <User className="w-4 h-4" />
              Profile
            </NavLink>

            <NavLink
              to="/settings/change-password"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 font-bold"
                    : "text-gray-600 hover:bg-gray-50"
                }`
              }
            >
              <Lock className="w-4 h-4" />
              Change Password
            </NavLink>
          </div>

          {/* Logout Button at bottom */}
          <button
            type="button" onClick={Logout}
            className="flex items-center hover:cursor-pointer gap-3 px-4 py-3 rounded-lg text-sm font-bold text-red-500 bg-red-50 hover:bg-red-100 transition-colors w-full"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>

        {/* Right Dynamic Content (Profile or Change Password) */}
        <div className="md:col-span-9 bg-white p-6 rounded-xl border border-gray-100">
          <Outlet />
        </div>
      </div>
    </div>
  );
}