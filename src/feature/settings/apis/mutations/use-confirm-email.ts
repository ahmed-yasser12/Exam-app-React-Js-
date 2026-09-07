import { useMutation } from "@tanstack/react-query";
import { confirmEmailChange } from "../confirm-email";

export function useConfirmEmailChange() {
  return useMutation({
    mutationFn: confirmEmailChange,
  });
}