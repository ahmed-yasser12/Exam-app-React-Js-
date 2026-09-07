import { useMutation } from "@tanstack/react-query";
import { uploadProfileImageApi } from "../upload-api";

export function useUploadImage() {
  return useMutation({
    mutationFn: uploadProfileImageApi,
  });
}