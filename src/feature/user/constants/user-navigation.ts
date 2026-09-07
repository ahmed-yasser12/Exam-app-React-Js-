import { GraduationCap ,User  } from "lucide-react";

export const USER_NAVIGATION = [
  {
    label: "Diplomas",
    path: "/diplomas",
    icon: GraduationCap,
  },
  {
    label: "Account Settings",
    path: "/settings",
    icon: User,
  },
] as const;