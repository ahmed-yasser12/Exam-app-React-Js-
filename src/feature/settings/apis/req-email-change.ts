import { getToken } from "@/feature/auth/apis/utils/token-utils";
import type { IRequestEmailChangePayload, IRequestEmailChangeResponse } from "../types/email";
import { api } from "@/shared/lib/axios";
const token = getToken();
export async function requestEmailChange(payload: IRequestEmailChangePayload,):
 Promise<IRequestEmailChangeResponse> {
  const response = await api.post<IRequestEmailChangeResponse>(
    "/users/email/request",
    payload, { headers: {
        Authorization: `Bearer ${token}`,
      },}
  );

  return response.data;
}
