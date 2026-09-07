import { getToken } from "@/feature/auth/apis/utils/token-utils";
import type { IUpdateProfilePayload, IUpdateProfileResponse } from "../types/profile";
import { api } from "@/shared/lib/axios";
const token = getToken();
export async function getProfileApi(): Promise<IUpdateProfileResponse> {
  const response = await api.get<IUpdateProfileResponse>("/users/profile",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },);
  return response.data;
}

export async function updateProfileApi(
  profileData: IUpdateProfilePayload,  // update fn , ln , phone , profilePhoto
): Promise<IUpdateProfileResponse> {
  const response = await api.patch<IUpdateProfileResponse>(
    "/users/profile",
    profileData,  {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
}