import { useMutation } from "@tanstack/react-query";
import { requestEmailChange } from "../req-email-change";

export function useRequestEmailChange() {
  return useMutation({
    mutationFn: requestEmailChange,
  });
}