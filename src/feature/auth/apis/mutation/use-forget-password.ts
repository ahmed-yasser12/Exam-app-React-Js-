import { useMutation } from "@tanstack/react-query";
import { forgetPasswordApi } from "../auth-api";
export function UseForgetPassword() {
  return useMutation({
    mutationFn: forgetPasswordApi
  });
}
