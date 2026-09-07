import { api } from "@/shared/lib/axios";
import type {
  IConfirmEmailChangePayload,
  IConfirmEmailChangeResponse,
} from "../types/email";
import { getToken } from "@/feature/auth/apis/utils/token-utils";
const token = getToken();
export async function confirmEmailChange(
  payload: IConfirmEmailChangePayload,
): Promise<IConfirmEmailChangeResponse> {
  const response = await api.post<IConfirmEmailChangeResponse>(
    "/users/email/confirm",
    payload,{
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  return response.data;
}