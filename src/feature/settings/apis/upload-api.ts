import { getToken } from "@/feature/auth/apis/utils/token-utils";
import { api } from "@/shared/lib/axios";


const token = getToken();

export async function uploadProfileImageApi(
  uploadData: IUploadImagePayload,
): Promise<IUploadImageResponse> {
  const response = await api.post<IUploadImageResponse>("/upload", uploadData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
