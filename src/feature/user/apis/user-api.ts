import { api } from "@/shared/lib/axios";
import type { IUserProfileResponse } from "../types/user";
import { getToken } from "@/feature/auth/apis/utils/token-utils";

const USER_ENDPOINT = "/users/profile";
export async function getUserProfileApi(): Promise<IUserProfileResponse> {
    const token = getToken();
  const response = await api.get<IUserProfileResponse>(
    `${USER_ENDPOINT}`,{
        headers:{  Authorization: `Bearer ${token}`,}
    }
  );

  return response.data;
}