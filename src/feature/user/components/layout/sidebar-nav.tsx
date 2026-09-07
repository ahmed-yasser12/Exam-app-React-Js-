import { NavLink } from "react-router";
import { USER_NAVIGATION } from "../../constants/user-navigation";

function SidebarNav() {
  return (
    <nav className="mt-12">
      <ul className="flex flex-col gap-2">
        {USER_NAVIGATION.map(({ label, path, icon: Icon }) => (
          <li key={path}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-md px-4 py-3 ${
                  isActive
                    ? "bg-blue-100 text-blue-600"
                    : "text-gray-500 hover:bg-blue-100 hover:text-blue-600"
                }`
              }
            >
              <Icon className="size-5" />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SidebarNav;