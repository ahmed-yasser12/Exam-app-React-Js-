import { useQuery } from "@tanstack/react-query";
import { getUserProfileApi } from "../user-api";

export function useUserProfile() {
  return useQuery({
    queryKey: ["user-profile"],
    queryFn: getUserProfileApi,
  });
}