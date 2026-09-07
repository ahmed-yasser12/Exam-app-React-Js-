import { useQuery } from "@tanstack/react-query";
import { getProfileApi } from "../profile-api";

export function useProfile() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfileApi,
  });
}