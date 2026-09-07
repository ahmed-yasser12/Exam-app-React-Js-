import type {
  IDiplomaDetailsResponse,
  IDiplomaResponse,
  IDiplomaSearchParams,
} from "./../types/diploma.d";
import { DIPLOMA_ENDPOINT } from "./diploma-endpoint";
import { api } from "@/shared/lib/axios";
import { getToken } from "@/feature/auth/apis/utils/token-utils";

export async function getDiplomaListApi({
  page,
  limit,
}: IDiplomaSearchParams): Promise<IDiplomaResponse> {
  const token = getToken();
  const response = await api.get<IDiplomaResponse>(`${DIPLOMA_ENDPOINT}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {page ,limit},
  });
  return response.data;
}
export async function getDiplomaDetailsApi(
  diplomaId: string,
): Promise<IDiplomaDetailsResponse> {
  const token = getToken();
  const response = await api.get<IDiplomaDetailsResponse>(
    `${DIPLOMA_ENDPOINT}/${diplomaId}`,{  headers: {
      Authorization: `Bearer ${token}`,
    },}
  );

  return response.data;
}