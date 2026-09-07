import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProfileApi } from "../profile-api";

export function useUpdateProfile() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfileApi,
    onSuccess: (response) => {
      queryClient.setQueryData(["profile"], response);
    },
  });
}